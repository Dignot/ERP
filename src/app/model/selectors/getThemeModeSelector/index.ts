import { settingsReducer } from "providers/store/settings";

export const getThemeModeSelector = () =>
  settingsReducer((state) => state.theme);
