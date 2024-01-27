import { http } from "shared/api/axios";
import { IS_MOCK } from "shared/constants/project";
import { UserAuthBodyRequest } from "./index.types";
import { withMock } from "shared/api/mock/withMock";

export const userAuth = (body: UserAuthBodyRequest) => {
  if (IS_MOCK) return withMock<undefined>(undefined);

  return http.post<undefined, UserAuthBodyRequest>("/auth", body);
};
