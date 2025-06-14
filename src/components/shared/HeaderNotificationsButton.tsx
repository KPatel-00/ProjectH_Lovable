
import React from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  ariaLabel?: string;
  className?: string;
};

const HeaderNotificationsButton: React.FC<Props> = ({ ariaLabel = "Notifications", className }) => {
  const navigate = useNavigate();
  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label={ariaLabel}
      onClick={() => navigate("/notifications")}
      className={className ?? "relative"}
      type="button"
    >
      <Bell className="w-5 h-5" />
    </Button>
  );
};

export default HeaderNotificationsButton;
