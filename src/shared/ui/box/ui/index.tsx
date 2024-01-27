import { Button, Typography } from "@mui/material";

import type { BoxProps } from "./index.types";

import * as Styled from "./index.styled";

export const Box = (props: BoxProps) => {
  const {
    title,
    subTitle,
    description,
    children,
    styled = {},
    actions = {},
  } = props;

  const { cancelTitle, cancelFunction, submitTitle, submitFunction, isDisabledSubmit } = actions;

  return (
    <Styled.BoxWrapper {...styled}>
      <Styled.BoxInformation>
        {title && <Typography variant="h5">{title}</Typography>}
        {subTitle && <Typography variant="subtitle1">{subTitle}</Typography>}
        {title && <Typography variant="caption">{description}</Typography>}
      </Styled.BoxInformation>
      <Styled.BoxContent>{children}</Styled.BoxContent>
      {actions && (
        <Styled.BoxActions>
          {cancelTitle && cancelFunction && (
            <Button
              onClick={() => cancelFunction()}
              color="secondary"
              size="medium"
              variant="outlined"
            >
              {cancelTitle}
            </Button>
          )}
          {submitTitle && submitFunction && (
            <Button
              onClick={() => submitFunction()}
              disabled={isDisabledSubmit}
              color="primary"
              size="medium"
              variant="contained"
            >
              {submitTitle}
            </Button>
          )}
        </Styled.BoxActions>
      )}
    </Styled.BoxWrapper>
  );
};
