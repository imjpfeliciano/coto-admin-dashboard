import RequestFactory from "./RequestFactory";

const UsersService = {
  fetchUsers: async () => {
    const users = await RequestFactory.get("/api/users");
    return users;
  },

  createUser: async (name: string) => {
    const payload = {
      name,
    };

    const newUser = await RequestFactory.post("/api/users", payload);
    return newUser;
  },

  fetchUser: async (id: string) => {
    const user = await RequestFactory.get(`/api/users/${id}`);
    return user;
  },

  updateUser: async (id: string, payload: any) => {
    const updatedUser = await RequestFactory.put(`/api/users/${id}`, payload);
    return updatedUser;
  },

  deleteUser: async (id: string) => {
    const deletedUser = await RequestFactory.delete(`/api/users/${id}`);
    return deletedUser;
  },
};

export default UsersService;
