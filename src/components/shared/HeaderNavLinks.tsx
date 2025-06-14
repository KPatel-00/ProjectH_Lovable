
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export type HeaderNavLink = {
  name: string;
  to: string;
  id?: string;
};

type HeaderNavLinksProps = {
  links: HeaderNavLink[];
  navClassName?: string;
  btnClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  button?: boolean; // If true, use button for each link (TenantHomePageHeader), else NavLink
  onNavigate?: (to: string) => void;
};

const HeaderNavLinks: React.FC<HeaderNavLinksProps> = ({
  links,
  navClassName = "flex gap-2",
  btnClassName = "relative px-4 font-medium transition-all",
  activeClassName = "text-primary after:absolute after:-bottom-px after:left-1/2 after:-translate-x-1/2 after:w-5/6 after:h-[2px] after:bg-primary after:rounded-full content-['']",
  inactiveClassName = "text-muted-foreground hover:text-primary",
  button = false,
  onNavigate,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  // Used for button mode (Tenant header)
  const isActive = (to: string) => location.pathname.startsWith(to);

  return (
    <nav className={navClassName}>
      {links.map((l) =>
        button ? (
          <button
            key={l.id || l.to}
            type="button"
            className={
              `${btnClassName} ${isActive(l.to) ? activeClassName : inactiveClassName}`
            }
            onClick={() => onNavigate ? onNavigate(l.to) : navigate(l.to)}
          >
            {l.name}
          </button>
        ) : (
          <NavLink
            to={l.to}
            key={l.id || l.to}
            className={({ isActive }) =>
              `${btnClassName} ${isActive ? activeClassName : inactiveClassName}`
            }
            type="button"
          >
            {l.name}
          </NavLink>
        )
      )}
    </nav>
  );
};

export default HeaderNavLinks;
