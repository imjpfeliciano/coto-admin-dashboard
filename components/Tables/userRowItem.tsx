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
        <TableCellContent align="left">
          <Avatar src="https://avatars.githubusercontent.com/u/11733036?v=4" />
          {name}
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
