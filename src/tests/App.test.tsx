import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("round start button renders correctly", () => {
    const { getByTestId } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("start-button")).toHaveTextContent("Start Round");
})

it("writes the correct turn of the player", () => {
    const { getByTestId } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("turn-text")).toHaveTextContent("------- Team A's Turn -------");
})

it("modal is open", () => {
    const { getByTestId } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("title-test")).toHaveTextContent("Taboo Game");
})
