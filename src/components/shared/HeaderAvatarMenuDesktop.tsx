
import React from "react";
import { AvatarMenuDropdown } from "@/components/shared/AvatarMenuDropdown";

type MenuItem = {
  label: string;
  icon: React.ElementType;
  path: string;
};
type User = {
  name: string;
  email: string;
  avatarUrl?: string;
};
type Props = {
  user: User;
  menu: MenuItem[];
  onNavigate: (to: string) => void;
  onSignOut: () => void;
};

const HeaderAvatarMenuDesktop: React.FC<Props> = ({
  user, menu, onNavigate, onSignOut
}) => (
  <div className="hidden md:block">
    <AvatarMenuDropdown
      user={user}
      menu={menu}
      onNavigate={onNavigate}
      onSignOut={onSignOut}
    />
  </div>
);

export default HeaderAvatarMenuDesktop;
