import React, { useState } from "react";

function Dropdown({
  options,
  selectedOption,
  setSelectedOption,
  isOpen,
  setIsOpen,
}) {
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle dropdown open/close
  };

  const handleOptionClick = (label) => {
    setSelectedOption(label);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="custom-dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        <img
          src={options.find((option) => option.value === selectedOption)?.icon}
          alt=""
        />{" "}
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.label)}
            >
              {option?.icon && <span className="icon">{option.icon}</span>}
              {option?.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
