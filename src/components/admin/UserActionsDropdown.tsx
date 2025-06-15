
import React, { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, Key, Ban, UserCheck, UserMinus, Shield, BadgeCheck } from "lucide-react";

type UserType = {
  id: string;
  name: string;
  email: string;
  role: "tenant" | "landlord" | "admin";
  status: "active" | "banned" | "unverified" | "pending";
  createdAt: string;
  avatarUrl?: string;
  verified: boolean;
  banned: boolean;
}

type Props = {
  user: UserType;
  onBan: () => void;
  onUnban: () => void;
  onRoleChange: (role: "tenant" | "landlord" | "admin") => void;
  onVerify: () => void;
  onResetPassword: () => void;
};

export function UserActionsDropdown({ user, onBan, onUnban, onRoleChange, onVerify, onResetPassword }: Props) {
  const [confirm, setConfirm] = useState<null | { action: string; payload?: any }>(null);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <span className="sr-only">Open actions</span>
            <UserCheck className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => alert("Open profile (mock)")}>
            <Eye className="w-4 h-4 mr-2" /> View Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setConfirm({ action: "resetpw" }); }}>
            <Key className="w-4 h-4 mr-2" /> Reset Password
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setConfirm({ action: "role" }); }}>
            <Shield className="w-4 h-4 mr-2" /> Change Role
          </DropdownMenuItem>
          {user.banned
            ? <DropdownMenuItem onClick={() => setConfirm({ action: "unban" })}>
                <UserCheck className="w-4 h-4 mr-2" /> Unban User
              </DropdownMenuItem>
            : <DropdownMenuItem onClick={() => setConfirm({ action: "ban" })}>
                <Ban className="w-4 h-4 mr-2" /> Ban User
              </DropdownMenuItem>
          }
          {!user.verified && (
            <DropdownMenuItem onClick={() => setConfirm({ action: "verify" })}>
              <BadgeCheck className="w-4 h-4 mr-2" /> Manually Verify
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Simple modal/confirm for demo */}
      {confirm && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-5 max-w-xs w-full border">
            <div className="mb-3 font-semibold text-center">
              {confirm.action === "ban" && <>Ban user <span className="text-red-600">{user.name}</span>?</>}
              {confirm.action === "unban" && <>Unban user <span className="text-green-600">{user.name}</span>?</>}
              {confirm.action === "resetpw" && <>Reset password for <span className="text-blue-600">{user.email}</span>?</>}
              {confirm.action === "verify" && <>Mark <span className="text-green-600">{user.name}</span> as verified?</>}
              {confirm.action === "role" && (
                <span>
                  Change role for <span className="text-indigo-600">{user.name}</span>:
                </span>
              )}
            </div>
            {confirm.action === "role" ? (
              <div className="flex flex-col gap-2">
                {["tenant", "landlord", "admin"].map(role =>
                  <Button key={role} variant={role === user.role ? "default" : "outline"}
                    disabled={role === user.role}
                    onClick={() => { onRoleChange(role as any); setConfirm(null); }}>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </Button>
                )}
              </div>
            ) : (
              <div className="flex gap-2 justify-center">
                <Button variant="outline" onClick={() => setConfirm(null)}>Cancel</Button>
                <Button
                  variant={["ban", "unban"].includes(confirm.action) ? (confirm.action === "ban" ? "destructive" : "default") : "default"}
                  onClick={() => {
                    if (confirm.action === "ban") onBan();
                    if (confirm.action === "unban") onUnban();
                    if (confirm.action === "verify") onVerify();
                    if (confirm.action === "resetpw") onResetPassword();
                    setConfirm(null);
                  }}>
                  Confirm
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
