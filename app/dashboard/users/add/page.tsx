
import Link from 'next/link'
import Card from '../../../../components/Card'
import MaterialIcon from '../../../../components/MaterialIcon'
import UserForm from '../../../../components/Users/Form'

const AddUserPage = () => {
  return (
    <Card>
      <div className='pb-2 mb-2 border-b-2 flex flex-row justify-between align-center'>
        <h1 className='text-xl font-bold'>Agregar Usuario</h1>
        <Link href='/dashboard/users'>
          <MaterialIcon iconName='close' className='text-gray-500' />
        </Link>
      </div>

      <div className=''>
        <UserForm
          newUser
        />
      </div>
    </Card>
  )
}

export default AddUserPage
