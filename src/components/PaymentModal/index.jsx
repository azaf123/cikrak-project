import React from 'react'
import cross from "../../assets/cross.png";
import Logo from "../../assets/logo2.png";
import gopay from "../../assets/gopay.png";
import bca from "../../assets/bca.png";
import cash from "../../assets/cash.png";

export const PaymentModal = ({ open, onClose }) => {
  return (
    <div aria-hidden="true" class="overflow-y-auto overflow-x-hidden mx-auto mt-[48px] fixed top-0 right-0 left-0 z-50 block p-6 rounded-lg shadow-lg bg-white w-[60rem]">
    <div>
            <div class="form-group mb-6">
                <div class="flex justify-between items-center">
                    <img src={Logo} alt="logo" className="h-12" />
                    <img class="w-4 h-4" src={cross} alt="" onClick={onClose}/>
                </div>
            </div>
    <div class="flex justify-between items-center">

          <div>
                <div class="flex justify-between items-center form-group mb-6">
                <p>Total payment</p>
                  <span class="text-lightprimary mr-9 "> IDR 10.000</span>
                </div>
                <div class="flex justify-between items-center form-group-inline mb-6">
                <p>Order ID</p>
                  <span class="text-lightprimary mr-9"> pckup001231</span>
                </div>
                <div class="flex">
                    <div class="mr-11">
                      <h1 class="text-mx">Name</h1>
                      <span> Mang Oleh</span>
                    </div>
                    <div>
                      <h1 class="text-mx">Phone Number</h1>
                      <span> 6287716819021</span>
                    </div>
                </div>
                <div class="mt-3">
                <h1 class="text-mx">Full Address</h1>
                <span> jl. Cemp. Biru Selatan I No.10X, Panjer, Kec.
            Denpasar Selatan, Kota Denpasar, Bali 80118</span>
                </div>
          </div>
          <div>
                <div class="flex justify-between items-center w-96 h-20 p-3 bg-slate-200 mb-3 rounded-md">
                <img src={gopay} alt="gopay" className="h-5 ml-1" />
                <h1 class="text-xl mr-5">Gopay</h1>
                </div>
                <div class="flex justify-between w-96 h-20 p-4 bg-slate-200 mb-3 rounded-md">
                <img src={bca} alt="bca" className="h-9 mt-2 ml-1" />
                <h1 class="text-xl mt-3 mr-5">m-BCA</h1>
                </div>
                <div class="flex justify-between w-96 h-20 p-4 bg-slate-200 mb-3 rounded-md">
                <img src={cash} alt="cash" className="h-12 ml-1" />
                <h1 class="text-xl mt-3 mr-5">Cash</h1>
                </div>
          </div>
    </div>
    </div>
</div>
  )
}
