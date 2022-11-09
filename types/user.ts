export interface BaseUserRequest {
  name: string;
  lastname: string;
  email: string;
  address: string;
}
export interface IUser extends BaseUserRequest {
  _id: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
}