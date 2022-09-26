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
import Breadcum from "../components/Breadcum";

// TODO: Add pagination
// TODO: Add search
// TODO: Add sorting
// TODO: Add filtering
// TODO: Add user deletion alert

const GroupContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    color: black; // TODO: Move to theme
  }
`;

const BreadcumsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: gray;
`;

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

  const onSoftDelete = async (id: string) => {
    await UsersService.update(id, {
      active: false,
    });
    setReloadUsers(true);
  };

  const onRestore = async (id: string) => {
    await UsersService.update(id, {
      active: true,
    });
    setReloadUsers(true);
  };

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
   * Move Breadcunms to a separate component
   */

  return (
    <>
      <Card>
        <UserList>
          <GroupContent>
            <h3>Users management</h3>
            <div>
              <IconButton
                icon="add"
                label="Add new user"
                onClick={() => setUserModalOpen(true)}
              />
            </div>
          </GroupContent>
          <TableContainer>
            <TableHeaderContainer>
              <TableColumnNames>
                <th># Int</th>
                <th>Name</th>
                <th>Last update</th>
                <th>Status</th>
                <th>Actions</th>
              </TableColumnNames>
            </TableHeaderContainer>
            <tbody>
              {usersList.map((user, index) => {
                if (user.deletedAt) return null;

                return (
                  <UserRowItem
                    key={user._id}
                    id={user._id}
                    index={user.address}
                    onEdit={() => {
                      console.log("Edit user");
                    }}
                    onSoftDelete={() => onSoftDelete(user._id)}
                    onDelete={() => onUserDelete(user._id)}
                    onRestore={() => onRestore(user._id)}
                    name={user.name}
                    updatedAt={user.updatedAt}
                    state={
                      user.active ? USER_STATES.active : USER_STATES.inactive
                    }
                    active={user.active}
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
