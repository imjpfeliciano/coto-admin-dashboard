export interface BaseUser {
  name: string;
  email: string; // When adding a new user, this field is required to be unique
  address: string; // Internal address

  scopes: string[]; // ["user", "admin"]
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  active: boolean;
}

export interface UserRequest {
  name: string;
  email: string;
  address: string;
}

export interface IUser extends BaseUser {
  _id: string;
  // TODO: Validate if houseId is required when adding new users
  // TODO: Validate if we want to add vehicles to the user model
}

import UserModel from "../models/User";
import { paginationQuery } from "../types/request";

class User {
  constructor() {}

  async create(payload: UserRequest) {
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    const scopes = ["user"];

    const newUser = {
      ...payload,
      active: true,
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

  async getAll(query: paginationQuery) {
    // TODO: Add error handling
    const response = await UserModel.getAll(query);
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
    };
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
