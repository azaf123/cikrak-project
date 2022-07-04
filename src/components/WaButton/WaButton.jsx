import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { classNames } from '../../utils';

export const WaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(true);
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed bottom-2 right-2 z-10">
      <button
        type="button"
        onClick={(event) =>
          window.open(
            'https://wa.me/6287771613615?text=Hi%20Cikrak%20i%20want%20to%20ask.',
            '_blank',
            'noopener, noreferrer'
          )
        }
        className={classNames(
          'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-green-600 transition-opacity hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600'
        )}
      >
        <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
