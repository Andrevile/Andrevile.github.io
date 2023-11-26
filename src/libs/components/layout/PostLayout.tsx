import { cm } from '@/libs/utils/cm';

import RootLayout from './RootLayout';

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout>
      <div className={cm('prose  dark:prose-invert', 'w-full', 'max-w-full')}>{children}</div>
    </RootLayout>
  );
};

export default PostLayout;
