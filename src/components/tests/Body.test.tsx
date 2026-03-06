import React from "react";
import { render, screen } from "@testing-library/react";
import Body from "../Body";

test("renders welcome message in header", () => {
  render(<Body />);
  const headerElement = screen.getByText(/Body/i);
  expect(headerElement).toBeInTheDocument();
});
