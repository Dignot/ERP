import { getUserApi } from "shared/api";
import { adminMock } from "shared/api/user";
import { customRender, screen } from "shared/test/renderTest";

import { Container } from ".";

jest.mock("shared/api", () => ({
  getUserApi: jest.fn(),
}));

const mockGetUserApi = getUserApi as jest.Mock;

describe("Container", () => {
  const user = { name: "user", email: "email" };
  it("done", async () => {
    mockGetUserApi.mockResolvedValue(adminMock);

    customRender(<Container />);

    expect(
      await screen.findByText(
        `User name: ${adminMock.name}, with email: ${adminMock.email}`
      )
    ).toBeDefined();
  });
});
