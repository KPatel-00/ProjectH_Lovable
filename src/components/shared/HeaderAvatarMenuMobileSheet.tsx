
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
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
  avatarMenu: MenuItem[];
  avatarSheetOpen: boolean;
  setAvatarSheetOpen: (open: boolean) => void;
  navigate: (path: string) => void;
  roleLabel?: string;
};

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase();

const HeaderAvatarMenuMobileSheet: React.FC<Props> = ({
  user,
  avatarMenu,
  avatarSheetOpen,
  setAvatarSheetOpen,
  navigate,
  roleLabel = "",
}) => {
  const signOut = useSignOut();
  return (
    <Sheet open={avatarSheetOpen} onOpenChange={setAvatarSheetOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full aspect-square" type="button">
          <Avatar>
            {user.avatarUrl ?
              <AvatarImage src={user.avatarUrl} alt={user.name} /> :
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>}
          </Avatar>
        </Button>
      </SheetTrigger>
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
              onClick={() => { setAvatarSheetOpen(false); navigate(item.path); }}
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
            onClick={() => { setAvatarSheetOpen(false); signOut(); }}
            type="button"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </Button>
        </div>
        {roleLabel && (
          <div className="px-6 py-2 text-xs text-muted-foreground border-t">
            RentConnect · {roleLabel}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default HeaderAvatarMenuMobileSheet;
