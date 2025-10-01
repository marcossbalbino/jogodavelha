import React from 'react';
import Square from './Square';

// Tabuleiro 3x3
export default function Board({ squares, onClick, winningLine }) {
  return (
    <div className="ttt-board">
      {squares.map((value, idx) => (
        <Square
          key={idx}
          value={value}
          onClick={() => onClick(idx)}
          isWinning={winningLine && winningLine.includes(idx)}
        />
      ))}
    </div>
  );
}
