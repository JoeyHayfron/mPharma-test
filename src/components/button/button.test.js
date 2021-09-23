import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./button";
import "@testing-library/jest-dom";

describe("it should render a button correctly", () => {
  test("it should render a button with the correct text", () => {
    render(<Button>Test</Button>);
  });
});
