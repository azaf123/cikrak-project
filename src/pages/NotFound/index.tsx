import React from 'react';
// import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../lib/customHooks';

const NotFound: React.FC = () => {
  useDocumentTitle('Not Found - Ciputify');

  return (
      <img src="https://www.scdn.co/i/404/record.svg" alt="" />  
  )
}

export default NotFound;
