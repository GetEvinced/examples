import { render } from "@testing-library/react";
import EvincedUT from "@evinced/unit-tester";
import Alert from "./Alert";

describe("Alert Accessibility Test", () => {
  it("should have no accessibility failures", async () => {
    // Should you opt to use your own component or window.alert, the logic is the same
    render(
      <Alert id="my-alert" message="This is an alert message!" type="warning" />
    );

    const results = await EvincedUT.analyzeAlert(
      { id: "my-alert" },
      {
        userEventOptions: { delay: 10 },
      }
    );

    expect(results).toHaveNoFailures();
  });
});
