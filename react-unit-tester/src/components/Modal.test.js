import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";
import EvincedUT from "@evinced/unit-tester";

describe("Modal Component", () => {
  it("renders the open button", async () => {
    render(<Modal />);
    const openButton = screen.getByText("Open Modal");
    expect(openButton).toBeInTheDocument();
  });

  it("opens the modal when the button is clicked", async () => {
    render(<Modal />);
    const openButton = screen.getByText("Open Modal");

    // Ensure modal is not visible initially
    expect(
      screen.queryByText("This is a modal example")
    ).not.toBeInTheDocument();

    // You can ignore this, it is solely for debugging reasons, it will always show an error with the linter
    // screen.debug();

    // Click to open modal
    fireEvent.click(openButton);
    // Now verify text is present on the modal because it is open
    expect(screen.getByText("This is a modal example")).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");

    const results = await EvincedUT.analyzeModal(
      { element: buttonElement },
      { modalLocator: { id: "modal" } }
    );
    expect(results).toHaveNoFailures();
  });

  it("closes the modal when the close button is clicked", () => {
    render(<Modal />);
    const openButton = screen.getByText("Open Modal");

    // Open modal
    fireEvent.click(openButton);
    const closeButton = screen.getByText("Close");

    // Close modal
    fireEvent.click(closeButton);
    // Confirm modal isn't open
    expect(
      screen.queryByText("This is a modal example")
    ).not.toBeInTheDocument();
  });
});
