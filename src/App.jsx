import React from 'react';
import TicTacToe from './components/TicTacToe/TicTacToe';
import './ttt.css';

function App() {
  return (
    <div className="app-container">
      <div className="game-wrapper">
        <h1 className="app-title">JOGO DA VELHA</h1>
        <TicTacToe />
      </div>
    </div>
  );
}

export default App;