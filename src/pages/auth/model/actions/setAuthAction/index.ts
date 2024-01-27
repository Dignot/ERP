import { userReducer } from "providers/store";

export const setAuthAction = (status: boolean) =>
  userReducer.setState(() => ({ isAuth: status }));
