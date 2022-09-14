import monk from "monk";
const DB_URI = process.env.MONGO_DB_URI || "localhost:27017";
const db = monk(DB_URI);

const users = db.get("users");

const UserModel = {
  create: async (payload) => {
    try {
      const created = await users.insert(payload);
      return created;
    } catch (error) {
      return {
        error,
      };
    }
  },
};

export default UserModel;
