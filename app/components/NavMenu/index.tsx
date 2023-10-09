import { NavMenuProps } from '@/app/types/nav-menu';
import { ITEMS } from './items';
import { NavItem } from './nav-item';
import { sortItems } from './nav-menu-utils';

export const NavMenu = ({
  name,
  className = 'hidden lg:flex lg:items-center lg:gap-4 sm:gap-10',
}: NavMenuProps) => {
  const items = ITEMS.sort(sortItems);

  return (
    <nav className={className}>
      {items.map((item) => (
        <NavItem
          {...item}
          key={`${name}-${item.id}-${item.order}`}
          textSize={name === 'footer' ? 'text-xs' : undefined}
        />
      ))}
    </nav>
  );
};
