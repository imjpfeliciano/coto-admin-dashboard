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
import { IconButton } from "../components/Button";
import AddUserModal from "../components/Modals/AddUserModal";

// TODO: Add pagination
// TODO: Add search
// TODO: Add sorting
// TODO: Add filtering
// TODO: Add user deletion alert

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

const USER_STATES = {
  active: "Active",
  inactive: "Inactive",
};

const UserCreateForm = styled.div``;

const UserList = styled.div``;

// Users list page
const UsersPage: NextPage<HomepageProps> = ({ users }) => {
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [usersList, setUsers] = useState(users);
  const [reloadUsers, setReloadUsers] = useState(false);

  // FIXME: Fix payload type definition
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

  // FIXME: Before calling the delete function, we should show a confirmation modal
  const onUserDelete = async (id: string) => {
    console.log(`Deleting user with id: ${id}`);
    await UsersService.deleteUser(id);
    setReloadUsers(true);
  };

  /**
   * TODO:
   * Add filter to show only active users - default
   * Add filter to show only inactive users
   * Add re-active user button
   */

  return (
    <>
      <Card>
        <CardTitle>Users</CardTitle>

        <UserList>
          <TableContainer>
            <TableHeaderContainer>
              <tr>
                {/* FIXME:  Align elements to the center - vertically */}
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
                <th># Int</th>
                <th>Name</th>
                <th>Last update</th>
                <th>Status</th>
                <th>Actions</th>
              </TableColumnNames>
            </TableHeaderContainer>
            <tbody>
              {/* TODO: Sort users by internal address */}
              {usersList.map((user, index) => {
                if (!user.active) return null;

                return (
                  <UserRowItem
                    key={user._id}
                    index={user.address}
                    onEdit={() => {
                      console.log("Edit user");
                    }}
                    onDelete={() => onUserDelete(user._id)}
                    name={user.name}
                    updatedAt={user.updatedAt}
                    state={
                      user.active ? USER_STATES.active : USER_STATES.inactive
                    }
                  />
                );
              })}
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
