import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for better assertions
import Button from "./Button";

describe("Button Component", () => {
  test("renders the button with correct text and class", () => {
    render(<Button openModal={jest.fn()} />);

    const button = screen.getByRole("button", { name: /open modal/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("openButton");
    expect(button).toHaveAttribute("id", "openButton");
  });

  test("calls openModal when clicked", () => {
    const openModalMock = jest.fn();
    render(<Button openModal={openModalMock} />);

    const button = screen.getByRole("button", { name: /open modal/i });
    fireEvent.click(button);
    expect(openModalMock).toHaveBeenCalledTimes(1);
  });
});