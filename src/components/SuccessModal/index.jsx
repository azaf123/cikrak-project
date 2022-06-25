import React from 'react'
import cross from "../../assets/cross.png";
import success from "../../assets/success.png";

export const SuccessModal = ({ open, onClose }) => {
  return (
    <div aria-hidden="true" class="overflow-y-auto overflow-x-hidden mx-auto mt-[208px] fixed top-0 right-0 left-0 z-50 block p-6 rounded-lg shadow-lg bg-white w-[40rem]">
    <div>
      <div class="flex justify-between items-center">
        <img class="w-4 h-4" src={cross} alt="" onClick={onClose}/>
      </div>
          <div>
                <p class="text-center mb-4">Congratulations</p>
                    <img src={success} alt="logo" className="h-48 mb-6 ml-auto mr-auto" />
                <h1 class="text-mx text-center">Your transaction has been successfully made, please check the history for the latest updates</h1>
                <div class="flex-auto">
        <div class="flex justify-center mt-4">
          <button class="h-10 w-44 rounded-full bg-lightprimary text-white">Go to history</button>
        </div>
      </div>
          </div>
    </div>
</div>
  )
}
