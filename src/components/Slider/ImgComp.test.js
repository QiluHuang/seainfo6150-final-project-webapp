import React from "react";
import { render } from "@testing-library/react";
import ImgComp from "./ImgComp.jsx";
import img1 from '../../img/homepage_images/barbecue-pork-fried-rice.jpg';


describe("ImgComp tests", () => {
    it("renders the ImgComp component correctly", () => {
    const { container } = render(<ImgComp src={img1} />);
    expect(container).toMatchSnapshot();
    });
});