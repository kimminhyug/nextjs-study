import { MenuList } from "./menu-list";
import { MenuProps } from "./types";

export const Menu = ({ menuList }: MenuProps) => {
  return (
    <div className="w-64 p-5 h-full bg-gray-100">
      <MenuList menuList={menuList} />
    </div>
  );
};
