import React from 'react';

// Cada célula do tabuleiro
export default function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}