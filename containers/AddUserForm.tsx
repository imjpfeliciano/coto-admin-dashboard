import { useState } from 'react'
import styled from 'styled-components'
import RoundedButton from '../components/Button/RoundedButton'
import InputField from '../components/Input/InputField'

interface AddUserFormProps {
  // FIXME: Fix payload type definition
  onUserSave: (payload: any) => void
  formInitialState?: {
    name: string
    email: string
    address: string
  }
}

const AddUserFormContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;

  input {
    background-color: transparent;
    color: black;
  }
`

const FormTitle = styled.h2`
  color: black;
  text-align: center;
`

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

// TODO: Add type validation from UserRequest
const initialState = {
  name: '',
  email: '',
  address: ''
}

const AddUserForm = ({ onUserSave, formInitialState }: AddUserFormProps) => {
  const [formState, setFormState] = useState((formInitialState != null) || initialState)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSave = () => {
    onUserSave(formState)
  }

  return (
    <AddUserFormContainer>
      <FormTitle>{(formInitialState != null) ? 'Edit User' : 'Add user'}</FormTitle>

      <InputField
        icon='person'
        name='name'
        type='text'
        placeholder='Enter username'
        value={formState.name}
        onChange={handleInputChange}
      />

      <InputField
        icon='mail'
        name='email'
        type='email'
        placeholder='Enter email'
        value={formState.email}
        onChange={handleInputChange}
      />

      <InputField
        icon='home'
        name='address'
        type='text'
        placeholder='Enter address'
        value={formState.address}
        onChange={handleInputChange}
      />

      <ButtonContainer>
        <RoundedButton onClick={handleSave} label='Save user' />
      </ButtonContainer>
    </AddUserFormContainer>
  )
}

export default AddUserForm
