import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CustomInput from "./CustomInput";
import "@testing-library/jest-dom";

describe("it should render a custom input component correctly", () => {
  test("it should change input value when user types", () => {
    render(<CustomInput label="Product" />);
    fireEvent.change(screen.getByTestId("test_customInput"), {
      target: { value: "Par" },
    });
    expect(screen.getByTestId("test_customInput")).toHaveValue("Par");
  });
});
