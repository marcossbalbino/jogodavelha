import React, { useState, useEffect } from 'react';
import Board from './Board';

// Função que verifica se há vencedor
function calculateWinner(board) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8], // linhas
    [0,3,6],[1,4,7],[2,5,8], // colunas
    [0,4,8],[2,4,6]          // diagonais
  ];

  for (let line of lines) {
    const [a,b,c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }

  if (board.every(Boolean)) return { winner: 'TIE', line: null };

  return null;
}

export default function TicTacToe() {
  const emptyBoard = Array(9).fill(null);

  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winnerInfo, setWinnerInfo] = useState(null);
  const [scores, setScores] = useState({ X:0, O:0, Ties:0 });

  useEffect(() => {
    const raw = localStorage.getItem('ttt-scores');
    if (raw) setScores(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('ttt-scores', JSON.stringify(scores));
  }, [scores]);

  function handleClick(idx) {
    if (board[idx] || winnerInfo) return;

    const newBoard = board.slice();
    newBoard[idx] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setWinnerInfo(winner);
      if (winner.winner === 'X') setScores(prev => ({...prev, X: prev.X + 1}));
      if (winner.winner === 'O') setScores(prev => ({...prev, O: prev.O + 1}));
      if (winner.winner === 'TIE') setScores(prev => ({...prev, Ties: prev.Ties + 1}));
    }

    setXIsNext(!xIsNext);
  }

  function resetBoard() {
    setBoard(emptyBoard);
    setXIsNext(true);
    setWinnerInfo(null);
  }

  function resetScores() {
    setScores({ X:0, O:0, Ties:0 });
    resetBoard();
  }

  return (
    <div className="tic-tac-toe-container">
      <Board squares={board} onClick={handleClick} winningLine={winnerInfo?.line} />
      
      {winnerInfo && winnerInfo.winner !== 'TIE' && (
        <h2 className="winner-message">Vencedor: {winnerInfo.winner}</h2>
      )}
      {winnerInfo && winnerInfo.winner === 'TIE' && (
        <h2 className="tie-message">Empate!</h2>
      )}

      <div className="buttons-container">
        <button className="reset-button" onClick={resetBoard}>
          Reiniciar Jogo
        </button>
        <button className="reset-scores-button" onClick={resetScores}>
          Reset Placar
        </button>
      </div>

      <div className="scores-container">
        <strong>Placar:</strong>
        <div className="scores-display">
          <span className="score-x">X: {scores.X}</span>
          <span className="score-o">O: {scores.O}</span>
          <span className="score-ties">Empates: {scores.Ties}</span>
        </div>
      </div>
    </div>
  );
}