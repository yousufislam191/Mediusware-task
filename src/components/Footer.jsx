import React from "react";

const Footer = ({ isChecked, handleCheckboxChange }) => {
  return (
    <div className="fixed bottom-0 bg-white w-full py-3">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="ml-2 font-semibold text-gray-700">Only even</span>
      </label>
    </div>
  );
};

export default Footer;
