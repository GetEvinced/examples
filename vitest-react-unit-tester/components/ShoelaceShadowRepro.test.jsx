import { render, screen } from "@testing-library/react";
import EvincedUT from "@evinced/unit-tester";
import { describe, it, expect } from "vitest";
import ShoelaceRepro from "./ShoelaceRepro";

describe("Tab List component accessibility test", () => {
  it("analyzes the tab list using EvincedUT", async () => {
    const sampleTabs = [
      { label: "Tab 1", content: "Content for Tab 1" },
      { label: "Tab 2", content: "Content for Tab 2" },
      { label: "Tab 3", content: "Content for Tab 3" },
    ];

    render(<ShoelaceRepro tabs={sampleTabs} />);

    const tabListElement = screen.getByTestId("tab-list");
    const results = await EvincedUT.analyzeTabList(tabListElement);

    expect(results.length).toBe(11);

    console.log("Evinced Test Results =", results);
  });
});
``;
