import { useEffect, useState } from 'react';

import { DARK_MODE_ICON_PATH, LIGHT_MODE_ICON_PATH } from '@/libs/contsants/svg';

import IconButton from '../common/button/IconButton';

interface ThemeIconProps {
  mode: string | undefined;
  onClick?: () => void;
}

const ThemeSwitch = ({ mode, onClick }: ThemeIconProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const toggleButton = () => {
    onClick?.();
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <IconButton
      className="relative h-10 w-10"
      src={mode === 'light' ? LIGHT_MODE_ICON_PATH : DARK_MODE_ICON_PATH}
      alt="theme-toggle-icon"
      onClick={toggleButton}
    />
  );
};

export default ThemeSwitch;
