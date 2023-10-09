import { NavMenuItem } from '@/app/types/nav-menu';

export const sortItems = (a: NavMenuItem, b: NavMenuItem) => {
  if (a.order < b.order) {
    return -1;
  } else if (a.order > b.order) {
    return 1;
  }

  return 0;
};
