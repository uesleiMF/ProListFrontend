import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/shared/Header/Header';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import View from './pages/View/View';
import Edit from './pages/Edit/Edit';
import Inicio from './pages/Inicio/Inicio';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho fixo em todas as páginas */}
      <Header />

      {/* Rotas principais */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </div>
  );
}

export default App;
