import { FormEvent, useRef, useState } from "react";
import TextField from "@mui/material/TextField";

import { useTranslete } from "providers/hooks/useTranslete";

import { Box } from "shared/ui/box";
import { Formik, FormikProps } from "formik";
import { initialValues } from "../config/initialValues";
import { userAuth, type UserAuthBodyRequest } from "shared/api";

import * as Styled from './index.styled'
import { CircularProgress } from "@mui/material";
import { setAuthAction } from "../model/actions/setAuthAction";
import { ResponseError } from "shared/api/axios/index.types";

export const AuthPage = () => {
  const { t } = useTranslete();

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ResponseError | null>()

  const submitRef =
    useRef<(e?: FormEvent<HTMLFormElement> | undefined) => void>();

  const handleSubmit = (values: UserAuthBodyRequest) => {
    setIsLoading(true)
    userAuth(values)
      .then(() => setAuthAction(true))
      .catch(() => {
        setAuthAction(false)
      })
      .finally(() => {
        setIsLoading(false)
        setError(null)
      })

  };

  return (
    <Box
      title={t("auth.title")}
      description={t("auth.description")}
      styled={{ width: "90%", height: "70%" }}
      actions={{
        submitTitle: t("auth.submit"),
        submitFunction: () => submitRef.current && submitRef.current(),
        isDisabledSubmit: isLoading
      }}
    >
      <Formik onSubmit={handleSubmit} {...{ initialValues }}>
        {({ handleSubmit, handleChange }: FormikProps<UserAuthBodyRequest>) => {
          submitRef.current = handleSubmit;

          return (
            <Styled.AuthWrapper>
              <TextField fullWidth label={t('auth.login')} name="login" onChange={handleChange} variant="standard" />
              <TextField
                label={t('auth.password')}
                name="password"
                type="password"
                onChange={handleChange}
                variant="standard"
                fullWidth
              />
              {isLoading && <CircularProgress />}
              {error && JSON.stringify(error, null, 4)}
            </Styled.AuthWrapper>
          );
        }}
      </Formik>
    </Box>
  );
};
