import { IconType } from 'react-icons';

export type NavMenuProps = {
  name: string;
  className?: string;
};

export type NavMenuItem = {
  id: string;
  label: string;
  href: string;
  order: number;
  icon?: IconType;
};
