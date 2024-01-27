export enum THEME_MODE {
  LIGTH = "light",
  DARK = "dark",
}

export interface MyTheme {
  header: {
    background: string;
    logo: string;
  };
  page: {
    background: string;
  };
  box: {
    background: string;
    border: string;
    color: string;
    shadowColor: string;
  }
}
export interface MyThemeOptions {
  header: {
    background: string;
    logo: string;
  };
  page: {
    background: string;
  };
}
