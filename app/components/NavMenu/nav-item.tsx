import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderNavItemProps } from '@/app/types/header';
import { classNameMerge } from '@/app/lib/utils';

export const NavItem = ({ href, label, textSize }: HeaderNavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={classNameMerge(
        'flex items-center gap-2 font-semibold text-primaryText hover:text-primaryTextHover',
        isActive && 'text-primaryActive hover:text-primaryActive',
        textSize && textSize,
      )}
    >
      {label}
    </Link>
  );
};
