import React, { useState, useEffect } from "react";
// components
import ProfileSidebar from "../../components/ProfileSidebar";
import InputField from "../../components/InputField";
import BlueButton from "../../components/BlueButton";
// third-party
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../redux/userSlice";

function ChangePassword(props) {
  const [newPwd, setNewPwd] = useState("");
  const [samePwd, setSamePwd] = useState(true);
  const [success, setSuccess] = useState(false); // stores password change success / not
  const [value, setValue] = useState(); // to reset input fields
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (success) {
      console.log(userData.password);
      alert("Password Succesfully Changed!");
    } else if (!samePwd) {
      alert("Not same password");
    } else {
      console.log(userData.password);
      alert("Wrong Old Password");
    }
    console.log("Check:", userData);
    setValue("");
  };

  return (
    <>
      <div className="flex">
        <ProfileSidebar />
        <div className="flex-1">
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
                  value={value}
                  onChange={(e) => {
                    if (e.target.value === userData.password) {
                      setSuccess(true);
                    }
                    console.log(e.target.value);
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
                  value={value}
                  onChange={(e) => {
                    setNewPwd(e.target.value);
                    console.log(newPwd);
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
                  value={value}
                  onChange={(e) => {
                    if (e.target.value === newPwd && success) {
                      dispatch(updatePassword(newPwd));
                    }
                    if (e.target.value !== newPwd) {
                      setSamePwd(false);
                    }
                  }}
                />
                {/* i want this to be hidden when field is empty */}
                {/* {!samePwd && (
                  <p class="text-red-500 text-xs italic">
                    Password is not the same
                  </p>
                )} */}
              </div>
            </div>
            <div className="float-right">
              <BlueButton btnText="Change Password" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
