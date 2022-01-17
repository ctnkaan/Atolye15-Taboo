import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardPlaceholder from "../components/CardPlaceholder";


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CardPlaceholder />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it("renders the correct color", () => {
    const { getByTestId } = render(<CardPlaceholder />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("cardPH-div")).toHaveStyle("background-color: transparent");
})

it("has the correct test", () => {
    const { getByTestId } = render(<CardPlaceholder />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("cardPH-h2")).toHaveTextContent("Card Goes Here");
})

//check to see if it has the right width
it("has the correct width", () => {
    const { getByTestId } = render(<CardPlaceholder />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("cardPH-div")).toHaveStyle("width: 25%");
})