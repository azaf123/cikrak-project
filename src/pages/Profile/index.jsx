import React, { useState, useRef, useEffect } from "react";
// components
import BlueButton from "../../components/BlueButton";
import BlueOutlineButton from "../../components/BlueOutlineButton";
import { updateUser } from "../../redux/registerSlice";
import ProfileSidebar from "../../components/ProfileSidebar";
import useLoader from "../../lib/useLoader";
// third-party
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

export default function Profile() {
  const { registerData } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const [edit, isEdit] = useState(false); // to check if form is in edit mode
  const [update, updateData] = useState(false); // to check if update data is confirmed (clicking save changes returns true, cancel returns false)

  const showLoader = useLoader();
  let currentUserData = useRef(registerData);

  useEffect(() => {
    if (update) {
      currentUserData.current = registerData;
    }
  }, [update]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    // TODO: toast suddenly not working
    if (!edit && registerData !== currentUserData.current) {
      console.log("he");
      toast.success("Profile updated!", {
        duration: 2000,
        position: "top-right",
      });
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch(updateUser({ ...registerData, [name]: value }));
  };

  return (
    <>
      {showLoader}
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

          {!edit ? ( // view only profile area
            <div>
              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="w-64">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    type="text"
                    defaultValue={registerData.name}
                    readOnly={edit}
                    disabled
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                  <label htmlFor="username">Username</label>
                </div>
                <div className="w-64">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    id="username"
                    name="username"
                    placeholder="janedoe18"
                    type="text"
                    defaultValue={registerData.username}
                    readOnly={edit}
                    disabled
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                  <label htmlFor="address">Address</label>
                </div>
                <div className="w-70 md:w-96 md:mr-10 duration-500">
                  <textarea
                    id="address"
                    name="address"
                    placeholder="Jl. Cemp. Biru Selatan I No.10X, Panjer, Pemecutan Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali 80118
                    "
                    rows={5}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    defaultValue={registerData.address}
                    readOnly
                    disabled
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="w-64">
                  <input
                    id="email"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    name="email"
                    placeholder="janedoe18@gmail.com"
                    type="text"
                    defaultValue={registerData.email}
                    readOnly={edit}
                    disabled
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 w-60 font-medium">
                  <label htmlFor="phone">Phone</label>
                </div>
                <div className="w-64">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none cursor-not-allowed"
                    id="phone"
                    name="phone"
                    placeholder="081342536442"
                    type="text"
                    defaultValue={registerData.phone}
                    readOnly={edit}
                    disabled
                  />
                </div>
              </div>

              <div className="flex mt-16 pb-8 float-right md:pr-5">
                <BlueButton
                  onClick={() => {
                    isEdit(!edit);
                    updateData(false);
                  }}
                  btnText="Edit Profile"
                />
              </div>
            </div>
          ) : (
            // edit profile form area
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="w-64">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    type="text"
                    value={registerData.name}
                    onChange={handleChange}
                    readOnly={!edit}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                  <label htmlFor="username">Username</label>
                </div>
                <div className="w-64">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    id="username"
                    name="username"
                    placeholder="janedoe18"
                    type="text"
                    value={registerData.username}
                    onChange={handleChange}
                    readOnly={!edit}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                  <label htmlFor="address">Address</label>
                </div>
                <div className="w-70 md:w-96 md:mr-10 duration-500">
                  <textarea
                    id="address"
                    name="address"
                    placeholder="Jl. Cemp. Biru Selatan I No.10X, Panjer, Pemecutan Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali 80118
          "
                    rows={5}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    value={registerData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 mb-2 w-60 font-medium">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="w-64">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                    id="email"
                    name="email"
                    placeholder="janedoe18@gmail.com"
                    type="text"
                    value={registerData.email}
                    onChange={handleChange}
                    readOnly={!edit}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-5 ml-16 mr-5">
                <div className="mt-1 mr-5 w-60 font-medium">
                  <label htmlFor="phone">Phone</label>
                </div>
                <div className="w-64">
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none "
                    id="phone"
                    name="phone"
                    placeholder="081342536442"
                    type="text"
                    value={registerData.phone}
                    onChange={handleChange}
                    readOnly={!edit}
                  />
                </div>
              </div>
              <div className="flex mt-16 pb-8 float-right pr-5">
                <div className="mr-5">
                  <BlueOutlineButton
                    onClick={() => {
                      isEdit(false);
                      updateData(false);
                      dispatch(updateUser(currentUserData.current));
                    }}
                    btnText="Cancel"
                  />
                </div>

                <div className="md:pr-5">
                  <BlueButton
                    onClick={() => {
                      isEdit(!edit);
                      updateData(true);
                    }}
                    btnText="Save Changes"
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <Toaster />
    </>
  );
}
