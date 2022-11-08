import Link from 'next/link';
import MaterialIcon from '../MaterialIcon';
import moment from 'moment';

const UserRowItem = ({ _id, address, name, updatedAt, active }) => {
  let lastUpdated = new Date(updatedAt).toDateString();
  lastUpdated = moment(moment(lastUpdated).local()).fromNow()

  const statusColor = active ? 'green' : 'red';
  return (
    <Link href={`/users/${_id}`} className="flex justify-between cursor-pointer border-b last:border-0">
      <div className="flex flex-col">
        <div className="text-base font-bold">{name}</div>
        <div className="flex align-center">
          <MaterialIcon iconName="home" className="text-gray-500" />
          <span className="text-gray-500 text-sm">{address}</span>
        </div>

      </div>
      <div className="flex flex-col">
        <div>
          <span>Modificado: </span>
          <span>{lastUpdated}</span>
        </div>
        <div className={`w-max bg-${statusColor}-100 text-${statusColor}-600 rounded px-2`}>{active ? 'Activo' : 'Inactivo'}</div>
      </div>
    </Link>
  )
}

export default UserRowItem;