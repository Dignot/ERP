import { useTheme } from "providers/hooks/useTheme";
import { settingsReducer } from "providers/store/settings";
import { THEME_MODE } from "providers/theme";

import * as Styled from "./index.styled";

export const ChangeTheme = () => {
  const mode = settingsReducer((state) => state.theme);

  const { handleChangeTheme } = useTheme();

  return (
    <Styled.ThemeSwitch
      checked={mode === THEME_MODE.DARK}
      onChange={() => handleChangeTheme()}
    />
  );
};
