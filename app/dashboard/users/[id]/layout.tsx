import { WithChildren } from '../../../../types/components';

const ProfileLayout: React.FC<WithChildren> = ({ children }) => {
  return (
    <div className="w-100 h-100 flex flex-col">
      <div className="h-96">{children}</div>

    </div>
  );
};

export default ProfileLayout;