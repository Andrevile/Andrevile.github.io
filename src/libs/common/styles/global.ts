import { css } from '@emotion/react';

import { darkThemeColors, lightThemeColors } from './theme';

export const globalStyle = css`
  :root {
    --sat: constant(safe-area-inset-top); /* for iOS 11.2 and below */
    --sat: env(safe-area-inset-top); /* for iOS 11.3 and above */
    --sab: constant(safe-area-inset-bottom); /* for iOS 11.2 and below */
    --sab: env(safe-area-inset-bottom); /* for iOS 11.3 and above */
  }
  html {
    body {
      background-color: ${lightThemeColors.bgColor};
      color: ${lightThemeColors.fontColor};
    }
  }

  html[data-theme='dark'] {
    body {
      background-color: ${darkThemeColors.bgColor};
      color: ${darkThemeColors.fontColor};
    }
  }
`;
