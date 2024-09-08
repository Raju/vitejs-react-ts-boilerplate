import { render, screen } from "@testing-library/react";
import React from "react";
import Sample from "./Sample";

describe("User", () => {
	test("renders heading", () => {
		render(<Sample />);
		expect(screen.getByText("Users")).toBeInTheDocument();
	});
});
