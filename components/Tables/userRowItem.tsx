import { useState } from "react";
import Link from "next/link";
import { Avatar } from "../Avatar";
import MaterialIcon from "../MaterialIcon";
import { TableCell, TableCellContent, TableRow } from "./Table";
import {
  UserGroup,
  Dropdown,
  DropdownItem,
  DropdownContainer,
} from "./userRowItem.styles";
import moment from "moment";

interface UserRowItemProps {
  index: string;
  name: string;
  updatedAt: string;
  state: string;
  onEdit: () => void;
  onSoftDelete: () => void;
  onDelete: () => void;
  onRestore: () => void;
  active: boolean;
  id: string;
}

const UserRowItem = ({
  index,
  name,
  updatedAt,
  state,
  onEdit,
  onSoftDelete,
  onRestore,
  onDelete,
  active,
  id,
}: UserRowItemProps) => {
  const [showUserOptions, setShowUserOptions] = useState(false);

  const handleOptionsClick = () => {
    // FIXME: hide options when clicking outside
    setShowUserOptions(!showUserOptions);
  };

  const date = new Date(updatedAt).toDateString();
  return (
    <TableRow>
      <TableCell>
        <TableCellContent>{index}</TableCellContent>
      </TableCell>
      <TableCell>
        <TableCellContent>
          <Link href={`/users/${id}`}>
            <UserGroup>
              <Avatar src="https://avatars.githubusercontent.com/u/11733036?v=4" />
              {name}
            </UserGroup>
          </Link>
        </TableCellContent>
      </TableCell>
      <TableCell>
        <TableCellContent>
          {/* FIXME: Resolve moment date from now with local timezone */}
          {moment(moment(date).local()).fromNow()}
        </TableCellContent>
      </TableCell>
      <TableCell>
        <TableCellContent>{state}</TableCellContent>
      </TableCell>
      <TableCell>
        <TableCellContent>
          <Dropdown>
            <MaterialIcon iconName="more_vert" onClick={handleOptionsClick} />
            {/* FIXME: How to handle edit action for users list page */}
            {showUserOptions && (
              <DropdownContainer>
                <DropdownItem
                  onClick={() => {
                    onEdit();
                    setShowUserOptions(false);
                  }}
                >
                  <MaterialIcon iconName="edit" />
                  Editar
                </DropdownItem>

                {active && (
                  <DropdownItem
                    onClick={() => {
                      onSoftDelete();
                      setShowUserOptions(false);
                    }}
                  >
                    <MaterialIcon iconName="delete" />
                    Eliminar
                  </DropdownItem>
                )}

                {!active && (
                  <DropdownItem
                    onClick={() => {
                      onRestore();
                      setShowUserOptions(false);
                    }}
                  >
                    <MaterialIcon iconName="settings_backup_restore" />
                    Restaurar
                  </DropdownItem>
                )}

                {!active && (
                  <DropdownItem
                    onClick={() => {
                      onDelete();
                      setShowUserOptions(false);
                    }}
                  >
                    <MaterialIcon iconName="delete_forever" />
                    Eliminar completamente
                  </DropdownItem>
                )}
              </DropdownContainer>
            )}
          </Dropdown>
        </TableCellContent>
      </TableCell>
    </TableRow>
  );
};

export default UserRowItem;
