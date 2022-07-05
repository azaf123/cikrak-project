import React, { useState } from 'react';
import cross from '../../assets/cross.png';
import { Link } from 'react-router-dom';

export const FormModal = ({ open, onClose, props }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [typeWaste, setTypeWaste] = useState([]);
  const [organic, setOragnic] = useState(true);
  const [paper, setPaper] = useState(true);
  const [plastic, setPlastic] = useState(true);
  const [styrofoam, setStyrofoam] = useState(true);
  const [metalcans, setMetalCans] = useState(true);
  const [address, setAddress] = useState('');
  const [agree, setAgree] = useState(false);

  let result = [];
  function generateTypeWaste() {
    if (!organic) {
      result.push('organic');
    }
    if (!paper) {
      result.push('paper');
    }
    if (!styrofoam) {
      result.push('styrofoam');
    }
    if (!plastic) {
      result.push('plastic');
    }
    if (!metalcans) {
      result.push('metalcans');
    }
    console.log(result);
    return result;
  }

  const isFilled = () => {
    return name && email && phone && address && typeWaste && agree;
  };

  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, '');
    setNumber(onlyDigits);
  };

  if (!open) return null;
  return (
    <div className="mt-4 flex justify-center items-center fixed inset-0 z-10 backdrop-opacity-90 backdrop-blur-3xl ">
      <div
        aria-hidden="true"
        className="w-9/12 overflow-y-auto overflow-x-hidden mx-auto mt-[48px] fixed top-0 right-0 left-0 z-50 block p-6 rounded-lg shadow-lg bg-white"
      >
        <form>
          <div className="form-group">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl">Pick-up form</h1>
              <button>
                <img className="w-4 h-4" src={cross} alt="" onClick={onClose} />
              </button>
            </div>
            <p className="pt-4">
              Name<span className="text-red-600"> *</span>
            </p>
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lightprimary focus:outline-none"
              id="exampleInput7"
              placeholder="Jane Doe"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <p>
              Email<span className="text-red-600"> *</span>
            </p>
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lightprimary focus:outline-none"
              id="exampleInput8"
              placeholder="janedoe@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <p>
              Phone Number<span className="text-red-600 max-w-[50%]"> *</span>
            </p>
            <input
              type="tel"
              pattern="\d*"
              value={number}
              maxLength="14"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lightprimary focus:outline-none"
              id="exampleInput8"
              placeholder="081342536442"
              onChange={(e) => {
                checkInput(e);
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="form-check form-check-inline mt-3">
            <p>
              Type Waste<span className="text-red-600"> *</span>
            </p>
            <h1 className="text-xs">
              Check off the waste you want to dispose of
            </h1>
            <input
              type="checkbox"
              value="organic"
              id="flexCheckDefault"
              onChange={(e) => {
                setOragnic(!e.target.checked);
                console.log(organic);
              }}
            />
            <label
              className="form-check-label inline-block text-gray-800 px-2"
              for="inlineCheckbox1"
            >
              Organic
            </label>
            <input
              type="checkbox"
              value="paper"
              id="flexCheckDefault"
              onChange={(e) => {
                setPaper(!e.target.checked);
                console.log(paper);
              }}
            />
            <label
              className="form-check-label inline-block text-gray-800 px-2"
              for="inlineCheckbox1"
            >
              Paper
            </label>
            <input
              type="checkbox"
              value="styrofoam"
              id="flexCheckDefault"
              onChange={(e) => {
                setStyrofoam(!e.target.checked);
                console.log(styrofoam);
              }}
            />
            <label
              className="form-check-label inline-block text-gray-800 px-2"
              for="inlineCheckbox1"
            >
              Styrofoam
            </label>
            <input
              type="checkbox"
              value="plastic"
              id="flexCheckDefault"
              onChange={(e) => {
                setPlastic(!e.target.checked);
                console.log(plastic);
              }}
            />
            <label
              className="form-check-label inline-block text-gray-800 px-2"
              for="inlineCheckbox1"
            >
              Plastic
            </label>
            <input
              type="checkbox"
              value="metalcans"
              id="flexCheckDefault"
              onChange={(e) => {
                setMetalCans(!e.target.checked);
                console.log(metalcans);
              }}
            />
            <label
              className="form-check-label inline-block text-gray-800 px-2"
              for="inlineCheckbox1"
            >
              Metal Cans
            </label>
          </div>
          <div className="form-group mt-2">
            <p className="pt-3">
              Full Address<span className="text-red-600"> *</span>
            </p>
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lightprimary focus:outline-none"
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Jl. Cemp. Biru Selatan I No.10X, Panjer"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="form-group form-check text-center mb-6">
            <input
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => {
                setAgree(e.target.checked);
              }}
            />
            <label
              className="form-check-label inline-block text-gray-800 pl-2"
              for="exampleCheck87"
            >
              I agree to the Term of Service and Privacy Policy.
            </label>
            {!agree ? (
              <p className="text-red-700">Must be checked first. *</p>
            ) : (
              ''
            )}
          </div>
          <div className="flex justify-end">
            <Link
              to="/payment"
              state={{
                name: name,
                email: email,
                phone: phone,
                address: address,
                typeWaste: generateTypeWaste(),
              }}
            >
              <button
                type="submit"
                className="w-90 px-6 py-2.5 bg-lightprimary text-white font-medium text-xs leading-tight uppercase rounded
              shadow-md hover:bg-greenprimary hover:shadow-lg focus:bg-greenprimary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-greenprimary active:shadow-lg transition duration-150 ease-in-out"
                disabled={!isFilled()}
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
