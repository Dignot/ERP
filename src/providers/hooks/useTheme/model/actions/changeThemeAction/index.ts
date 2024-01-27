import { settingsReducer } from "providers/store/settings";
import { THEME_MODE } from "providers/theme";

export const changeThemeAction = (value: THEME_MODE) =>
  settingsReducer.setState({ theme: value });
