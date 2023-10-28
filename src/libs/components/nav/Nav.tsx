import { ReactNode } from 'react';

import { NavItem } from './NavItem';

const Nav = ({ children }: { children?: ReactNode }) => {
  return (
    <nav className="flex items-center font-semibold">
      <ul className="item-align-center h-full space-x-2">{children}</ul>
    </nav>
  );
};

export default Nav;

Nav.Item = NavItem;
