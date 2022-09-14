import Modal from ".";
import styled from "styled-components";
import { useState } from "react";

const AddUserForm = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background-color: transparent;
    color: black;
  }
`;

const AddUserModal = ({ isOpen, onClose, onSave }: any) => {
  const [username, setUsername] = useState("");
  const onUserSave = async () => {
    const payload = {
      name: username,
    };
    await onSave(payload);
    onClose();

    // TODO: Add loading indicator
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <AddUserForm>
        <h2>Add user</h2>

        <label htmlFor="username">Name: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button onClick={onUserSave}>Guardar</button>
      </AddUserForm>
    </Modal>
  );
};

export default AddUserModal;
