import { theme } from '../styles/theme';

export type ThemeMode = Parameters<typeof theme>[0];

export type Theme = ReturnType<typeof theme>;
