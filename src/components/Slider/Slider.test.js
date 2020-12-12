import React from "react";
import { render } from "@testing-library/react";
import Slider from "./Slider.jsx";

describe("Slider tests", () => {
    it("renders the slider component correctly", () => {
    const { container } = render(<Slider />);
    expect(container).toMatchSnapshot();
    });
});