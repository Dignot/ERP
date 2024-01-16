import { adminMock, GET_USER_PATH } from "../../../../user";
import { MockData } from "../index.types";

export const getMock: MockData = {
  [GET_USER_PATH]: {
    response: "adminSuccess",
    responses: {
      adminSuccess: {
        success: adminMock,
      },
      adminError: {
        error: {
          status: 401,
          message: "user not found",
        },
      },
    },
  },
};
