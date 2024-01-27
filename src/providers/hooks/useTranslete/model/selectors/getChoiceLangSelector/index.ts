import { settingsReducer } from "providers/store/settings";

export const getChoiceLangSelector = () =>
  settingsReducer((state) => state.lang);
