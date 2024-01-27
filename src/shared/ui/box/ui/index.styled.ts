import { Box } from '@mui/material'

import { styled } from "@mui/material/styles";

import type { BoxStyledProps } from "./index.types";

export const BoxWrapper = styled(Box)<BoxStyledProps>(
  ({ theme, width, height }) => ({
    width: width ? width : "242px",
    height: height ? height : "242px",
    border: `1px solid ${theme.box.border}`,
    borderRadius: "12px",
    padding: "12px 12px",
    WebkitBoxShadow: `1px 2px 19px 4px ${theme.box.shadowColor}`,
    display: 'flex',
    flexFlow:  "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "8px",
    overflow: "hidden"
  })
);

export const BoxInformation = styled("div")(() => ({
    display: 'flex',
    flexFlow:  "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "8px"
}))

export const BoxContent = styled("div")(({theme}) => ({
    overflow: "hidden",
    overflowY: "auto",
    width: "100%",
    height: "70%",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
}))

export const BoxActions = styled("div")(({theme}) => ({
    overflow: "hidden",
    width: "100%",
    height: "10%",
    display: 'flex',
    alignItems: "center",
    justifyContent: "flex-end"
}))