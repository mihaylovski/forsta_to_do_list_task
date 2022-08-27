import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("TodoApp", () => {
  it("renders initial todos", () => {
    render(<App />);

    expect(screen.getByText("Buy milk")).toBeDefined();
    const buyMilkTodo = screen.getByTestId(`todo0`);
    expect(buyMilkTodo).toHaveTextContent("Buy milk");

    expect(screen.getByText("Buy milk")).toBeDefined();
    const buyMBreadTodo = screen.getByTestId(`todo1`);
    expect(buyMBreadTodo).toHaveTextContent("Buy bread");

    expect(screen.getByText("Buy milk")).toBeDefined();
    const buyPanAndJamTodo = screen.getByTestId(`todo2`);
    expect(buyPanAndJamTodo).toHaveTextContent("Buy pankakes with jam");
  });
});
