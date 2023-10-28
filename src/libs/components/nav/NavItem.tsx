import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface NavItemProps {
  href: string;
}

export const NavItem = ({ href, children }: PropsWithChildren<NavItemProps>) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};
