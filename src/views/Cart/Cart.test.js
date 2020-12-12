import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "./Cart.jsx";

describe("Cart tests", () => {
    it("renders the cart component correctly", () => {
    const { container } = render(<Router><Cart /></Router>);
    expect(container).toMatchSnapshot();
    });
});