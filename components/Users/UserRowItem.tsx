import Link from 'next/link';
import moment from 'moment';
import MaterialIcon from '../MaterialIcon';
import { IUser } from '../../types/user';

const UserRowItem: React.FC<IUser> = ({ _id, address, name, updatedAt, active }) => {
  let lastUpdated = new Date(updatedAt).toDateString();
  lastUpdated = moment(moment(lastUpdated).local()).fromNow()

  const statusColor = active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600';

  return (
    <Link href={`/users/${_id}`} className="flex justify-between cursor-pointer py-4 border-b last:border-0 hover:bg-gray-100">
      <div className="flex flex-col">
        <div className="text-base font-bold">{name}</div>
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
        <div className={`w-max ${statusColor} rounded px-2`}>{active ? 'Activo' : 'Inactivo'}</div>
      </div>
    </Link>
  )
}

export default UserRowItem;