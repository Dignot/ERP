import { useEffect, useState } from "react";

import { get } from "lodash";

import { LANGUAGE } from "shared/constants/storage";

import { en } from "../config/dictionaries/en";
import { ru } from "../config/dictionaries/ru";
import { LANGUAGES } from "../../../../shared/constants/language";
import { changeLangAction } from "../model/actions/changeLangAction";
import { getChoiceLangSelector } from "../model/selectors/getChoiceLangSelector";

export const useTranslete = () => {
  const choice = getChoiceLangSelector();

  const [dictionary, setDictionar] = useState(ru);

  const t = (path: string) => {
    return get(dictionary, path, path);
  };

  const handleChangeLanguage = (value: LANGUAGES) => {
    changeLangAction(value);
    sessionStorage.setItem(LANGUAGE, value);
  };

  useEffect(() => {
    if (choice === LANGUAGES.EN) {
      setDictionar(en);
    }
    if (choice === LANGUAGES.RU) {
      setDictionar(ru);
    }
  }, [choice]);

  return { t, handleChangeLanguage, language: choice };
};
