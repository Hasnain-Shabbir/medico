import React from 'react';
import Link from 'next/link';

const Button = ({ title = 'Your title', styles = '', type = 'button' }) => {
  return type === 'button' ? (
    <button
      className={`flex items-center justify-center rounded-lg-5 bg-primary-500 p-4 text-xl font-bold text-white transition-all hover:bg-primary-600 focus:ring-4 focus:ring-primary-200 ${styles}`}
    >
      {title}
    </button>
  ) : (
    <Link
      href="#"
      className={`flex items-center justify-center rounded-lg-5 bg-primary-500 p-4 text-xl font-bold text-white transition-all hover:bg-primary-600 focus:ring-4 focus:ring-primary-200 ${styles}`}
    >
      {title}
    </Link>
  );
};

export default Button;
