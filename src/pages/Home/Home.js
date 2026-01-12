import React from 'react';
import ListProdut from '../../components/structure/ListProd';

const Home = () => {
  return (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="container bg-info p-3">
          <div className="nome text-center">
            <h1 className="text-black mb-4">CONHEÇAM NOSSOS PRODUTOS</h1>
            <div className="col-12">
              <ListProdut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
