import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import History from ".";
import HistoryCard from "../../components/HistoryCard";
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

const MockHistoryCard = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HistoryCard title="title" date="date" text="text" points="points" />
      </BrowserRouter>
    </Provider>
  );
};

jest.mock("../../components/HistoryCard", () => () => {
  return <mock-card data-testid="history-card" />;
});

test("should render cards", () => {
  render(<MockHistory />);
  expect(screen.queryAllByTestId("history-card")).toBeCalled();
});
