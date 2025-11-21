import { MenuItem } from "./menu-item";
import { MenuLi } from "./menu-li";
import { MenuProps } from "./types";

export const MenuList = ({ menuList }: MenuProps) => {
  return (
    <ul>
      {menuList.map((menu) =>
        menu.children?.length ? (
          <MenuItem key={menu.label} menu={menu} />
        ) : (
          <MenuLi key={menu.label} menu={menu} />
        )
      )}
    </ul>
  );
};
