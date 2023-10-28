import Image from 'next/image';

import { NAV_ICON_PATH } from '@/libs/contsants/svg';
import { useDarkMode } from '@/libs/hooks/useDarkMode';

import ThemeSwitch from '../layout/ThemeSwitch';
import Nav from '../nav/Nav';

const Header = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <header className="mb-8 flex w-full flex-nowrap justify-between  pb-2 pt-8">
      <Nav>
        <Nav.Item href="/">
          <div className="relative mr-3 h-10 w-10">
            <Image
              src={NAV_ICON_PATH}
              fill={true}
              className="aspect-square"
              alt="nav-icon"
              style={{ display: 'block' }}
            />
          </div>
        </Nav.Item>
        <Nav.Item href="#">Post</Nav.Item>
        <Nav.Item href="#">Second</Nav.Item>
        <Nav.Item href="#">Third</Nav.Item>
      </Nav>
      <div>
        <ThemeSwitch mode={theme} onClick={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
