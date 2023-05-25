import { render } from "@testing-library/react";
import React from "react";

import { Header } from "@shared/ui";

describe("shared/ui/Header", () => {
	it("should render without props", () => {
		const { container } = render(<Header>header</Header>);

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass("header");
	});

	it("should render with className", () => {
		const { container } = render(<Header className="test">header</Header>);

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass("test");
	});
});
