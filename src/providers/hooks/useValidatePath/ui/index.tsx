import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getUserIsAuthSelector } from "../model/selectors/getUserIsAuthSelector";
import { AUTH_PAGE_PATH, HOME_PATH } from "shared/constants/path";

export const useValidatePath = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuth = getUserIsAuthSelector();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!isAuth && !location.pathname.includes(AUTH_PAGE_PATH)) {
      navigate(AUTH_PAGE_PATH);
    }
    if (isAuth && location.pathname.includes(AUTH_PAGE_PATH)) {
      navigate(HOME_PATH);
    }
    setIsLoading(false);
  }, [location, isAuth]);

  return { isLoading };
};
