'use client';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const SelectDropdown = ({ options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    Array.isArray(options) ? options[0] : options,
  );

  const firstItem = Array.isArray(options) ? options[0] : options;

  const handleSelectedItem = (option) => {
    setSelectedItem(option);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={`relative w-full cursor-pointer rounded-md border py-3 transition-all  ${
        isDropdownOpen ? 'border-primary-300' : 'border-gray-300'
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 font-normal`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedItem}
        <span>
          <MdKeyboardArrowDown
            className={`transition-all ${
              isDropdownOpen ? 'rotate-180' : ''
            } text-2xl text-gray-300`}
          />
        </span>
      </div>
      <div
        className={
          isDropdownOpen
            ? `absolute top-[calc(100%+5px)] z-30 h-max w-full overflow-scroll rounded-md border border-gray-300 bg-white`
            : 'hidden'
        }
      >
        <ul>
          {Array.isArray(options) ? (
            options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 transition-all hover:bg-primary-500 hover:text-white"
                onClick={() => handleSelectedItem(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li
              key={options}
              className="px-4 py-2 transition-all hover:bg-primary-500 hover:text-white"
              onClick={() => handleSelectedItem(options)}
            >
              {options}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SelectDropdown;
