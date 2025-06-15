
import React, { useMemo, useState } from "react";
import { UserStatusBadge } from "@/components/admin/UserStatusBadge";
import { UserRoleTag } from "@/components/admin/UserRoleTag";
import { UserActionsDropdown } from "@/components/admin/UserActionsDropdown";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserRound, Mail, Search, Users, UserPlus, UserMinus, Shield, Calendar } from "lucide-react";

// ---- Mock Data ----
type Role = "tenant" | "landlord" | "admin";
type UserStatus = "active" | "banned" | "unverified" | "pending";
type UserType = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: Role;
  status: UserStatus;
  createdAt: string;
  verified: boolean;
  banned: boolean;
};

const MOCK_USERS: UserType[] = [
  {
    id: "u1",
    name: "Alice Wang",
    email: "alice@prop.com",
    avatarUrl: "",
    role: "landlord",
    status: "active",
    createdAt: "2024-03-15",
    verified: true,
    banned: false,
  },
  {
    id: "u2",
    name: "Bob Smith",
    email: "bob@estate.com",
    avatarUrl: "",
    role: "tenant",
    status: "unverified",
    createdAt: "2024-04-02",
    verified: false,
    banned: false,
  },
  {
    id: "u3",
    name: "Jane Admin",
    email: "jane@admin.com",
    avatarUrl: "",
    role: "admin",
    status: "active",
    createdAt: "2023-12-12",
    verified: true,
    banned: false,
  },
  {
    id: "u4",
    name: "Sam Lee",
    email: "sam@data.com",
    avatarUrl: "",
    role: "landlord",
    status: "banned",
    createdAt: "2023-11-27",
    verified: true,
    banned: true,
  },
  {
    id: "u5",
    name: "Elena Tenant",
    email: "elena@client.eu",
    avatarUrl: "",
    role: "tenant",
    status: "active",
    createdAt: "2024-01-10",
    verified: true,
    banned: false,
  },
  {
    id: "u6",
    name: "Unverified Landlord",
    email: "pending@biz.com",
    avatarUrl: "",
    role: "landlord",
    status: "unverified",
    createdAt: "2024-06-01",
    verified: false,
    banned: false,
  },
];

// ---- FILTER TYPES ----
const ROLES: { label: string; value: "all" | Role }[] = [
  { label: "All", value: "all" },
  { label: "Tenant", value: "tenant" },
  { label: "Landlord", value: "landlord" },
  { label: "Admin", value: "admin" },
];
const STATUSES: { label: string; value: "all" | UserStatus }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Banned", value: "banned" },
  { label: "Unverified", value: "unverified" },
];

// ---- UI ----
export default function AdminUsers() {
  const [users, setUsers] = useState<UserType[]>(MOCK_USERS);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | Role>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | UserStatus>("all");

  // Filtering logic
  const filtered = useMemo(() => {
    return users.filter(u => {
      if (
        (roleFilter === "all" || u.role === roleFilter) &&
        (statusFilter === "all" || u.status === statusFilter)
      ) {
        if (
          !search ||
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase()) ||
          u.id.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  }, [users, search, roleFilter, statusFilter]);

  // Stats per role
  const stats = useMemo(() => {
    const out: Record<Role, number> = { tenant: 0, landlord: 0, admin: 0 };
    users.forEach(u => out[u.role]++);
    return out;
  }, [users]);

  // Action handlers
  function handleBan(id: string) {
    setUsers(us => us.map(u => u.id === id ? { ...u, banned: true, status: "banned" } : u));
  }
  function handleUnban(id: string) {
    setUsers(us => us.map(u => u.id === id ? { ...u, banned: false, status: "active" } : u));
  }
  function handleRole(id: string, role: Role) {
    setUsers(us => us.map(u => u.id === id ? { ...u, role } : u));
  }
  function handleVerify(id: string) {
    setUsers(us => us.map(u => u.id === id ? { ...u, verified: true, status: u.banned ? "banned" : "active" } : u));
  }
  function handleResetPassword(id: string) {
    alert("Password reset email sent to " + users.find(u => u.id === id)?.email);
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-2 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">User Management</h1>

      {/* Stats Cards */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex flex-col items-center min-w-[110px]">
          <div className="flex gap-1 items-center text-blue-600 font-bold text-lg">
            <Users className="w-4 h-4" /> {stats.tenant}
          </div>
          <div className="text-xs mt-1 text-blue-700">Tenants</div>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex flex-col items-center min-w-[110px]">
          <div className="flex gap-1 items-center text-green-600 font-bold text-lg">
            <UserPlus className="w-4 h-4" /> {stats.landlord}
          </div>
          <div className="text-xs mt-1 text-green-700">Landlords</div>
        </div>
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 flex flex-col items-center min-w-[110px]">
          <div className="flex gap-1 items-center text-gray-700 font-bold text-lg">
            <Shield className="w-4 h-4" /> {stats.admin}
          </div>
          <div className="text-xs mt-1 text-gray-700">Admins</div>
        </div>
        <div className="flex-1"/>
        <div>
          <span className="text-sm font-semibold mr-2">Total:</span>
          <Badge variant="secondary">{users.length}</Badge>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-end mb-5">
        <div className="relative flex-1">
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, email, or user ID"
            className="pl-8"
          />
          <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
        <div>
          <select
            className="border rounded py-2 px-3 text-sm"
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value as "all" | Role)}
          >
            {ROLES.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>
        <div>
          <select
            className="border rounded py-2 px-3 text-sm"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as "all" | UserStatus)}
          >
            {STATUSES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow mb-10">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm text-muted-foreground border-b">
              <th className="p-2 font-semibold flex items-center"><UserRound className="w-4 h-4 mr-1"/> Name</th>
              <th className="p-2 font-semibold flex items-center"><Mail className="w-4 h-4 mr-1"/> Email</th>
              <th className="p-2 font-semibold">Role</th>
              <th className="p-2 font-semibold">Status</th>
              <th className="p-2 font-semibold"><Calendar className="w-4 h-4 mr-1"/>Created</th>
              <th className="p-2 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-10 text-center text-muted-foreground">No users found.</td>
              </tr>
            ) : (
              filtered.map(user => (
                <tr key={user.id} className="hover:shadow bg-accent rounded">
                  <td className="p-2 font-medium flex items-center gap-2">
                    <span className="inline-block size-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">{user.name[0]}</span>
                    {user.name}
                  </td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2"><UserRoleTag role={user.role} /></td>
                  <td className="p-2"><UserStatusBadge status={user.status as any} /></td>
                  <td className="p-2">{user.createdAt}</td>
                  <td className="p-2">
                    <UserActionsDropdown
                      user={user}
                      onBan={() => handleBan(user.id)}
                      onUnban={() => handleUnban(user.id)}
                      onRoleChange={role => handleRole(user.id, role)}
                      onVerify={() => handleVerify(user.id)}
                      onResetPassword={() => handleResetPassword(user.id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
