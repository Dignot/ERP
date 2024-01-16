import React, { ReactElement } from "react";

import { render } from "@testing-library/react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const customRender = (ui: ReactElement) =>
  render(ui, { wrapper: AllTheProviders });

export * from "@testing-library/react";

export { customRender };
