import styled from "styled-components";
import MaterialIcon from "../MaterialIcon";
import theme from "../../utils/theme";

export const Button = styled.button``;

export const ButtonWithIcon = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;

  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  background-color: ${theme.colors.accent};

  padding: 0.25rem;
  margin-right: 0.5rem;
  border-radius: 50%;

  display: flex;
  justify-content: center !important; // TODO: Validate this
  align-items: center;
`;

const ButtonText = styled.span`
  color: ${theme.colors.accent};
`;

interface IconButtonProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

export const IconButton = ({ icon, label, onClick }: IconButtonProps) => {
  return (
    <ButtonWithIcon onClick={onClick}>
      <IconContainer>
        <MaterialIcon iconName={icon} color={theme.colors.text} />
      </IconContainer>
      <ButtonText>{label}</ButtonText>
    </ButtonWithIcon>
  );
};
