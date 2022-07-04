import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import Profile from ".";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"; // add to fix toBeEnabled() not a function issue
import "@testing-library/jest-dom"; // add to fix toBeInDocument() not a function issue

const MockProfile = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </Provider>
  );
};

test("field should be readonly before edit mode", () => {
  render(<MockProfile />);
  expect(screen.getByLabelText("Username")).toBeDisabled();
});

test("should be 'save changes' and 'cancel' button when in edit mode", () => {
  render(<MockProfile />);

  const editButton = screen.getByRole("button", { name: "Edit Profile" });
  userEvent.click(editButton);
  const saveChangesButton = screen.getByRole("button", {
    name: "Save Changes",
  });
  const cancelButton = screen.getByRole("button", {
    name: "Cancel",
  });
  expect(saveChangesButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});
