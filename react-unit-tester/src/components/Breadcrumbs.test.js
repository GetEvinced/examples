import React from "react";
import { render, screen } from "@testing-library/react";
import { Breadcrumbs } from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders breadcrumbs with items", () => {
    const items = [
      { text: "Home", linkProps: { toPage: "/" } },
      { text: "About", linkProps: { toPage: "/about" } },
    ];

    render(<Breadcrumbs source="test-source" items={items} />);

    const breadcrumbs = screen.getByTestId("breadcrumbs");
    expect(breadcrumbs).toBeInTheDocument();

    items.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });
  });
});
