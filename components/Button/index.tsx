import styled from "styled-components";
import MaterialIcon from "../MaterialIcon";
import theme from "../../utils/theme";

export const Button = styled.button``;

const ButtonText = styled.span`
  color: ${theme.colors.accent};
  margin-left: 0.5rem;
`;

export const ButtonWithIcon = styled.button`
  height: 36px;
  background-color: ${theme.colors.bgColor};
  cursor: pointer;
  border-radius: 5px;
  border: none;

  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;

  &:hover {
    background-color: gray;
    opacity: 0.2;

    ${ButtonText} {
      color: ${theme.colors.white};
    }
    .material-icons {
      color: ${theme.colors.white};
    }
  }
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  padding: 0.25rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IconButtonProps {
  icon: string;
  label?: string;
  onClick?: () => void;
  withCaret?: boolean;
}

export const IconButton = ({
  icon,
  label,
  onClick,
  withCaret,
}: IconButtonProps) => {
  return (
    <ButtonWithIcon onClick={onClick}>
      <MaterialIcon iconName={icon} color={theme.colors.accent} />
      {label && <ButtonText>{label}</ButtonText>}
      {withCaret && (
        <MaterialIcon
          iconName="keyboard_arrow_down"
          color={theme.colors.accent}
        />
      )}
    </ButtonWithIcon>
  );
};
