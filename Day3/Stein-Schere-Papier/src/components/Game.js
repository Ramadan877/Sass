import React, { useState } from 'react';

const choices = ['Stein', 'Schere', 'Papier'];

const Game = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('Unentschieden!');
    } else if (
      (user === 'Stein' && computer === 'Schere') ||
      (user === 'Schere' && computer === 'Papier') ||
      (user === 'Papier' && computer === 'Stein')
    ) {
      setResult('Du hast gewonnen!');
    } else {
      setResult('Computer gewinnt!');
    }
  };

  return (
    <div className="game-container">
      <h1>Stein Schere Papier</h1>
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="result">
        {userChoice && <p>Deine Wahl: {userChoice}</p>}
        {computerChoice && <p>Computer Wahl: {computerChoice}</p>}
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default Game;
