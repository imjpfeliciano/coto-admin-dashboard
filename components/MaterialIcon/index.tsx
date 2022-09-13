import styled from "styled-components";
import theme from "../../utils/theme";

interface iconProps {
  iconName: string;
  onClick?: () => void;
  color?: string;
}

const IconContainer = styled.span`
  color: ${(props) => props.color || theme.colors.accent};
  cursor: pointer;
`;

const MaterialIcon = ({ iconName, onClick, color }: iconProps) => {
  return (
    <IconContainer className="material-icons" onClick={onClick} color={color}>
      {iconName}
    </IconContainer>
  );
};

export default MaterialIcon;
