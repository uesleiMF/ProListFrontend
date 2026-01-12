import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container">
        {/* Logo ou Página Inicial */}
        <Link className="navbar-brand text-white fw-bold" to="/inicio">
          Página Inicial
        </Link>

        {/* Botão para menu responsivo */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Itens do menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Produtos Cadastrados
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cadastro">
                Cadastrar Produto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
