import { MenuList } from "./menu-list";
import { MenuProps } from "./types";

export const Menu = ({ menuList }: MenuProps) => {
  return (
    <div className="w-64 p-5 h-full border-r-0 bg-menu rounded-lg text-menu">
      <MenuList menuList={menuList} />
    </div>
  );
};
