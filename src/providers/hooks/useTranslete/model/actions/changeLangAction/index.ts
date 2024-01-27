import { LANGUAGES } from "shared/constants/language";
import { settingsReducer } from "providers/store/settings";

export const changeLangAction = (value: LANGUAGES) =>
  settingsReducer.setState({ lang: value });
