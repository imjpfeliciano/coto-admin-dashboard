import { WithChildren } from "../../types/components";

const Card: React.FC<WithChildren> = ({ children }) => {
  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      {children}
    </div>
  )
}
export default Card;
