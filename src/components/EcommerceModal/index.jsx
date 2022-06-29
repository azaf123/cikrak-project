import React from 'react';
import cross from '../../assets/cross.png';

export const EcommerceModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div class="flex justify-center items-center fixed inset-0 z-10 backdrop-opacity-90 backdrop-blur-3xl">
      <div
        aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden mx-auto mt-[308px] fixed top-0 right-0 left-0 z-50 block p-6 rounded-lg shadow-lg bg-white w-[60rem] h-[10rem]"
      >
        <div>
          <div class="flex justify-end">
            <img class="w-4 h-4" src={cross} alt="" onClick={onClose} />
          </div>
          <div>
            <h1 class="text-mx text-center mt-8 text-2xl">Coming Soon ✨</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
