export enum METHOD {
  GET = "get",
  POST = "post",
  PATCH = "patch",
}

export type ResponseError = {
  status: number;
  message: string;
};
