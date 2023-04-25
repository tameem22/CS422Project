import React, { useState } from 'react';
import './DropdownMenu.css'

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('plan1');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const getDisplayText = (optionValue) => {
    // Extract the number from the selected option value (e.g., "option1" => "1")
    const number = optionValue.replace(/\D/g, '');
    return number;
  };

  return (
    <div className='dropdown-container'>
      <div className='selector-container'>
          <span><small>Select a plan</small></span>
          <select value={selectedOption} onChange={handleSelect}>
            <option value="" disabled>Select a plan</option>
            <option value="plan1">Plan 1</option>
            <option value="plan2">Plan 2</option>
            <option value="plan3">Plan 3</option>
          </select>
      </div>
      {selectedOption && <h1>User's Trip #{getDisplayText(selectedOption)}</h1>}
    </div>
  );
};

export default DropdownMenu;