import React from 'react';
import Link from 'next/link';

const Button = ({ title = 'Your title' }) => {
  return (
    <Link
      href="#"
      className="rounded-lg-5 flex items-center justify-center bg-primary-500 p-4 text-xl font-bold text-white transition-all hover:bg-primary-600 focus:ring-4 focus:ring-primary-200"
    >
      {title}
    </Link>
  );
};

export default Button;
