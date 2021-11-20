import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-primary w-100">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/Cadastro">
          Pagina de cadastro
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                cadastro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cadastro">
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Footer