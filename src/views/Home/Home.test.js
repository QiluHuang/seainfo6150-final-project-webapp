import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home.jsx";

describe("Home tests", () => {
    it("renders the home component correctly", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
    });
});