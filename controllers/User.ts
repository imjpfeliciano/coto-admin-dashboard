export interface IUser {
  id: string;
  name: string;
  scopes: string[]; // ["user", "admin"]
  createdAt: string;
  updatedAt: string;
  // TODO: Validate if houseId is required when adding new users
  // TODO: Validate if we want to add vehicles to the user model
}

const mockedUsers: IUser[] = [
  {
    id: "1",
    name: "Jona",
    createdAt: "2022-09-07T13:34:52.061Z",
    updatedAt: "2022-09-07T13:34:52.061Z",
    scopes: ["user"],
  },
  {
    id: "2",
    name: "Jane Doe",
    createdAt: "2022-09-07T13:34:52.061Z",
    updatedAt: "2022-09-07T13:34:52.061Z",
    scopes: ["user"],
  },
];
class User {
  users: IUser[];

  constructor() {
    this.users = mockedUsers;
  }

  async create(name: string) {
    const userId = this.users.length + 1;
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    const scopes = ["user"];

    const newUser = {
      id: String(userId),
      name,
      createdAt,
      updatedAt,
      scopes,
    };
    this.users.push(newUser);

    return newUser;
  }

  async getAll() {
    return this.users;
  }

  async get(id: string) {
    const user = this.users.find(
      (user: IUser) => Number(user.id) === Number(id)
    );

    // TODO: Validate if we want to return a 404 error
    return user;
  }

  async update(id: string, data: any) {
    const user = this.users.find(
      (user: IUser) => Number(user.id) === Number(id)
    );

    // TODO: Validate if we want to return a 404 error
    const updatedUser = {
      ...user,
      ...data,
      updatedAt: new Date(),
    };
    return updatedUser;
  }

  async delete(id: string) {
    // TODO: Validate that the request is coming from an admin

    // TODO: Validate if we want to return a 404 error
    this.users = this.users.filter(
      (user: IUser) => Number(user.id) !== Number(id)
    );
    return true;
  }
}

export default new User();
