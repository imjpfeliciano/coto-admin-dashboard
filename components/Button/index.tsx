import styled from 'styled-components'
import MaterialIcon from '../MaterialIcon'
import theme from '../../utils/theme'
import { BaseButton } from './Button.styled'

export const Button = styled.button``

const ButtonText = styled.span`
  color: ${theme.colors.accent};
  margin-left: 0.5rem;
`

export const ButtonWithIcon = styled.button`
  ${BaseButton}

  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    ${ButtonText} {
      color: ${theme.colors.white};
    }
  }
`

interface IconButtonProps {
  icon: string
  label?: string
  onClick?: () => void
  withCaret?: boolean
}

export const IconButton = ({
  icon,
  label,
  onClick,
  withCaret
}: IconButtonProps) => {
  return (
    <ButtonWithIcon onClick={onClick}>
      <MaterialIcon iconName={icon} color={theme.colors.accent} />
      {label && <ButtonText>{label}</ButtonText>}
      {withCaret && (
        <MaterialIcon
          iconName='keyboard_arrow_down'
          color={theme.colors.accent}
        />
      )}
    </ButtonWithIcon>
  )
}
