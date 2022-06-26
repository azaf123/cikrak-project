import React from 'react'
import aggree from "../../assets/agreement.png";

export const AgreementModal = ({ open, onClose }) => {
  return (
    <div aria-hidden="true" class="overflow-y-auto overflow-x-hidden mx-auto mt-[208px] fixed top-0 right-0 left-0 z-50 block p-6 rounded-lg shadow-lg bg-white w-[40rem]">
    <div>
      <div class="form-group mb-6">
        <img src={aggree} alt="logo" className="h-48 mb-6 ml-auto mr-auto" />
        <h1 class="text-center">Do you agree with your option ?</h1>
      </div>
      <div class="flex justify-center">
        <button class="h-8 w-28 mr-3 rounded-full bg-red-600 text-white">Cancel</button>
        <button class="h-8 w-28 rounded-full bg-lightprimary text-white">Submit</button>
      </div>
    </div>
</div>
  )
}
