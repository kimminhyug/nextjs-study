import Link from "next/link";
import { ReactNode } from "react";
import { IMenuItem } from "./types";

export const MenuLi = ({
  menu,
  children,
  className = "",
  enableHover = true,
  onClick,
}: {
  onClick?: () => void;
  className?: string;
  menu?: IMenuItem;
  children?: ReactNode;
  enableHover?: boolean;
}) => {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer py-1 
     px-1   
        ${className} ${enableHover && "hover:font-bold hover:bg-menu-hover"}`}
    >
      {menu?.label && <Link href={menu.url || "#"}>{menu.label}</Link>}

      {children && children}
    </li>
  );
};
