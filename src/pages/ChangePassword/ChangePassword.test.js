import { Provider } from "react-redux";
import store from "../../redux/store";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
test("inputs should be initially empty", () => {
  render(<MockPasswordForm />);
  const oldPwdInput = screen.getByLabelText("Old Password");
  const newPwdInput = screen.getByLabelText("New Password");
  const confirmNewPwdInput = screen.getByLabelText("Confirm New Password");

  expect(oldPwdInput.value).toBe("");
  expect(newPwdInput.value).toBe("");
  expect(confirmNewPwdInput.value).toBe("");
});

test("should be able to type in field", () => {
  render(<MockPasswordForm />);
  const passwordInputElement = screen.getByLabelText("Old Password");
  userEvent.type(passwordInputElement, "test");
  expect(passwordInputElement.value).toBe("test");
});

test("button should be enabled after filling all fields", async () => {
  render(<MockPasswordForm />);

  const oldPwdInput = screen.getByLabelText("Old Password");
  const newPwdInput = screen.getByLabelText("New Password");
  const confirmNewPwdInput = screen.getByLabelText("Confirm New Password");

  userEvent.type(oldPwdInput, "oldpassword");
  userEvent.type(newPwdInput, "newpassword");
  userEvent.type(confirmNewPwdInput, "newpassword");

  expect(screen.getByRole("button", { name: "Change Password" })).toBeEnabled();
});

test("should prompt toast notification after submitting form",  () => {
  render(<MockPasswordForm />);

  const oldPwdInput = screen.getByLabelText("Old Password");
  const newPwdInput = screen.getByLabelText("New Password");
  const confirmNewPwdInput = screen.getByLabelText("Confirm New Password");

  userEvent.type(oldPwdInput, "oldpassword");
  userEvent.type(newPwdInput, "newpassword");
  userEvent.type(confirmNewPwdInput, "newpassword");

  const submitButton = screen.getByRole("button", { name: "Change Password" });
  userEvent.click(submitButton);
  expect(screen.getByTestId("toast")).toBeInTheDocument();
});
