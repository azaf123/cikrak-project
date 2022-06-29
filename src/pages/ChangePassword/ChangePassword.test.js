import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import ChangePassword from ".";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Toast from "../../components/Toast";

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
// const mockToast = require("../../components/Toast");
// test("should prompt error toast", () => {
//   const spyToast = jest.spyOn(mockToast, "show")
//   render(<MockPasswordForm />);

//   const submitBtnElement = screen.getByRole("button", {
//     name: "Change Password",
//   });
//   userEvent.click(submitBtnElement);
//   expect(spyToast).toHaveBeenCalledTimes(1);
// });

jest.mock("../../components/Toast");
test("should prompt alert", () => {
  render(<MockPasswordForm />);

  const submitBtnElement = screen.getByRole("button", {
    name: "Change Password",
  });

  userEvent.click(submitBtnElement);
  expect(<Toast/>).toBeInTheDocument();
});
// test("should prompt alert", () => {

//   window.alert = jest.fn();
//   const mockAlert = jest.spyOn(window, "alert");
  
//   render(<MockPasswordForm />);

//   const submitBtnElement = screen.getByRole("button", {
//     name: "Change Password",
//   });

//   userEvent.click(submitBtnElement);
//   expect(mockAlert).toHaveBeenCalledTimes(1);
// });
