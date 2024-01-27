import { styled } from "@mui/material/styles";

export const AppWrapper = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
}));

export const PageWrapper = styled("div")(({ theme }) => ({
  padding: "12px 12px",
  background: theme.page.background,
  width: "100%",
  height: "calc(100vh - 120px)",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "column",
  gap: "12px",
  overflow: "hidden",
  overflowY: "auto",
}));
