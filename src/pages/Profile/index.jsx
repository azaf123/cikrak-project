import React, { useState, useRef } from "react";
// components
import BlueButton from "../../components/BlueButton";
import NavBar from "../../components/Navbar";
import ProfileSidebar from "../../components/ProfileSidebar";
import BlueOutlineButton from "../../components/BlueOutlineButton";
// third-party
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice";

export default function Profile() {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [edit, isEdit] = useState(false);
  const [update, updateData] = useState(false); // use for cancel form; try again in replacement of advanced hooks, make use of update
  let currentUserData = useRef(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className="flex-1">
          <div className="text-2xl font-bold mt-20 ml-16 text-main-blue">
            Profile
          </div>

          {/* profile form area */}
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="grid grid-cols-5 mt-10 ml-16 mr-5 gap-4">
                <div className="col-span-2 mt-1">
                  <label>Name</label>
                </div>
                <div className="col-span-2">
                  {edit ? (
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                      name="name"
                      type="text"
                      value={userData.name}
                      onChange={handleChange}
                    ></input>
                  ) : (
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                      name="name"
                      type="text"
                      value={userData.name}
                      readOnly
                    ></input>
                  )}
                </div>

                <div className="col-span-2 mt-1">
                  <label>Username</label>
                </div>
                <div className="col-span-2">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    name="username"
                    type="text"
                    defaultValue={userData.username}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-span-2 mt-1">
                  <label>Address</label>
                </div>
                <div className="col-span-3">
                  <textarea
                    name="address"
                    rows={5}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    value={userData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-2 mt-1">
                  <label>Email</label>
                </div>
                <div className="col-span-2">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    name="email"
                    type="text"
                    value={userData.email}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-span-2 mt-1">
                  <label>Phone</label>
                </div>
                <div className="col-span-2">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    name="phone"
                    type="text"
                    value={userData.phone}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="col-span-4"></div>
                <div className="flex mt-14">
                  {/* TODO: edit padding */}
                  {edit && (
                    <BlueOutlineButton
                      onClick={() => {
                        isEdit(false);
                        updateData(false);
                        // TODO: returns to first inital value, NOT LAST SAVED!
                        dispatch(updateUser(currentUserData.current));
                      }}
                      btnText="Cancel"
                    />
                  )}
                  <BlueButton
                    onClick={() => {
                      isEdit(!edit);
                      edit ? updateData(true) : updateData(false);
                    }}
                    btnText={`${edit ? "Save Changes" : "Edit Profile"}`}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
