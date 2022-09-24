import styled from "styled-components";
import { Avatar } from "../Avatar";
import MaterialIcon from "../MaterialIcon";
import { TableCell, TableCellContent, TableRow } from "./Table";

interface UserRowItemProps {
  index: string;
  name: string;
  updatedAt: string;
  state: string;
  onEdit: () => void;
  onDelete: () => void;
}

const UserGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: -webkit-fill-available;
`;

const UserRowItem = ({
  index,
  name,
  updatedAt,
  state,
  onEdit,
  onDelete,
}: UserRowItemProps) => {
  const date = new Date(updatedAt).toDateString();
  return (
    <TableRow>
      <TableCell>
        <TableCellContent>{index}</TableCellContent>
      </TableCell>
      <TableCell>
        <TableCellContent>
          <UserGroup>
            <Avatar src="https://avatars.githubusercontent.com/u/11733036?v=4" />
            {name}
          </UserGroup>

        </TableCellContent>
      </TableCell>
      <TableCell>
        <TableCellContent>{date}</TableCellContent>
      </TableCell>
      <TableCell>
        <TableCellContent>{state}</TableCellContent>
      </TableCell>
      <TableCell>
        <TableCellContent>
          <MaterialIcon iconName="edit" onClick={onEdit} />
          <MaterialIcon iconName="delete" onClick={onDelete} />
        </TableCellContent>
      </TableCell>
    </TableRow>
  );
};

export default UserRowItem;
