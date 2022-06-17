import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";

export default function History() {
  return (
    <>
      <div className="flex">
        <ProfileSidebar />
        <div className="flex-1">
          <div className="text-2xl font-bold mt-20 ml-16 mb-5 text-main-blue">
            History
          </div>

          {/* history area */}
          <div class="max-w-sm lg:max-w-full lg:flex ml-16 mr-10">
            <div class="border border-gray-200 bg-slate-50 rounded p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
