import { UserPaginationQuery } from '../types/request'
import RequestFactory from './RequestFactory'

const USERS_URL = '/v1/api/users';

const UsersService = {
  fetchUsers: async (payload: UserPaginationQuery = {}) => {
    const response = await RequestFactory.get(USERS_URL, payload)
    return response
  },

  // TODO: add payload type definition
  createUser: async (payload: any) => {
    try {
      const newUser = await RequestFactory.post(USERS_URL, payload)
    return newUser
    } catch (error) {
      return null
    }
  },

  fetchUser: async (id: string) => {
    const user = await RequestFactory.get(`${USERS_URL}/${id}`)
    return user
  },

  update: async (id: string, payload: any) => {
    try {
      const requestPayload = {
        ...payload,
        updatedAt: new Date().toISOString()
      }

      const updatedUser = await RequestFactory.put(`${USERS_URL}/${id}`, requestPayload)

      return updatedUser
    } catch (error) {
      return null
    }
  },

  deleteUser: async (id: string) => {
    try {
      const deletedUser = await RequestFactory.delete(`${USERS_URL}/${id}`)
      return deletedUser
    } catch (error) {
      return null
    }
  }
}

export default UsersService
