import { MyTheme } from "./index.types";

export const myThemeLight: MyTheme = {
  header: {
    background: "#f5f5f5",
    logo: "#009688",
  },
  page: {
    background: "#fff",
  },
  box: {
    background: '#EBECF0',
    color: '',
    border: '#e8eaf6',
    shadowColor: "rgba(36, 52, 64, 0.31)"
  }
};

export const myThemeDark: MyTheme = {
  header: {
    background: "#263238",
    logo: "#90caf9",
  },
  page: {
    background: "#01579b",
  },
  box: {
    background: '#546e7a',
    color: '',
    border: '#283593',
    shadowColor: "rgba(45, 48, 51, 0.62)"
  }
};
