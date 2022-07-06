import React from 'react';
import Card from '../../components/Reedem/CardVoucher';
import Points from '../../components/Reedem/CardPoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Voucher = () => {
  return (
    <div className='py-10'>
      <a href="/redeem">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="back text-sky-500 fa-2x mx-5 float-left "
        />
      </a>
      <h4  className=" text-2xl mx-20  font-bold text-main-blue">Browse Vouchers</h4>
      <Points />
      <Card />
    </div>
  );
};
export default Voucher;
