import styled from "styled-components";
import theme from "../../utils/theme";

interface IconProps {
  iconName: string;
  onClick?: () => void;
  color?: string;
}

const MaterialIcon: React.FC<IconProps> = ({ iconName, onClick, color }) => {
  // FIXME: hover colors
  const classColor = color === "white" ? "text-white dark:text-black group-hover:text-gray-400" : `text-${color}-500  dark:text-${color}-400 group-hover:text-${color}-900`;
  return (
    <span className={`material-icons w-6 h-6 ${classColor} transition duration-75  dark:group-hover:text-white`}>
      {iconName}
    </span>
  );
}
export default MaterialIcon;
