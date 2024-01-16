import { getMock } from "./get";

import { METHOD } from "../../index.types";

import type { MockData } from "./index.types";

export const mockData: Record<METHOD, MockData> = {
  [METHOD.GET]: getMock,
  [METHOD.PATCH]: {},
  [METHOD.POST]: {},
};
