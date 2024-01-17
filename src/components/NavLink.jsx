import React from 'react';
import Link from 'next/link';

const NavLink = ({ item, pathname }) => {
  return (
    <Link
      href={item.path}
      className={`${
        pathname === item.path ? 'font-bold text-primary-500' : 'font-normal'
      } mx-2 py-2 transition-colors hover:text-primary-500`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
