import monk from "monk";
const DB_URI = process.env.MONGO_DB_URI || "localhost:27017";
const db = monk(DB_URI);

const users = db.get("users");

const UserModel = {
  create: async (payload) => {
    try {
      console.log({ payload });
      console.log({ users, db });
      const created = await users.insert(payload);
      console.log({ created });
      return created;
    } catch (error) {
      console.log({ error });
      return {
        error,
      };
    }
  },
};

export default UserModel;
