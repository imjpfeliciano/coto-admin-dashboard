import { Avatar } from "../Avatar";
import MaterialIcon from "../MaterialIcon";
import { TableCell, TableRow } from "./Table";

interface UserRowItemProps {
  index: number;
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
      <TableCell>{index}</TableCell>
      <TableCell align="left">
        <Avatar src="https://avatars.githubusercontent.com/u/11733036?v=4" />
        {name}
      </TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{state}</TableCell>
      <TableCell>
        <MaterialIcon iconName="edit" onClick={onEdit} />
        <MaterialIcon iconName="delete" onClick={onDelete} />
      </TableCell>
    </TableRow>
  );
};

export default UserRowItem;
