import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Main } from "./Main";

describe("Main", () => {
  test("renders main element", async () => {
    const screen = await render(<Main />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
