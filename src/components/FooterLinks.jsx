'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';

const FooterLinks = ({ title, linksData }) => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <div
      className={`${
        isLinksOpen ? 'space-y-5' : ''
      } text-lg font-medium md:space-y-5`}
      onClick={() => setIsLinksOpen(!isLinksOpen)}
    >
      <h4 className="flex items-center justify-between uppercase">
        {title}{' '}
        <span className="text-2xl md:hidden">
          <MdKeyboardArrowDown />
        </span>
      </h4>
      <ul
        className={`${
          isLinksOpen ? 'space-y-2' : 'm-0 h-0 overflow-hidden opacity-0'
        } transition-all duration-300 md:h-auto md:space-y-2 md:overflow-visible md:opacity-100`}
      >
        {linksData.map((data) => (
          <li key={data.id}>
            <Link
              href={data.path}
              className="py-1 transition-all hover:text-gray-800"
            >
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
