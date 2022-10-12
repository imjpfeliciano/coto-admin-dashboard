import ButtonDropdown from "./ButtonDropdown";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const MockButtonArgs = {
  label: "Test",
  iconName: "science",
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ],
  onItemSelect: jest.fn(),
};

describe("ButtonDropdown", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render", () => {
    const { container } = render(<ButtonDropdown {...MockButtonArgs} />);
    expect(container).toMatchSnapshot();
  });

  it("should render with label", async () => {
    render(<ButtonDropdown {...MockButtonArgs} />);
    expect(screen.findByText("Test")).toBeTruthy();
  });

  it("should render with icon", async () => {
    render(<ButtonDropdown {...MockButtonArgs} />);
    // FIXME: Check why .toBeInTheDocument() is not working
    expect(screen.getByTestId("material-icon")).toBeTruthy();
  });

  it("should open the options menu", async () => {
    render(<ButtonDropdown {...MockButtonArgs} />);
    const button = screen.getByTestId("button-dropdown");
    await userEvent.click(button);
    expect(screen.getByTestId("dropdown-menu")).toBeTruthy();
  });

  it("should close the options menu", async () => {
    render(<ButtonDropdown {...MockButtonArgs} />);
    const button = screen.getByTestId("button-dropdown");
    await userEvent.click(button);
    await userEvent.click(button);
    expect(screen.queryByTestId("dropdown-menu")).not.toBeTruthy();
  });

  it("should call onItemSelect when an option is clicked", async () => {
    render(<ButtonDropdown {...MockButtonArgs} />);
    const button = screen.getByTestId("button-dropdown");
    await userEvent.click(button);
    const option = screen.getByText("Option 1");

    await userEvent.click(option);
    expect(MockButtonArgs.onItemSelect).toHaveBeenCalledWith("option1");
  });
});
