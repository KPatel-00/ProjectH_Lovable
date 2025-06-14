
import React from "react";
import { SheetContent } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

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
  avatarMenu: MenuItem[];
  setAvatarSheetOpen: (open: boolean) => void;
  handleSignOut: () => void;
  navigate: (path: string) => void;
};

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase();

const LandlordHeaderMobileAvatar: React.FC<Props> = ({
  user,
  avatarMenu,
  setAvatarSheetOpen,
  handleSignOut,
  navigate,
}) => (
  <SheetContent side="right" className="w-full max-w-xs p-0 flex flex-col">
    <div className="px-6 py-4 flex items-center gap-3 border-b">
      <Avatar>
        {user.avatarUrl ? (
          <AvatarImage src={user.avatarUrl} alt={user.name} />
        ) : (
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        )}
      </Avatar>
      <div>
        <div className="font-bold">{user.name}</div>
        <div className="text-xs text-muted-foreground">{user.email}</div>
      </div>
    </div>
    <div className="flex-1 flex flex-col mt-2">
      {avatarMenu.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          className="justify-start gap-2 rounded-none px-6"
          onClick={() => {
            setAvatarSheetOpen(false);
            navigate(item.path);
          }}
          type="button"
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </Button>
      ))}
      <hr className="my-2" />
      <Button
        variant="ghost"
        className="justify-start gap-2 rounded-none px-6 text-destructive"
        onClick={() => {
          setAvatarSheetOpen(false);
          handleSignOut();
        }}
        type="button"
      >
        <LogOut className="w-4 h-4" />
        Log Out
      </Button>
    </div>
    <div className="px-6 py-2 text-xs text-muted-foreground border-t">
      RentConnect · Landlord
    </div>
  </SheetContent>
);

export default LandlordHeaderMobileAvatar;
