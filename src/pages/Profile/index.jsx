import React, { useState, useRef, useEffect } from "react";
// components
import BlueButton from "../../components/BlueButton";
import NavBar from "../../components/Navbar";
import BlueOutlineButton from "../../components/BlueOutlineButton";
// third-party
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice";
import ProfileSidebar from "../../components/ProfileSidebar";
import Loader from "../../components/Loader";
import useLoader from "../../utils/useLoader";

export default function Profile() {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [edit, isEdit] = useState(false); // to check if form is in edit mode
  const [update, updateData] = useState(false); // to check if update data is confirmed (clicking save changes returns true, cancel returns false)
  let currentUserData = useRef(userData);

  useEffect(() => {
    if (update) {
      currentUserData.current = userData;
    }
  }, [update]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch(updateUser({ ...userData, [name]: value }));
  };

  return (
    <>
      <NavBar />
      <div className="flex">
        <ProfileSidebar />
        <div>
          <div className="text-2xl font-bold mt-20 ml-16 pb-4 text-main-blue">
            {edit && "Edit"} Profile
          </div>
          {edit && (
            <p className="font-light text-main-blue ml-16 pb-1">
              Select the fields you'd like to edit
            </p>
          )}

          {/* profile form area */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
              <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                <label>Name</label>
              </div>
              <div className="w-64">
                {edit ? (
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    name="name"
                    type="text"
                    value={userData.name}
                    onChange={handleChange}
                    readOnly={!edit}
                  />
                ) : (
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    name="name"
                    type="text"
                    value={userData.name}
                    readOnly={edit}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
              <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                <label>Username</label>
              </div>
              <div className="w-64">
                {edit ? (
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    name="username"
                    type="text"
                    value={userData.username}
                    onChange={handleChange}
                    readOnly={!edit}
                  />
                ) : (
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    name="username"
                    type="text"
                    value={userData.username}
                    readOnly={edit}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
              <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                <label>Address</label>
              </div>
              <div className="w-70 md:w-96 md:mr-10 duration-500">
                {edit ? (
                  <textarea
                    name="address"
                    rows={5}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    value={userData.address}
                    onChange={handleChange}
                  />
                ) : (
                  <textarea
                    name="address"
                    rows={5}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    value={userData.address}
                    readOnly
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
              <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                <label>Email</label>
              </div>
              <div className="w-64">
                {edit ? (
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    name="email"
                    type="text"
                    value={userData.email}
                    onChange={handleChange}
                    readOnly={!edit}
                  />
                ) : (
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    name="email"
                    type="text"
                    value={userData.email}
                    readOnly={edit}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
              <div className="mt-1 mr-5 w-60 font-medium">
                <label>Phone</label>
              </div>
              <div className="w-64">
                {edit ? (
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none "
                    name="phone"
                    type="text"
                    value={userData.phone}
                    onChange={handleChange}
                    readOnly={!edit}
                  />
                ) : (
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    name="phone"
                    type="text"
                    value={userData.phone}
                    readOnly={edit}
                  />
                )}
              </div>
            </div>

            <div className="flex mt-16 pb-8 float-right">
              {edit && (
                <div className="pr-5">
                  <BlueOutlineButton
                    onClick={() => {
                      isEdit(false);
                      updateData(false);
                      dispatch(updateUser(currentUserData.current));
                    }}
                    btnText="Cancel"
                  />
                </div>
              )}
              <div className="md:pr-5">
                <BlueButton
                  onClick={() => {
                    isEdit(!edit);
                    edit ? updateData(true) : updateData(false);
                  }}
                  btnText={`${edit ? "Save Changes" : "Edit Profile"}`}
                />
              </div>
            </div>
          </form>
        </div>
        {/* <Loader/> */}
      </div>
    </>
  );
}
