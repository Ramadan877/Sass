import React from 'react';

const ModeToggle = ({ toggleMode, isDarkMode }) => {
  return (
    <button onClick={toggleMode} className="mode-toggle">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ModeToggle;
