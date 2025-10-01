// Ponto de entrada do React: monta a aplicação no DOM
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // estilos globais

const container = document.getElementById('root');
const root = createRoot(container);

// Renderiza a aplicação com verificações extras em modo dev
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
