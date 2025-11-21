import Link from "next/link";
import { ReactNode } from "react";
import { IMenuItem } from "./types";

export const MenuLi = ({
  menu,
  children,
  className = "",
  disableHover = false,
}: {
  className?: string;
  menu?: IMenuItem;
  children?: ReactNode;
  disableHover?: boolean;
}) => {
  return (
    <li
      className={`cursor-pointer ${className} ${
        !disableHover && "hover:bg-amber-200"
      }`}
    >
      {menu?.label && <Link href={menu.url || "#"}>{menu.label}</Link>}

      {children && children}
    </li>
  );
};
