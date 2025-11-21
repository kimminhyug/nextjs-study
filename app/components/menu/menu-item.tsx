"use client";
import { useState } from "react";
import { MenuLi } from "./menu-li";
import { IMenuItem } from "./types";

export const MenuItem = ({ menu }: { menu: IMenuItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <MenuLi disableHover>
      <div onClick={() => setOpen(!open)}>
        {menu.label} {open ? "▾" : "▸"}
      </div>
      {open && menu.children?.length && (
        <ul>
          {menu.children.map((children) => (
            <MenuLi key={children.label} menu={children} className="ml-3" />
          ))}
        </ul>
      )}
    </MenuLi>
  );
};
