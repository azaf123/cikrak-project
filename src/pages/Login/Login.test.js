import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import Login from ".";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"; // add to fix toBeEnabled() not a function issue
import "@testing-library/jest-dom"; // add to fix toBeInDocument() not a function issue

const MockLoginForm = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
  };
  test("inputs should be initially empty", () => {
    render(<MockLoginForm />);
    const emailInput = screen.getByLabelText("Email or Username");
    const passwordInput = screen.getByLabelPassword("Password");
  
    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  test("should be able to type in field", () => {
    render(<MockLoginForm />);
    const passwordInputElement = screen.getByLabelText("Old Password");
    userEvent.type(passwordInputElement, "test");
    expect(passwordInputElement.value).toBe("test");
  });