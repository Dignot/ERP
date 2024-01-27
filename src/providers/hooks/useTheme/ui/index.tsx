import { THEME_MODE } from "providers/theme";

import { THEME } from "shared/constants/storage";

import { changeThemeAction } from "../model/actions/changeThemeAction";
import { getThemeModeSelector } from "../model/selectors/getThemeModeSelector";

export const useTheme = () => {
  const mode = getThemeModeSelector();

  const handleChangeTheme = () => {
    if (mode === THEME_MODE.DARK) {
      changeThemeAction(THEME_MODE.LIGTH);
      sessionStorage.setItem(THEME, THEME_MODE.LIGTH);
    }
    if (mode === THEME_MODE.LIGTH) {
      changeThemeAction(THEME_MODE.DARK);
      sessionStorage.setItem(THEME, THEME_MODE.DARK);
    }
  };

  return { handleChangeTheme };
};
