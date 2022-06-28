import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import ChangePassword from ".";

test("inputs should be initially empty", () => {
  render(
    <Provider store={store}>
      <ChangePassword />
    </Provider>
  );
  const oldPwdInput = screen.getByLabelText("Old Password");
  const newPwdInput = screen.getByLabelText("New Password");
  const confirmNewPwdInput = screen.getByLabelText("Confirm New Password");

  expect(oldPwdInput.value).toBe("");
  expect(newPwdInput.value).toBe("");
  expect(confirmNewPwdInput.value).toBe("");
});
