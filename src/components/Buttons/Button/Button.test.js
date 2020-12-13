import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button.jsx";

const text = "Add";

describe("Button tests", () => {
    it("renders the Button component correctly", () => {
    const { container } = render(<Button buttonText={text} />);
    expect(container).toMatchSnapshot();
    });
});