import { ResponseError } from "../../index.types";

export type MockData = Record<string, Mock>;

export type Mock = {
  response: string;
  responses: Responses;
};

export type Responses = Record<string, ResponseMock>;

export type ResponseMock = {
  error?: ResponseError;
  success?: unknown;
};
