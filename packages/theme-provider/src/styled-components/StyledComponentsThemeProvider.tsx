import { FC, useEffect, useMemo, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors } from '@sekyungk/design-token';
import type { ColorScheme } from '@sekyungk/design-token';
import { resetStyle } from './resetStyle';

export type DesignTheme = {
  colors: ColorScheme;
};

const GlobalStyle = createGlobalStyle`
  ${resetStyle}
`;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DesignTheme {}
}

export const StyledComponentsThemeProvider: FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  const theme = useMemo(() => {
    const colorTheme = isDarkMode ? colors.dark : colors.light;
    return {
      colors: colorTheme.scheme,
    };
  }, [isDarkMode]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
