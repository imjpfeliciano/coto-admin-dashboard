import styled from "styled-components";
import theme from "../../utils/theme";

interface IconProps {
  iconName: string;
  onClick?: () => void;
  className?: string;
  color?: string;
}

const MaterialIcon: React.FC<IconProps> = ({ iconName, onClick, className }) => {
  // FIXME: hover colors
  return (
    <span className={`material-icons w-6 h-6 transition duration-75 ${className ? className : ""}`}>
      {iconName}
    </span>
  );
}
export default MaterialIcon;
