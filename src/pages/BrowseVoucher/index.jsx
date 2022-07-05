import React from 'react';
import Card from '../../components/Reedem/CardVoucher';
import Points from '../../components/Reedem/CardPoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Voucher = () => {
  return (
    <div>
      <a href="/redeem">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="back text-sky-500 fa-2x mx-2 float-left "
        />
      </a>
      <Points />
      <Card />
    </div>
  );
};
export default Voucher;
