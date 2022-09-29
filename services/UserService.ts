import { UserPaginationQuery } from "../types/request";
import RequestFactory from "./RequestFactory";

const UsersService = {
  fetchUsers: async (payload: UserPaginationQuery) => {
    const users = await RequestFactory.get("/api/users", payload);
    return users;
  },

  // TODO: add payload type definition
  createUser: async (payload: any) => {
    const newUser = await RequestFactory.post("/api/users", payload);
    return newUser;
  },

  fetchUser: async (id: string) => {
    const user = await RequestFactory.get(`/api/users/${id}`);
    return user;
  },

  update: async (id: string, payload: any) => {
    const requestPayload = {
      ...payload,
      updatedAt: new Date().toISOString(),
    };
    const updatedUser = await RequestFactory.put(`/api/users/${id}`, payload);
    return updatedUser;
  },

  deleteUser: async (id: string) => {
    const deletedUser = await RequestFactory.delete(`/api/users/${id}`);
    return deletedUser;
  },
};

export default UsersService;
