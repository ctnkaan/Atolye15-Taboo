import React from "react";
import ReactDOM from "react-dom";
import PlayerScoreBoard from "../components/PlayerScoreBoard";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PlayerScoreBoard teamName={"Team Test"} score={0} turn={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it("renders the correct score", () => {
    const { getByTestId } = render(<PlayerScoreBoard teamName={"Team Test"} score={10} turn={false} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("playerSB-h2")).toHaveTextContent("10");
})

it("renders the correct team name", () => {
    const { getByTestId } = render(<PlayerScoreBoard teamName={"Team Test"} score={10} turn={false} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("playerSB-h1")).toHaveTextContent("Team Test");
})


it("renders the correct color", () => {
    const { getByTestId } = render(<PlayerScoreBoard teamName={"Team Test"} score={10} turn={false} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("playerSB-card")).toHaveStyle("background-color: white");
})

it("renders the correct color when it's their turn", () => {
    const { getByTestId } = render(<PlayerScoreBoard teamName={"Team B"} score={10} turn={true} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("playerSB-card")).toHaveStyle("background-color: green");
})

