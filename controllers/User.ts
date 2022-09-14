export interface BaseUser {
  name: string;
  scopes: string[]; // ["user", "admin"]
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  active: boolean;
}
export interface IUser extends BaseUser {
  _id: string;
  // TODO: Validate if houseId is required when adding new users
  // TODO: Validate if we want to add vehicles to the user model
}

import UserModel from "../models/User";

class User {
  constructor() {
  }

  async create(name: string) {
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    const scopes = ["user"];

    const newUser = {
      active: true,
      name,
      createdAt,
      updatedAt,
      scopes,
    };

    try {
      const response = await UserModel.create(newUser);
      if (response.error) {
        return response;
      }
      return response;
    } catch (error) {
      return {
        error,
      };
    }
  }

  async getAll() {
    // TODO: Add error handling
    const response = await UserModel.getAll();
    return response;
  }

  async get(id: string) {
    const user = await UserModel.get(id);

    // TODO: Validate if we want to return a 404 error
    return user;
  }

  async update(id: string, data: any) {
    const payload = {
      ...data,
      updatedAt: new Date().toISOString(),
    }
    const updatedUser = await UserModel.update(id, payload);
    return updatedUser;
  }

  async delete(id: string) {
    // TODO: Validate that the request is coming from an admin

    // TODO: Validate if we want to return a 404 error
    const deleted = await UserModel.delete(id);
    return deleted;
  }
}

export default new User();
