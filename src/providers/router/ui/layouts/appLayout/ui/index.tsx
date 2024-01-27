import { CircularProgress, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import { useValidatePath } from "providers/hooks/useValidatePath";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";

import * as Styled from "./index.styled";
import { getUserAuthSelector } from "../model/selectors/getUserAuthSelector";

export const AppLayout = () => {
  const { isLoading } = useValidatePath();

  const isAuth = getUserAuthSelector()

  return (
    <Styled.AppWrapper>
      <CssBaseline />
      {isAuth && <Header />}
      <Styled.PageWrapper>
        {isLoading ? <CircularProgress /> : <Outlet />}
      </Styled.PageWrapper>
      <Footer />
    </Styled.AppWrapper>
  );
};
