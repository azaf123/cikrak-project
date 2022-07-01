import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import History from ".";
import HistoryCard from "../../components/HistoryCard";
import "@testing-library/jest-dom/extend-expect"; // add to fix toBeEnabled() not a function issue
import "@testing-library/jest-dom"; // add to fix toBeInDocument() not a function issue
import { render, screen } from "@testing-library/react";

const MockHistory = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <History />
      </BrowserRouter>
    </Provider>
  );
};

test("should render history cards", () => {
  jest.mock("HistoryCard");
  const mockHistoryCard = require("../../components/HistoryCard");
  render(<MockHistory />);
  expect(mockHistoryCard).toBeInTheDocument();
});
