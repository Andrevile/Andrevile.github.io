/* eslint-disable prettier/prettier */
import Image from 'next/image';

import { ORCA_ICON_PATH } from '@/libs/contsants/svg';
import { useDarkMode } from '@/libs/hooks/useDarkMode';

import ThemeSwitch from '../material/ThemeSwitch';
import Nav from '../nav/Nav';

const Header = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <header className="mb-8 flex w-full flex-nowrap justify-between  pb-2 pt-8">
      <Nav>
        <Nav.Item href="/">
          <div className="relative mr-2 h-10 w-10">
            <Image
              src={ORCA_ICON_PATH}
              // src={NAV_ICON_PATH}
              fill={true}
              className="aspect-square h-10 w-10"
              alt="nav-icon"
              style={{ display: 'block' }}
            />
          </div>
        </Nav.Item>
        <Nav.Item href="/posts" className="hidden ss:block ">
          Post
        </Nav.Item>
        <Nav.Item href="/series" className="hidden ss:block">
          Series
        </Nav.Item>
        <Nav.Item href="/tags" className="hidden ss:block">
          Tags
        </Nav.Item>
      </Nav>
      <div>
        <ThemeSwitch mode={theme} onClick={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
