import React from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

type MenuItem = {
  label: string;
  icon: React.ElementType;
  path: string;
};
type Props = {
  user: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
  menu: MenuItem[];
  onNavigate: (path: string) => void;
  onSignOut: () => void;
};

export const AvatarMenuDropdown: React.FC<Props> = ({ user, menu, onNavigate, onSignOut }) => {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          type="button"
          className={`
            rounded-full aspect-square
            bg-black border-2 border-border
            shadow-refined 
            transition 
            duration-150 
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            outline-none
            hover:scale-105 hover:bg-zinc-900
            active:scale-95
          `}
          aria-label="Open user menu"
        >
          <Avatar>
            {user.avatarUrl ? (
              <AvatarImage src={user.avatarUrl} alt={user.name} />
            ) : (
              <AvatarFallback
                className="bg-black text-white font-extrabold text-base select-none"
                style={{ letterSpacing: "0.05em" }}
              >
                {getInitials(user.name)}
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 z-[99] bg-background border">
        <div className="p-4 pb-2 border-b">
          <div className="font-bold">{user.name}</div>
          <div className="text-xs text-muted-foreground">{user.email}</div>
        </div>
        <DropdownMenuSeparator />
        {menu.map(item =>
          <DropdownMenuItem
            key={item.label}
            onClick={() => onNavigate(item.path)}
          >
            <item.icon className="mr-2 h-4 w-4" /> {item.label}
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onSignOut} className="text-destructive">
          <LogOut className="mr-2 h-4 w-4" /> Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
