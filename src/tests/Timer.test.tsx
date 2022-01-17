import React from "react";
import ReactDOM from "react-dom";
import Timer from "../components/Timer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App"; //importing app to acsess the states

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Timer open={false} turn={false} setTurn={Function} handleClose={Function} />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it("renders the correct color", () => {
    const { getByTestId } = render(<Timer open={false} turn={false} setTurn={Function} handleClose={Function} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("timer-card")).toHaveStyle("background-color: black");
})

it("render the correct number", () => {
    const { getByTestId } = render(<Timer open={false} turn={false} setTurn={Function} handleClose={Function} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("timer-h1")).toHaveTextContent("0");
})

it("render the correct number when turn starts", () => {
    const { getByTestId } = render(<Timer open={true} turn={true} setTurn={Function} handleClose={Function} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("timer-h1")).toHaveTextContent("60");
})