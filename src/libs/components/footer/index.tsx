import dayjs from 'dayjs';
import Link from 'next/link';

import IconButton from '../common/button/IconButton';
import Divider from '../common/divider';
import { EmailIcon, GithubIcon, LinkedInIcon } from '../common/icons';

const Footer = () => {
  const thisYear = dayjs().year();

  return (
    <footer className="absolute bottom-0 h-28 w-full text-sm ">
      <Divider />
      <div className="pt-5">
        <ul>
          <li className="flex">
            <Link href="mailto:abg3000@naver.com" target="_blank" rel="noopener noreferrer">
              <IconButton className="h-7 w-7">
                <EmailIcon />
              </IconButton>
            </Link>
            <Link href="https://github.com/Andrevile" target="_blank" rel="noopener noreferrer">
              <IconButton className="h-7 w-7">
                <GithubIcon />
              </IconButton>
            </Link>
            <Link
              href="https://www.linkedin.com/in/%EC%A2%85%EC%98%A4-%EC%9E%A5-855714262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="h-7 w-7">
                <LinkedInIcon />
              </IconButton>
            </Link>
          </li>
          <li>{`© ${thisYear} Orca blog. All rights reserved.`}</li>
          {/* <li className="text-neutral-400">Blog design was inspired by Ragnarok Online.</li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
