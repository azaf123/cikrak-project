import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import ChangePassword from ".";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"; // add to fix toBeEnabled() not a function issue
import "@testing-library/jest-dom"; // add to fix toBeInDocument() not a function issue

const MockPasswordForm = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ChangePassword />
      </BrowserRouter>
    </Provider>
  );
};


test("should be able to type in field", () => {
  render(<MockPasswordForm />);
  const passwordInputElement = screen.getByLabelText("Old Password");
  userEvent.type(passwordInputElement, "test");
  expect(passwordInputElement.value).toBe("test");
});

test("button should be enabled after filling all fields", () => {
  render(<MockPasswordForm />);

  const oldPwdInput = screen.getByLabelText("Old Password");
  const newPwdInput = screen.getByLabelText("New Password");
  const confirmNewPwdInput = screen.getByLabelText("Confirm New Password");

  userEvent.type(oldPwdInput, "oldpassword");
  userEvent.type(newPwdInput, "newpassword");
  userEvent.type(confirmNewPwdInput, "newpassword");

  expect(screen.getByRole("button", { name: "Change Password" })).toBeEnabled();
});

test("button should be disabled if fields are empty", () => {
  render(<MockPasswordForm />);

  const oldPwdInput = screen.getByLabelText("Old Password");
  const newPwdInput = screen.getByLabelText("New Password");
  const confirmNewPwdInput = screen.getByLabelText("Confirm New Password");

  // ignore console error bug; not related to test
  userEvent.type(oldPwdInput, "");
  userEvent.type(newPwdInput, "");
  userEvent.type(confirmNewPwdInput, "");

  expect(
    screen.getByRole("button", { name: "Change Password" })
  ).toBeDisabled();
});

