import { DELAY_RESPONSE_MOCK } from "shared/constants/project";

export const withMock = <T>(data: T): Promise<T> => {
  return new Promise((res) =>
    setTimeout(() => {
      res(data);
    }, DELAY_RESPONSE_MOCK)
  );
};
