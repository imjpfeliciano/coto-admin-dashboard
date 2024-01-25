import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import MaterialIcon from '../MaterialIcon'

const StyledModalBody = styled.div`
  padding-top: 10px;
`

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`

const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px;
`
const StyledModalOverlay = styled.div`
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContainer = ({ children, onClose }: any) => (
  <StyledModalOverlay>
    <StyledModal>
      <StyledModalHeader>
        <MaterialIcon iconName='close' onClick={onClose} />
      </StyledModalHeader>
      <StyledModalBody>{children}</StyledModalBody>
    </StyledModal>
  </StyledModalOverlay>
)

const Modal = ({ children, onClose, title }: any) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) {
    return null
  }

  let element = document.getElementById('root-modal')
  if (element == null) {
    element = document.createElement('div')
    element.setAttribute('id', 'root-modal')
    document.body.appendChild(element)
  }

  return ReactDOM.createPortal(
    <ModalContainer onClose={onClose}>{children}</ModalContainer>,
    element
  )
}

export default Modal
