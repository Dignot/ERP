import { THEME_MODE } from "providers/theme";

import { LANGUAGES } from "shared/constants/language";

export type InitialState = {
  theme: THEME_MODE;
  lang: LANGUAGES;
};
