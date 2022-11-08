"use client"
import Link from "next/link"
import Card from "../../../components/Card"
import MaterialIcon from "../../../components/MaterialIcon"
import React, { useState } from "react"
import InputField from "../../../components/Input"
import { UserRequest } from "../../../controllers/User"

const SaveUser = async (payload: UserRequest) => {
  const res = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  return data;
}

const initialState = {
  name: "",
  lastname: "",
  email: "",
  address: ""
}

const AddUserPage = () => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSave = async () => {
    console.log({ formState })
    const user = await SaveUser(formState);

    if (user) {
      window.location.pathname = "/users";
    }
  }

  return (
    <Card>
      <div className="pb-2 mb-2 border-b-2 flex flex-row justify-between align-center">
        <h1 className="text-xl font-bold">Agregar Usuario</h1>
        <Link href="/users">
          <MaterialIcon iconName="close" className="text-gray-500" />
        </Link>

      </div>

      <div className="flex flex-col mt-2 mb-4">
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2 pr-2">
            <InputField label="Nombre" name="name" onChange={handleInputChange} />
          </div>

          <div className="flex flex-col w-1/2 pl-2">
            <InputField label="Apellidos" name="lastname" onChange={handleInputChange} />
          </div>
        </div>

        <div className="flex flex-col mt-2">
          <InputField label="Correo electrónico" name="email" onChange={handleInputChange} />
        </div>

        <div className="flex flex-col mt-2">
          <InputField label="Dirección" name="address" onChange={handleInputChange} />
        </div>

        <button
          className="bg-purple-600 hover:bg-purple-500 rounded-full mt-6 p-2 text-white"
          onClick={handleSave}
        >Guardar</button>
      </div>
    </Card>
  )
}

export default AddUserPage