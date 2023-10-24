import '@emotion/react';

import { Theme as DefaultThemeType } from './types';

declare module '@emotion/react' {
  export interface Theme extends DefaultThemeType {}
}
