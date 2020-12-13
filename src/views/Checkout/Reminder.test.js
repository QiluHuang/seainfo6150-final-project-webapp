import React from "react";
import { render } from "@testing-library/react";
import Reminder from "./Reminder.jsx";

describe("Reminder tests", () => {
    it("renders the Reminder component correctly", () => {
    const { container } = render(<Reminder text={"10:30PM"} />);
    expect(container).toMatchSnapshot();
    });
});