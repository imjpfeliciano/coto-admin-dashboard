'use client'
import { useState } from 'react'
import { BaseUserRequest } from '../../types/user'
import InputField from '../Input'
import { useRouter } from 'next/navigation'

import UsersService from '../../services/UserService'

interface UserFormProps {
  newUser: boolean
  userId?: string
  user?: BaseUserRequest | null
}

const USERS_DASHBOARD_PAGE = '/dashboard/users'

interface UserFormType {
  name: string
  lastname: string
  email: string
  address: string
}

const initialState: BaseUserRequest = {
  name: '',
  lastname: '',
  email: '',
  address: ''
}

interface UserFormActionButtonsProps {
  isNewUser: boolean
  onHandleCreate: () => Promise<void>
  onHandleDelete: () => Promise<void>
  onHandleUpdate: () => Promise<void>
}

const UserFormActionButtons: React.FC<UserFormActionButtonsProps> = ({ isNewUser, onHandleCreate, onHandleDelete, onHandleUpdate }) => {
  if (isNewUser) {
    return (
      <button
        type='button'
        className='bg-purple-600 text-white rounded-full p-2 w-1/2'
        onClick={onHandleCreate}
      >Crear
      </button>
    )
  }

  return (
    <div className='flex flex-row mt-2'>
            <button
              type='button'
              className='bg-red-500 text-white rounded-full px-4 p-2 mr-2 w-1/2'
              onClick={onHandleDelete}
            >Eliminar
            </button>

            <button
              type='button'
              className='bg-purple-600 text-white rounded-full p-2 w-1/2'
              onClick={onHandleUpdate}
            >Actualizar
            </button>
          </div>
  )
}

interface UserResponse {
  success: boolean,
  message?: string,
  user?: BaseUserRequest
};

const UserForm: React.FC<UserFormProps> = ({ newUser, userId, user }) => {
  const router = useRouter()
  const [formState, setFormState] = useState<UserFormType>((user != null) && !newUser ? user : initialState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { name, value } = event.target

    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCreate = async (): Promise<void> => {
    const user: UserResponse = await UsersService.createUser(formState)

    if (user?.success) {
      router.push(USERS_DASHBOARD_PAGE)
    }
  }

  const handleDelete = async () => {
    if (userId === undefined) {
      return
    }
    // Soft delete
    const deleted: UserResponse = await UsersService.update(userId, { active: false })
    if (deleted.success) {
      router.push(USERS_DASHBOARD_PAGE)
      // TODO: Redirect to /users and send alert the user was deleted
    }
  }

  const handleUpdate = async () => {
    if (userId === undefined) {
      return
    }
    const updated: UserResponse = await UsersService.update(userId, formState)
    console.log({ updated })
    if (updated.success) {
      // TODO: Add alert the user was updated
    }
  }

  return (
    <div className='flex flex-col mt-2 mb-4'>
      <div className='flex flex-row'>
        <div className='flex flex-col w-1/2 pr-2'>
          <InputField
            label='Nombre'
            name='name'
            value={formState.name}
            onChange={handleInputChange}
          />
        </div>

        <div className='flex flex-col w-1/2 pl-2'>
          <InputField
            label='Apellidos'
            name='lastname'
            value={formState.lastname}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='flex flex-col mt-2'>
        <InputField
          label='Correo electrónico'
          name='email'
          value={formState.email}
          onChange={handleInputChange}
        />
      </div>

      <div className='flex flex-col mt-2'>
        <InputField
          label='Dirección'
          name='address'
          value={formState.address}
          onChange={handleInputChange}
        />
      </div>

      <UserFormActionButtons
        isNewUser={newUser}
        onHandleCreate={handleCreate}
        onHandleDelete={handleDelete}
        onHandleUpdate={handleUpdate}
      />
    </div>
  )
}

export default UserForm
