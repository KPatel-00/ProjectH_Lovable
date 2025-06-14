
import React from "react";
import { AvatarMenuDropdown } from "@/components/shared/AvatarMenuDropdown";
import { useSignOut } from "@/hooks/useSignOut";

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
  // onSignOut is DEPRECATED—will use internal signout
};

// Make sign out logic internal (always consistent via useSignOut)
const HeaderAvatarMenuDesktop: React.FC<Omit<Props, "onSignOut">> = ({
  user, menu, onNavigate
}) => {
  const signOut = useSignOut();
  return (
    <div className="hidden md:block">
      <AvatarMenuDropdown
        user={user}
        menu={menu}
        onNavigate={onNavigate}
        onSignOut={signOut}
      />
    </div>
  );
};

export default HeaderAvatarMenuDesktop;

