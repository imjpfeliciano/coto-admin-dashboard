import monk from "monk";
import { BaseUser } from "../controllers/User";

const DB_URI = process.env.MONGO_DB_URI || "localhost:27017";
const db = monk(DB_URI);

const users = db.get("users");

const UserModel = {
  create: async (payload: BaseUser) => {
    try {
      // TODO: Validate unique users
      const created = await users.insert(payload);
      return created;
    } catch (error) {
      return {
        error,
      };
    }
  },

  getAll: async () => {
    try {
      const all = await users.find({});
      return all;
    } catch (error) {
      return {
        error,
      };
    }
  },

  get: async (id: string) => {
    try {
      const user = await users.findOne({ _id: id });
      return user;
    } catch (error) {
      return {
        error,
      };
    }
  },

  update: async (id: string, payload: BaseUser) => {
    try {
      const updated = await users.findOneAndUpdate(
        { _id: id },
        {
          $set: payload,
        }
      );
      return updated;
    } catch (error) {
      return {
        error,
      };
    }
  },

  delete: async (id: string) => {
    try {
      const payload = {
        deletedAt: new Date().toISOString(),
      };

      const deleted = await users.findOneAndUpdate(
        { _id: id },
        {
          $set: payload,
        }
      );
      return deleted;
    } catch (error) {
      return {
        error,
      };
    }
  },
};

export default UserModel;
