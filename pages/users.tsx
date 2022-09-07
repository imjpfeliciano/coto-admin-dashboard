import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUser } from "../controllers/User";
import UsersService from "../services/UserService";

export const getStaticProps = async () => {
  let users = [];
  let error = null;
  try {
    users = await UsersService.fetchUsers();
  } catch (error) {
    error = JSON.stringify(error);
  }

  return {
    props: {
      users,
      error,
    },
  };
};

interface HomepageProps {
  users: IUser[];
}

const UserCreateForm = styled.div``;

const UserList = styled.div``;

// Users list page
const UsersPage: NextPage<HomepageProps> = ({ users }) => {
  const [usersList, setUsers] = useState(users);
  const [reloadUsers, setReloadUsers] = useState(false);
  const [username, setUsername] = useState("");

  const onSubmitUser = async () => {
    if (!username.trim()) return;

    await UsersService.createUser(username);

    setUsername("");
    setReloadUsers(true);
  };

  useEffect(() => {
    if (!reloadUsers) return;

    const reloadData = async () => {
      const users = await UsersService.fetchUsers();
      setUsers(users);
      setReloadUsers(false);
    };

    reloadData();
  }, [reloadUsers]);

  return (
    <div>
      <h1>Users</h1>

      {/* User create form */}
      {/* FIXME: Agregar validacion del formulario */}
      <UserCreateForm>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={onSubmitUser}>Create User</button>
      </UserCreateForm>

      {/* User list table */}
      <UserList>
        {usersList.map((user) => (
          <div key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
          </div>
        ))}
      </UserList>
    </div>
  );
};

export default UsersPage;
