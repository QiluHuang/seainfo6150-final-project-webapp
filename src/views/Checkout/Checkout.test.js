import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Checkout from "./Checkout.jsx";

describe("Checkout tests", () => {
    it("renders the Checkout component correctly", () => {

    const { container } = render(<Router><Checkout /></Router>);
    expect(container).toMatchSnapshot();
    });
});