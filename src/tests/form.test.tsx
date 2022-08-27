import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

it("Test form submit and validation", () => {
  const { getByPlaceholderText } = render(<App />);
  fireEvent.click(getByPlaceholderText(/Add Task./i));
});
