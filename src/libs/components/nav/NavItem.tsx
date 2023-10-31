import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { cm } from '@/libs/utils/cm';

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const NavItem = ({ href, className, children }: PropsWithChildren<NavItemProps>) => {
  const router = useRouter();
  const isCurrent = router.asPath === href;

  return (
    <li>
      <Link href={href} className={cm(!isCurrent && 'text-neutral-400', className)}>
        {children}
      </Link>
    </li>
  );
};
