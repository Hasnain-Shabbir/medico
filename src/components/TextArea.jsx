import React from 'react';

const TextArea = ({
  id,
  label = 'Label',
  value,
  onChange,
  placeholder = 'Enter your placeholder',
  styles = '',
  height,
}) => {
  return (
    <div className={`flex w-full flex-col ${styles}`}>
      <label
        htmlFor={id}
        className={`flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-white p-3 py-3 transition-all focus-within:border-primary-300 focus-within:outline-primary-300 ${styles}`}
      >
        <div className="relative w-full">
          <span
            className={
              value
                ? 'absolute -top-2.5 left-0 text-xs text-gray-500 opacity-100 transition-all'
                : 'absolute top-2 -z-10 overflow-hidden opacity-0 transition-all'
            }
          >
            {label}
          </span>
          <textarea
            id={id}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
            className={`placeholder:text-c-gray-400 h-[${height}px] w-full resize-none text-sm outline-none transition-all placeholder:text-sm`}
          />
        </div>
      </label>
    </div>
  );
};

export default TextArea;
