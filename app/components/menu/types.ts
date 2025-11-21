export interface IMenuItem {
  label: string;
  url?: string;
  children?: IMenuItem[];
}

export type MenuProps = { menuList: IMenuItem[] };
