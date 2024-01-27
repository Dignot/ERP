import { create } from "zustand";

import type { InitialState } from "./index.types";

export const userReducer = create<InitialState>()(() => ({ isAuth: false }));
