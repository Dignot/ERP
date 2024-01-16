import { ResponseError } from "../../index.types";

export const emptyMock: ResponseError = {
  status: 404,
  message: "Mock not found",
};
