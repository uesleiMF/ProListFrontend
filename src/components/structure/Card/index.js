import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data: produto }) => {
  return (
    <div className="col mb-4">
      <Link to={`/view/${produto._id}`} className="text-decoration-none text-dark">
        <div className="card h-100 shadow-sm">
          {/* Imagem com placeholder caso não exista */}
          <img
            src={produto.capa || 'https://via.placeholder.com/400x250?text=Sem+Capa'}
            alt={produto.titulo || 'Produto'}
            className="card-img-top"
            style={{ objectFit: 'cover', height: '200px' }}
          />
          <div className="card-body">
            <h5 className="card-title text-truncate">{produto.titulo || 'Sem título'}</h5>
            {produto.tipo && (
              <span className="badge bg-primary">{produto.tipo}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
