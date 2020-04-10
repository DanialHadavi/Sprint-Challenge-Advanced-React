import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";

test("renders without crashing", () => {
  render(<App />);
});
test("toggle loads dark mode", () => {
  const { getByTestId } = render(<App />);
  getByTestId("toggle-element");
});

test("test for navigationbar title", () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup Players/i);
});
test("test for dark mode button", async () => {
  render(<App />);

  fireEvent.click(document.getElementById("dark"));
});
