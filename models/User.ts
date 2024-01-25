import monk from 'monk'
import { DEFAULT_PAGE_LIMIT } from '../constants/paginator'
import { BaseUser } from '../controllers/User'
import { UserPaginationQuery } from '../types/request'

const DB_URI = process.env.MONGO_DB_URI || 'localhost:27017'
console.log({ DB_URI })
const db = monk(DB_URI)

const users = db.get('users')

interface UserFilters {
  deletedAt?: { $exists: boolean }
  active?: boolean
}

const UserModel = {
  create: async (payload: BaseUser) => {
    try {
      // TODO: Validate unique users
      const created = await users.insert(payload)
      return created
    } catch (error) {
      return {
        error
      }
    }
  },

  getAll: async (query: UserPaginationQuery) => {
    try {
      let {
        limit = DEFAULT_PAGE_LIMIT,
        page = 1,
        status = 'active'
      }: UserPaginationQuery = query
      limit = Number(limit)
      page = Number(page)

      const skip = Number((page - 1) * limit)

      const filters: UserFilters = {
        deletedAt: { $exists: false }
      }

      if (status !== 'all') {
        filters.active = status === 'active'
      }

      const [data, count] = await Promise.all([
        users.find(filters, { limit, skip, sort: { createdAt: -1 } }),
        users.count(filters)
      ])

      return { data, count }
    } catch (error) {
      return {
        error
      }
    }
  },

  get: async (id: string) => {
    try {
      const user = await users.findOne({ _id: id })
      return user
    } catch (error) {
      return {
        error
      }
    }
  },

  update: async (id: string, payload: BaseUser) => {
    try {
      const updated = await users.findOneAndUpdate(
        { _id: id },
        {
          $set: payload
        }
      )
      return updated
    } catch (error) {
      return {
        error
      }
    }
  },

  delete: async (id: string) => {
    try {
      const payload = {
        deletedAt: new Date().toISOString()
      }

      const deleted = await users.findOneAndUpdate(
        { _id: id },
        {
          $set: payload
        }
      )
      return deleted
    } catch (error) {
      return {
        error
      }
    }
  }
}

export default UserModel
