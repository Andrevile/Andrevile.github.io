import { JetBrains_Mono as FontMono } from '@next/font/google';
import localFont from '@next/font/local';

const fontPretendard = localFont({
  variable: '--font-pretendard',
  src: [
    {
      path: '../../../../../../public/assets/fonts/woff2/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff/Pretendard-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff2/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff/Pretendard-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff2/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff2/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff/Pretendard-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff2/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff/Pretendard-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff2/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff2/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff/Pretendard-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff2/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff/Pretendard-ExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff2/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../../../../public/assets/fonts/woff/Pretendard-Thin.woff',
      weight: '100',
      style: 'normal',
    },
  ],
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const Fonts = () => {
  return (
    <style jsx global>{`
      :root {
        --font-pretendard: ${fontPretendard.style.fontFamily};
        --font-mono: ${fontMono.style.fontFamily};
      }
    `}</style>
  );
};

export default Fonts;
