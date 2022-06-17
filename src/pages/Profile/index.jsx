import React from "react";
import BlueButton from "../../components/BlueButton";
import ProfileSidebar from "../../components/ProfileSidebar";

export default function Profile() {
  // TODO: change width of input area
  return (
    <>
      <div className="flex">
        <ProfileSidebar />
        <div className="flex-1">
          <div className="text-2xl font-bold mt-20 ml-16 text-main-blue">
            Profile
          </div>

          {/* profile form area */}
          <div className="flex">
            <div className="grid grid-cols-5 mt-10 ml-16 mr-5 gap-4">
              <div className="col-span-2 mt-1">
                <label>Name</label>
              </div>
              <div className="col-span-2">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                  id="username"
                  type="text"
                  value="Jane Doe"
                ></input>
              </div>

              <div className="col-span-2 mt-1">
                <label>Username</label>
              </div>
              <div className="col-span-2">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                  id="username"
                  type="text"
                  value="janedoe18"
                ></input>
              </div>

              <div className="col-span-2 mt-1">
                <label>Address</label>
              </div>
              <div className="col-span-3">
                <textarea
                  id="about"
                  name="about"
                  rows={5}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                  value="Jl. Surya Sumantri No. 56, Kec. Sukajadi, Pasteur, Kota Bandung, Jawa Barat, 40161"
                />
              </div>

              <div className="col-span-2 mt-1">
                <label>Email</label>
              </div>
              <div className="col-span-2">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                  id="username"
                  type="text"
                  value="janedoe18@gmail.com"
                ></input>
              </div>

              <div className="col-span-2 mt-1">
                <label>Phone</label>
              </div>
              <div className="col-span-2">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-none"
                  id="username"
                  type="text"
                  value="0811223911038"
                ></input>
              </div>

              <div className="col-span-4"></div>
              <div className="mt-14">
                <BlueButton btnText="Edit Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
