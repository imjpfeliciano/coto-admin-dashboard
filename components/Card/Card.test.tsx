import Card from ".";
import { render } from "@testing-library/react";

describe("Card", () => {
  it("should render", () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });
});
