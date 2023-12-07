import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ color = 'black', fontSize = '', iconSize = '' }) => {
  return (
    <Link className="flex w-max items-center" href="/">
      <Image
        src={color === 'white' ? '/logo-white.png' : '/logo.png'}
        width={iconSize ? iconSize : 23}
        height={50}
      />
      <h2
        className={`ml-2.5 ${fontSize ? fontSize : 'text-xl'} ${
          color === 'black' ? 'text-black' : 'text-white'
        } font-bold`}
      >
        Medico
      </h2>
    </Link>
  );
};

export default Logo;
