import { AxiosError } from "axios";

import type { ResponseError } from "../../index.types";

export const getResponseError = (error: AxiosError): ResponseError => ({
  status: error?.status || 400,
  message: error?.message || "empty error",
});
