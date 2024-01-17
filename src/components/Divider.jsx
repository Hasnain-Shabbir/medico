import React from 'react';

const Divider = ({ paddingVertical }) => {
  return <div className={`${paddingVertical ? paddingVertical : 'py-px'}`} />;
};

export default Divider;
