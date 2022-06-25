import React, { useState } from "react";
// components
import InputField from "../../components/InputField";
import BlueButton from "../../components/BlueButton";
// third-party
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../redux/userSlice";

function ChangePassword(props) {
  // TODO: eye icon for password
  const [success, setSuccess] = useState(false); // to check if old password entered is correct
  const [newPwd, setNewPwd] = useState(""); // to store new password to check for samePwd state
  const [samePwd, setSamePwd] = useState(true); // to check if new password fields are the same

  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (success && samePwd) {
      alert("Password Succesfully Changed!");
    } else if (success && !samePwd) {
      alert("Not same password");
    } else {
      alert("Wrong Old Password");
    }
    console.log("Check:", userData.password);
  };

  return (
    <>
      <div className="text-2xl font-bold mt-20 ml-16  text-main-blue">
        Change Password
      </div>

      {/* change password form area */}
      <form onSubmit={handleSubmit}>
        <div className="flex mt-10 ml-16 mr-5">
          <div className="mt-1 mr-5 w-48">
            <label>Old Password</label>
          </div>
          <div className="">
            <InputField
              name="password"
              type="text"
              onChange={(e) => {
                if (e.target.value === userData.password) {
                  setSuccess(true);
                }
              }}
            />
          </div>
        </div>

        <div className="flex mt-5 ml-16 mr-5">
          <div className="mt-1 mr-5 w-48">
            <label>New Password</label>
          </div>
          <div className="">
            <InputField
              name="password"
              type="text"
              onChange={(e) => {
                setNewPwd(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex mt-5 ml-16 mr-5">
          <div className="mt-1 mr-5 w-48">
            <label>Confirm New Password</label>
          </div>
          <div className="">
            <InputField
              name="password"
              type="text"
              onChange={(e) => {
                if (e.target.value === newPwd && success) {
                  setSamePwd(true);
                  dispatch(updatePassword(newPwd));
                } else {
                  setSamePwd(false);
                }
              }}
            />
          </div>
        </div>
        <div className="float-right">
          <BlueButton btnText="Change Password" />
        </div>
      </form>
    </>
  );
}

export default ChangePassword;