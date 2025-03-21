import { render } from "@testing-library/react";
import EvincedUT from "@evinced/unit-tester";
import Alert from "./Alert";
import { describe, it, expect } from "vitest";

describe("Alert Accessibility Test", () => {
  it("should have no accessibility failures", async () => {
    render(
      <Alert id="my-alert" message="This is an alert message!" type="warning" />
    );

    const results = await EvincedUT.analyzeAlert(
      { id: "my-alert" },
      {
        userEventOptions: { delay: 10 },
      }
    );

    expect(results.length).toBe(2);
  });
});
