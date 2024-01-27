import { styled } from "@mui/material/styles";

type HeaderBackgroundColor = {
  color: string
}

export const HeaderWrapper = styled("div")<HeaderBackgroundColor>(({ color }) => ({
  padding: "6px 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: color,
  overflow: "hidden",
  boxSizing: "border-box",
  height: "60px",
  boxShadow: "0 5px 5px -5px rgba(67, 103, 69, 0.6)",
  WebkitBoxShadow: "0 5px 5px -5px rgba(67, 103, 69, 0.6",
}));

export const HeaderLogo = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "100%",
}));

export const HeaderLeftAction = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "12px",
}));

export const HeaderRightAction = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "12px",
}));

export const HeaderActions = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "12px",
}));