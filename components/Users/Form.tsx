'use client';
import { useEffect, useState } from 'react';
import { BaseUserRequest } from '../../types/user';
import InputField from '../Input';

import UsersService from '../../services/UserService';

interface UserFormProps {
  newUser: boolean;
  userId?: string;
}

const initialState: BaseUserRequest = {
  name: '',
  lastname: '',
  email: '',
  address: ''
};

const UserForm: React.FC<UserFormProps> = ({ newUser, userId }) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCreate = async (formState: BaseUserRequest) => {
    console.log('Create user', formState);
    const user = await UsersService.createUser(formState);

    if (user) {
      window.location.pathname = '/users';
    }
  };

  const handleDelete = async () => {
    console.log(`Deleting user ${userId}`);
    // TODO: Send confirmation modal

    if (!userId) {
      return;
    }
    // Soft delete
    const deleted = await UsersService.update(userId, { active: false });
    if (deleted) {
      window.location.pathname = '/users';
    }
    // TODO: Redirect to /users and send alert the user was deleted
  };

  const handleUpdate = async (formState: BaseUserRequest) => {
    console.log(`Updating user ${userId}`, formState);
    if (!userId) {
      return;
    }
    const updated = await UsersService.update(userId, formState);
    // TODO: Add alert the user was updated
  };

  useEffect(() => {
    const fetchUser = async (userId: string) => {
      const user = await UsersService.fetchUser(userId);
      const formState = {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        address: user.address
      };

      setFormState(formState);
    };

    if (!newUser && userId) {
      fetchUser(userId);
    }
  }, [userId, newUser]);

  return (
    <div className="flex flex-col mt-2 mb-4">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 pr-2">
          <InputField
            label="Nombre"
            name="name"
            value={formState.name}
            onChange={handleInputChange} />
        </div>

        <div className="flex flex-col w-1/2 pl-2">
          <InputField
            label="Apellidos"
            name="lastname"
            value={formState.lastname}
            onChange={handleInputChange} />
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <InputField
          label="Correo electrónico"
          name="email"
          value={formState.email}
          onChange={handleInputChange} />
      </div>

      <div className="flex flex-col mt-2">
        <InputField
          label="Dirección"
          name="address"
          value={formState.address}
          onChange={handleInputChange} />
      </div>
      {/* TODO: Add button component */}
      {/* TODO: Add button loading state */}
      {
        newUser && (

          <button
            type="button"
            className="bg-purple-600 hover:bg-purple-500 rounded-full mt-6 p-2 text-white"
            onClick={() => handleCreate(formState)}
          >Crear</button>

        )
      }

      {
        !newUser && (
          <div className="flex flex-row mt-2">
            <button
              type="button"
              className="bg-red-500 text-white rounded-full px-4 p-2 mr-2 w-1/2"
              onClick={handleDelete}
            >Eliminar</button>

            <button
              type="button"
              className="bg-purple-600 text-white rounded-full p-2 w-1/2"
              onClick={() => handleUpdate(formState)}
            >Actualizar</button>
          </div>
        )
      }
    </div>
  );
};

export default UserForm;