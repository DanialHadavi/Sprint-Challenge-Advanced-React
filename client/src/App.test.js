import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  render(<App />);
});
test("toggle loads dark mode", () => {
  const { getByTestId } = render(<App />);
  getByTestId("toggle-element");
});

test("Get homepage title", () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup Players/i);
});
