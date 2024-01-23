import React from 'react';

const CheckupTabSelector = ({ tabsData, handleActiveTab, children }) => {
  return (
    <>
      <div className="flex flex-col gap-3 rounded-xl bg-white p-6 sm:flex-row md:mx-auto md:w-max">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleActiveTab(tab.id)}
            className={`flex items-center justify-center rounded-lg-5 ${
              tab.active === true
                ? 'bg-primary-500 text-white hover:bg-primary-600'
                : 'bg-white text-black hover:bg-gray-100'
            }  p-4 text-xl font-bold transition-all `}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {children}
    </>
  );
};

export default CheckupTabSelector;
