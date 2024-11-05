import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Game from './components/Game';
import ModeToggle from './components/ModeToggle';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'Dark Mode' : 'Light Mode';

  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return(
    <div className='App'>
      <ModeToggle toggleMode= {toggleMode} isDarkMode={isDarkMode}/>
      <Game/>
    </div>
  );
};

export default App;