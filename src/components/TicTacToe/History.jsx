import React from 'react';

// Histórico de jogadas
export default function History({ history, jumpTo }) {
  return (
    <div className="history">
      {history.map((step, idx) => {
        const desc = idx === 0 ? 'Início do jogo' : `Jogada #${idx} (${step.player})`;
        return (
          <button key={idx} onClick={() => jumpTo(idx)}>
            {desc}
          </button>
        );
      })}
    </div>
  );
}
