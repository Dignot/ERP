import { settingsReducer } from "providers/store/settings";

export const getChoiceLanguageSelector = () =>
  settingsReducer((state) => state.lang);
