import Image from 'next/image';
import { HTMLAttributes } from 'react';

import { cm } from '@/libs/utils/cm';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  src?: string;
  alt?: string;
  onClick?: () => void;
}

const IconButton = ({ src, alt, className, onClick, children }: React.PropsWithChildren<IconButtonProps>) => {
  const handleClick = () => {
    onClick?.();
  };
  return (
    <button className={cm(['relative aspect-square h-10 w-10', className])} onClick={handleClick}>
      {src && <Image src={src} alt={alt ?? ''} fill={true} />}
      {children}
    </button>
  );
};

export default IconButton;
