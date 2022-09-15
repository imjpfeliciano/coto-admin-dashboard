import Modal from ".";
import AddUserForm from "../../containers/AddUserForm";

const AddUserModal = ({ isOpen, onClose, onSave }: any) => {
  const onUserSave = async (payload: any) => {
    await onSave(payload);
    onClose();
    // TODO: Add loading indicator
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <AddUserForm onUserSave={onUserSave} />
    </Modal>
  );
};

export default AddUserModal;
