import React from "react";
import { render } from "@testing-library/react";
import DishImageLarge from "./DishImageLarge.jsx";

const imageURL = "https://d.newsweek.com/en/full/1552244/variety-chinese-food.jpg";
const title = "soup";

describe("DishImageLarge tests", () => {
    it("renders the DishImageLarge component correctly", () => {
    const { container } = render(<DishImageLarge url={imageURL} title={title} />);
    expect(container).toMatchSnapshot();
    });
});