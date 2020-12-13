import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo.jsx";

describe("Logo tests", () => {
    it("renders the logo component correctly", () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
    });
});