import React from "react";
import { render } from "@testing-library/react";
import DishImageMedium from "./DishImageMedium.jsx";

const imageURL = "https://d.newsweek.com/en/full/1552244/variety-chinese-food.jpg";
const title = "soup";

describe("DishImageMedium tests", () => {
    it("renders the DishImageMedium component correctly", () => {
    const { container } = render(<DishImageMedium url={imageURL} title={title} />);
    expect(container).toMatchSnapshot();
    });
});