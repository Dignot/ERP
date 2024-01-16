import { METHOD } from "../../index.types";
import { mockData } from "../config";
import { emptyMock } from "../config/emptyMock";

export function getResponseWithMock<R = unknown>(
  url: string,
  method: METHOD
): Promise<R> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const mockResponse = mockData[method][url];

      if (!mockResponse) return rej(emptyMock);

      const { response, responses } = mockResponse;
      const { error, success } = responses[response];

      if (error) return rej(error);
      if (success) return res(success as R);

      return rej(emptyMock);
    }, 10000);
  });
}
