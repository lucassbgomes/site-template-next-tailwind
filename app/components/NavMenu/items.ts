import { NavMenuItem } from '@/app/types/nav-menu';

export const ITEMS: NavMenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    order: 0,
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    order: 1,
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '/projects',
    order: 2,
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    order: 3,
  },
];
