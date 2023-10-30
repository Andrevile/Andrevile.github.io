import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { cm } from '@/libs/utils/cm';

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const NavItem = ({ href, className, children }: PropsWithChildren<NavItemProps>) => {
  return (
    <li>
      <Link href={href} className={cm(className)}>
        {children}
      </Link>
    </li>
  );
};
