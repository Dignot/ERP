import { userReducer } from "providers/store";

export const getUserIsAuthSelector = () => userReducer((state) => state.isAuth);
