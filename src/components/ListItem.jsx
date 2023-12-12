import React from 'react';

const ListItem = ({ icon, title, color, styles = '', textStyles = '' }) => {
  return (
    <div
      className={`flex items-center ${
        color === 'white' ? 'text-white' : 'text-black'
      }`}
    >
      <span>{icon}</span>
      <div className="ml-2">
        <p className={`text-lg ${textStyles}`}>{title}</p>
      </div>
    </div>
  );
};

export default ListItem;
