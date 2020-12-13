import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./About.jsx";

describe("About tests", () => {
    it("renders the About component correctly", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
    });
});