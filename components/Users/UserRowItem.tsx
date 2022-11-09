import Link from 'next/link';
import { IUser } from '../../types/user';
import { getTimeFromNow } from '../../utils/date';
import MaterialIcon from '../MaterialIcon';

const UserRowItem: React.FC<IUser> = ({ _id, address, name, lastname, updatedAt, active }) => {
  const lastUpdated = getTimeFromNow(updatedAt);

  const statusColor = active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600';

  return (
    <Link href={`/users/${_id}`} className="flex justify-between cursor-pointer py-4 px-2 border-b last:border-0 hover:bg-gray-100">
      <div className="flex flex-col">
        <div className="text-base font-bold">{name} {lastname}</div>
        <div className="flex items-center">
          <MaterialIcon iconName="home" className="text-gray-500" />
          <span className="ml-2 text-gray-500 text-sm">{address}</span>
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          <span>Modificado: </span>
          <span>{lastUpdated}</span>
        </div>
        <div className="flex justify-end">
          <div className={`w-max ${statusColor} rounded px-2`}>{active ? 'Activo' : 'Inactivo'}</div>
        </div>
      </div>
    </Link>
  );
};

export default UserRowItem;