import styled from 'styled-components'

interface RoundedButtonContainerProps {
  color?: string
  fontColor?: string
}

const RoundedButtonContainer = styled.button<RoundedButtonContainerProps>`
  background-color: ${(props) => (props.color ? props.color : '#ddd')};
  color: ${(props) => (props.fontColor ? props.fontColor : '#000')};
  border-radius: 25px;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`

interface ButtonProps {
  label: string
  onClick?: () => void
  color?: string
  fontColor?: string
}

const RoundedButton = ({ label, onClick, color, fontColor }: ButtonProps) => {
  return (
    <RoundedButtonContainer
      onClick={onClick}
      color={color}
      fontColor={fontColor}
    >
      {label}
    </RoundedButtonContainer>
  )
}

export default RoundedButton
