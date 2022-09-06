interface IUser {
  id: string;
  name: string;
  scopes: string[]; // ["user", "admin"]
  createdAt: Date;
  updatedAt: Date;
  // TODO: Validate if houseId is required when adding new users
  // TODO: Validate if we want to add vehicles to the user model
}

class User {
  users: IUser[];

  constructor() {
    this.users = [];
  }

  async create(name: string) {
    const userId = this.users.length + 1;
    const createdAt = new Date();
    const updatedAt = new Date();
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
    return user;
  }

  async update(id: string, data: any) {
    const user = this.users.find(
      (user: IUser) => Number(user.id) === Number(id)
    );
    const updatedUser = {
      ...user,
      ...data,
      updatedAt: new Date(),
    };
    return updatedUser;
  }

  async delete(id: string) {
    this.users = this.users.filter(
      (user: IUser) => Number(user.id) !== Number(id)
    );
    return true;
  }
}

export default new User();
