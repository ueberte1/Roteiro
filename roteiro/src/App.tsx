import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrigido aqui
import HomePage from './pages/home.page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Adicionei um comentário para o roteiro abaixo */}
        {/* Roteiro: Introdução ao React 9 */}
      </Routes>
    </Router>
  );
};

export default App;
