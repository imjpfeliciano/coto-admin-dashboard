import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUser } from "../controllers/User";
import UsersService from "../services/UserService";
import Card, { CardTitle } from "../components/Card";
import UserRowItem from "../components/Tables/userRowItem";
import {
  TableColumnNames,
  TableContainer,
  TableHeader,
  TableHeaderContainer,
} from "../components/Tables/Table";
import MaterialIcon from "../components/MaterialIcon";
import { IconButton } from "../components/Button";
import AddUserModal from "../components/Modals/AddUserModal";

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
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [usersList, setUsers] = useState(users);
  const [reloadUsers, setReloadUsers] = useState(false);

  // TODO: Fix payload type definition
  const onSubmitUser = async (payload: any) => {
    await UsersService.createUser(payload);
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
    <>
      <Card>
        <CardTitle>Users</CardTitle>

        <UserList>
          <TableContainer>
            <TableHeaderContainer>
              <tr>
                <TableHeader colSpan={5}>
                  <div>
                    <h3>Users management</h3>
                    <div>
                      <IconButton
                        icon="add"
                        label="Add new user"
                        onClick={() => setUserModalOpen(true)}
                      />
                    </div>
                  </div>
                </TableHeader>
              </tr>
              <TableColumnNames>
                <th>#</th>
                <th>Name</th>
                <th>Last update</th>
                <th>Status</th>
                <th>Actions</th>
              </TableColumnNames>
            </TableHeaderContainer>
            <tbody>
              {usersList.map((user, index) => (
                <UserRowItem
                  key={user._id}
                  index={index + 1}
                  onEdit={() => {
                    console.log("Edit user");
                  }}
                  onDelete={() => {
                    console.log("Delete user");
                  }}
                  name={user.name}
                  updatedAt={user.updatedAt}
                  state={user.active ? "Active" : "Inactive"}
                />
              ))}
            </tbody>
          </TableContainer>
        </UserList>
      </Card>
      <AddUserModal
        isOpen={isUserModalOpen}
        onClose={() => setUserModalOpen(false)}
        onSave={onSubmitUser}
      />
    </>
  );
};

export default UsersPage;
