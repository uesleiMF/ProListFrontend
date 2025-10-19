import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success w-100">
      <div className="container">
        <Link className="navbar-brand" to="/Inicio">
          Pagina Inicial
        </Link>
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
               Produtos Cadastrado
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro">
                 Cadastrado de Produtos
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
