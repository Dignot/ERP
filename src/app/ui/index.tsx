import "@fontsource-variable/oswald/index.css";
import "@fontsource-variable/josefin-sans/index.css";

import { useMemo } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import { Router } from "providers/router";
import { THEME_MODE, myThemeDark, myThemeLight } from "providers/theme";

import { getThemeModeSelector } from "../model/selectors/getThemeModeSelector";

export const Container = () => {
  const mode = getThemeModeSelector();

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Josefin Sans Variable, Oswald Variable",
          logo: {
            fontSize: 26,
            fontFamily: "Josefin Sans Variable",
            fontWeight: "400",
          },
        },
        ...(mode === THEME_MODE.DARK ? myThemeDark : myThemeLight),
        palette: {
          mode: mode === THEME_MODE.DARK ? "dark" : "light",
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider {...{ theme }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};
