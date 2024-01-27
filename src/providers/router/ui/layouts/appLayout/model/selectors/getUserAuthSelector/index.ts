import { userReducer } from "providers/store";

export const getUserAuthSelector = () => userReducer((state) => state.isAuth);
