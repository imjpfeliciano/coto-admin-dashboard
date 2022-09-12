import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUser } from "../controllers/User";
import UsersService from "../services/UserService";
import Card from "../components/Card";
import UserRowItem from "../components/Tables/userRowItem";
import {
  TableContainer,
  TableHeader,
  TableHeaderContainer,
} from "../components/Tables/Table";
import MaterialIcon from "../components/MaterialIcon";

// TODO: Add pagination
// TODO: Add search
// TODO: Add sorting
// TODO: Add filtering
// TODO: Add user creation modal
// TODO: Add user deletion alert
// TODO: Add user update page

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
    <Card>
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
        <TableContainer>
          <TableHeaderContainer>
            <tr>
              <TableHeader colSpan={5}>
                <div>
                  <h3>Users management</h3>
                  <button>
                    <MaterialIcon iconName="add" />
                    Add user
                  </button>
                </div>
              </TableHeader>
            </tr>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last update</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </TableHeaderContainer>
          <tbody>
            {usersList.map((user, index) => (
              <UserRowItem
                key={user.id}
                index={index + 1}
                onEdit={() => {}}
                onDelete={() => {}}
                name={user.name}
                updatedAt={user.updatedAt}
                state="Active"
              />
            ))}
          </tbody>
        </TableContainer>
      </UserList>
    </Card>
  );
};

export default UsersPage;
