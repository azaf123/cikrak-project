import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";
import BlueButton from "../../components/BlueButton";

function ChangePassword(props) {
  return (
    <>
      <div className="flex">
        <ProfileSidebar />
        <div className="flex-1">
          <div className="text-2xl font-bold mt-20 ml-16  text-main-blue">
            Change Password
          </div>

          {/* change password form area */}
          <form>
            <div className="flex mt-10 ml-16 mr-5">
              <div className="mt-1 mr-5 w-48">
                <label>Old Password</label>
              </div>
              <div className="">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                  id="oldPwd"
                  type="text"
                ></input>
              </div>
            </div>

            <div className="flex mt-5 ml-16 mr-5">
              <div className="mt-1 mr-5 w-48">
                <label>New Password</label>
              </div>
              <div className="">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                  id="oldPwd"
                  type="text"
                ></input>
              </div>
            </div>

            <div className="flex mt-5 ml-16 mr-5">
              <div className="mt-1 mr-5 w-48">
                <label>Confirm New Password</label>
              </div>
              <div className="">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                  id="oldPwd"
                  type="text"
                ></input>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
