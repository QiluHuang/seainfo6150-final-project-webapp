import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu.jsx";

describe("Menu tests", () => {
    it("renders the menu component correctly", () => {
    const { container } = render(<Menu />);
    expect(container).toMatchSnapshot();
    });
});