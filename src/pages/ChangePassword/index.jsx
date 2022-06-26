import React, { useState } from "react";
// components
import BlueButton from "../../components/BlueButton";
// third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../redux/userSlice";

function ChangePassword(props) {
  // TODO: eye icon for password
  const [success, setSuccess] = useState(false); // to check if old password entered is correct
  const [newPwd, setNewPwd] = useState(""); // to store new password to check for samePwd state
  const [samePwd, setSamePwd] = useState(true); // to check if new password fields are the same
  const [showPwd1, setShowPwd1] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [showPwd3, setShowPwd3] = useState(false);

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
      <form onSubmit={handleSubmit} className="w-9/12">
        <div className="flex flex-col md:flex-row mt-10 ml-16 mr-5">
          <div className="mt-1 mr-5 mb-2 w-60">
            <label>Old Password</label>
          </div>
          <div className="w-60 relative">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none relative"
              type={showPwd1 ? `text` : `password`}
              onChange={(e) => {
                if (e.target.value === userData.password) {
                  setSuccess(true);
                }
              }}
            />
            <div
              onClick={() => {
                setShowPwd1(!showPwd1);
              }}
              className="flex align-middle cursor-pointer absolute top-2 right-4"
            >
              {showPwd1 ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
          <div className="mt-1 mr-5 mb-2 w-60">
            <label>New Password</label>
          </div>
          <div className="w-60 relative">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none relative"
              type={showPwd2 ? `text` : `password`}
              onChange={(e) => {
                setNewPwd(e.target.value);
              }}
            />
            <div
              onClick={() => {
                setShowPwd2(!showPwd2);
              }}
              className="flex align-middle cursor-pointer absolute top-2 right-4"
            >
              {showPwd2 ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
          <div className="mt-1 mr-5 mb-2 w-60">
            <label>Confirm New Password</label>
          </div>

          <div className="w-60 relative">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none relative"
              type={showPwd3 ? `text` : `password`}
              onChange={(e) => {
                if (e.target.value === newPwd && success) {
                  setSamePwd(true);
                  dispatch(updatePassword(newPwd));
                } else {
                  setSamePwd(false);
                }
              }}
            />

            <div
              onClick={() => {
                setShowPwd3(!showPwd3);
              }}
              className="flex align-middle cursor-pointer absolute top-2 right-4"
            >
              {showPwd3 ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
          </div>
        </div>
        {/* TODO: change breakpoint @lg ? */}
        <div className="mt-8 mr-auto float-right">
          <BlueButton btnText="Change Password" />
        </div>
      </form>
    </>
  );
}

export default ChangePassword;
