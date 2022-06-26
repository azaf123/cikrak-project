import React, { useRef, useState } from 'react';
import cross from '../../assets/cross.png';
import { Link } from 'react-router-dom';

export const FormModal = ({ open, onClose, props }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [typeWaste, setTypeWaste] = useState([]);
  const [address, setAddress] = useState('');
  const [agree, setAgree] = useState(false);

  const isFilled = () => {
    return name && email && phone && address && typeWaste && agree;
  };

  if (!open) return null;
  return (
    <div
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden mx-auto mt-[48px] fixed top-0 right-0 left-0 z-50 block p-6 rounded-lg shadow-lg bg-white w-[60rem]"
    >
      <form>
        <div class="form-group mb-6">
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-2xl">Pick-up form</h1>
            <img class="w-4 h-4" src={cross} alt="" onClick={onClose} />
          </div>
          <p class="pt-5">
            Name<span class="text-red-600"> *</span>
          </p>
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lightprimary focus:outline-none"
            id="exampleInput7"
            placeholder="Jane Doe"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="form-group mb-6">
          <p>
            Email<span class="text-red-600"> *</span>
          </p>
          <input
            type="email"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lightprimary focus:outline-none"
            id="exampleInput8"
            placeholder="janedoe@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-group mb-6">
          <p>
            Phone Number<span class="text-red-600 max-w-[50%]"> *</span>
          </p>
          <input
            type="text"
            pattern="\d*"
            maxLength={14}
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lightprimary focus:outline-none"
            id="exampleInput8"
            placeholder="081342536442"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div class="form-check form-check-inline">
          <p>
            Type Waste<span class="text-red-600"> *</span>
          </p>
          <h1 class="text-xs">Check off the waste you want to dispose of</h1>
          <input
            type="checkbox"
            value="organic"
            id="flexCheckDefault"
            onChange={(e) => {
              setTypeWaste((oldArray) => [...oldArray, e.target.value]);
            }}
          />
          <label
            class="form-check-label inline-block text-gray-800 px-2"
            for="inlineCheckbox1"
          >
            Organic
          </label>
          <input
            type="checkbox"
            value="paper"
            id="flexCheckDefault"
            onChange={(e) => {
              setTypeWaste((oldArray) => [...oldArray, e.target.value]);
            }}
          />
          <label
            class="form-check-label inline-block text-gray-800 px-2"
            for="inlineCheckbox1"
          >
            Paper
          </label>
          <input
            type="checkbox"
            value="styrofoam"
            id="flexCheckDefault"
            onChange={(e) => {
              setTypeWaste((oldArray) => [...oldArray, e.target.value]);
            }}
          />
          <label
            class="form-check-label inline-block text-gray-800 px-2"
            for="inlineCheckbox1"
          >
            Styrofoam
          </label>
          <input
            type="checkbox"
            value="plastic"
            id="flexCheckDefault"
            onChange={(e) => {
              setTypeWaste((oldArray) => [...oldArray, e.target.value]);
            }}
          />
          <label
            class="form-check-label inline-block text-gray-800 px-2"
            for="inlineCheckbox1"
          >
            Plastic
          </label>
          <input
            type="checkbox"
            value="metalcans"
            id="flexCheckDefault"
            onChange={(e) => {
              setTypeWaste((oldArray) => [...oldArray, e.target.value]);
            }}
          />
          <label
            class="form-check-label inline-block text-gray-800 px-2"
            for="inlineCheckbox1"
          >
            Metal Cans
          </label>
        </div>
        <div class="form-group mb-6">
          <p class="pt-5">
            Full Address<span class="text-red-600"> *</span>
          </p>
          <textarea
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lightprimary focus:outline-none"
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="jl. Cemp. Biru Selatan I No.10X, Panjer, "
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></textarea>
        </div>
        <div class="form-group form-check text-center mb-6">
          <input
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) => {
              setAgree(e.target.checked);
            }}
          />
          <label
            class="form-check-label inline-block text-gray-800 pl-2"
            for="exampleCheck87"
          >
            I agree with terms and conditions
          </label>
          {!agree ? <p className="text-red-700">Harus dicentang</p> : ''}
        </div>
        <div class="flex justify-end">
          <Link
            to="/payment"
            state={{
              name: name,
              email: email,
              phone: phone,
              address: address,
              typeWaste: typeWaste,
            }}
          >
            <button
              type="submit"
              class=" w-90 px-6 py-2.5 bg-lightprimary text-white font-medium text-xs leading-tight uppercase rounded
        shadow-md hover:bg-greenprimary hover:shadow-lg focus:bg-greenprimary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-greenprimary active:shadow-lg transition duration-150 ease-in-out"
              disabled={!isFilled()}
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
