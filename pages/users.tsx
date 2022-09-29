import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUser } from "../controllers/User";
import UsersService from "../services/UserService";
import Card from "../components/Card";
import UserRowItem from "../components/Tables/userRowItem";
import {
  TableColumnNames,
  TableContainer,
  TableHeaderContainer,
} from "../components/Tables/Table";
import { IconButton } from "../components/Button";
import AddUserModal from "../components/Modals/AddUserModal";
import Paginator from "../components/Pagination";

const DEFAULT_PAGE_SIZE = 1;

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

export const getStaticProps = async () => {
  let users = [];
  let count = 0;
  let error = null;
  try {
    let { data, count: requestCount } = await UsersService.fetchUsers({
      page: 1,
      limit: DEFAULT_PAGE_SIZE,
    });
    users = data;
    count = requestCount;
  } catch (error) {
    error = JSON.stringify(error);
  }

  return {
    props: {
      initialData: {
        users,
        count,
      },
      error,
    },
  };
};

interface HomepageProps {
  initialData: {
    users: IUser[];
    count: number;
  };
}

const USER_STATES = {
  active: "Active",
  inactive: "Inactive",
};

const UserList = styled.div``;

// Users list page
const UsersPage: NextPage<HomepageProps> = ({
  initialData: { users, count },
}) => {
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [usersList, setUsers] = useState(users);
  const [reloadUsers, setReloadUsers] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [usersCount, setUsersCount] = useState(count);

  // TODO: Move usersInitialData to a single state object

  // FIXME: Fix payload type definition
  const onSubmitUser = async (payload: any) => {
    await UsersService.createUser(payload);
    setReloadUsers(true);
  };

  useEffect(() => {
    if (!reloadUsers) return;

    console.log("Reloading users");
    const reloadData = async () => {
      const payload = {
        page: activePage,
        status: "active",
        limit: DEFAULT_PAGE_SIZE,
      };
      const { data, count } = await UsersService.fetchUsers(payload);
      setUsers(data);
      setUsersCount(count);
      setReloadUsers(false);
    };

    reloadData();
  }, [reloadUsers, activePage]);

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

  const onUserPageChange = async (page: number) => {
    console.log(`Changing page to ${page}`);
    setActivePage(page);
  };

  useEffect(() => {
    setReloadUsers(true);
  }, [activePage]);

  /**
   * TODO:
   * Add filter to show only active users - default
   * Add filter to show only inactive users
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
          <Paginator
            // TODO: avoid sending current page as a prop
            current={activePage}
            total={usersCount}
            pageSize={DEFAULT_PAGE_SIZE}
            onItemClick={onUserPageChange}
          />
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
