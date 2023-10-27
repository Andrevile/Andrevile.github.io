import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex  pb-12 pt-8">
      {/* <div className="h-10 w-10 rounded-full bg-white "> */}
      <Image src="/nav-icon.svg" width={40} height={40} className="aspect-square" alt="nav-icon" />
      {/* </div> */}
      <nav>
        <ul>
          <li key="post">Post</li>
          <li key=""></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
