import Modal from '.'
import AddUserForm from '../../containers/AddUserForm'

interface AddUserModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (payload: any) => Promise<void>
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose, onSave }) => {
  const onUserSave = async (payload: any) => {
    await onSave(payload)
    onClose()
    // TODO: Add loading indicator
  }

  if (!isOpen) return null

  return (
    <Modal onClose={onClose}>
      <AddUserForm onUserSave={onUserSave} />
    </Modal>
  )
}

export default AddUserModal
