import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error.jsx";

describe("Error tests", () => {
    it("renders the Error component correctly", () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
    });
});