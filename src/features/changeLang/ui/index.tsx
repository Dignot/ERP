import { useMemo, useState } from "react";

import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useTranslete } from "providers/hooks/useTranslete";

import { LANGUAGES } from "shared/constants/language";

import { getChoiceLanguageSelector } from "../model/selectors/getChoiceLanguageSelector";

export const ChangeLang = () => {
  const selectLang = getChoiceLanguageSelector();

  const { handleChangeLanguage } = useTranslete();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const choiceLangtitle = useMemo(() => {
    if (selectLang === LANGUAGES.EN) {
      return <div>EN</div>;
    }
    return <div>RU</div>;
  }, [selectLang]);

  const handleChangeLang = (value: LANGUAGES) => {
    handleChangeLanguage(value);
    handleClose();
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={!!anchorEl ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={!!anchorEl ? "true" : undefined}
        onClick={handleClick}
      >
        {choiceLangtitle}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => handleChangeLang(LANGUAGES.EN)}
          selected={selectLang === LANGUAGES.EN}
        >
          {LANGUAGES.EN}
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeLang(LANGUAGES.RU)}
          selected={selectLang === LANGUAGES.RU}
        >
          {LANGUAGES.RU}
        </MenuItem>
      </Menu>
    </div>
  );
};
