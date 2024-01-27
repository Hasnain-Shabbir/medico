import React from 'react';

const IconButton = ({ title = '', outlined = true, icon, type = 'button' }) => {
  return (
    <button className="flex items-center justify-center rounded-lg border border-white p-5 text-xl font-bold text-white transition-all hover:bg-white hover:text-primary-500">
      <span className="pr-4">{icon}</span>
      {title}
    </button>
  );
};

export default IconButton;
