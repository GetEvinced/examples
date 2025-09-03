import { render, screen } from "@testing-library/react";
import ModalTest from "./ReproSainsburys";
import EvincedUT from "@evinced/unit-tester";

it("should pass Evinced tests", async () => {
  render(<ModalTest />);

  const results = await EvincedUT.analyzeModal("#open-button");
  expect(results).toHaveNoFailures();
});
