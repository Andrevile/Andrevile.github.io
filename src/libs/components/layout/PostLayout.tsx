import { cm } from '@/libs/utils/cm';

import RootLayout from './RootLayout';

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout>
      <article className={cm('prose  dark:prose-invert', 'w-full', 'max-w-full')}>{children}</article>
    </RootLayout>
  );
};

export default PostLayout;
