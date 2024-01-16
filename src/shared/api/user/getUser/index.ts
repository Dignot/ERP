import { http } from "../../axios";
import { getResponseWithMock, METHOD } from "../../axios";
import { withMock } from "../../constants";
import { GET_USER_PATH } from "../path";

import type { User } from "../index.types";

export const getUserApi = () => {
  if (withMock) return getResponseWithMock<User>(GET_USER_PATH, METHOD.GET);

  return http.get<User>(GET_USER_PATH);
};
