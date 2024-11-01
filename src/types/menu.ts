export type Menu = {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    icons: JSX.Element;
    submenu?: Menu[];
  };