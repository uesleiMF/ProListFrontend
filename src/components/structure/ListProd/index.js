import React, { useState, useEffect } from 'react';
import Card from '../Card';

const ListProd = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    try {
      const response = await fetch('https://prolistbackend1.onrender.com/produtos');
      const data = await response.json();

      if (data.error) {
        setErro(data.error);
      } else {
        setProdutos(data);
      }
    } catch (err) {
      console.error(err);
      setErro('Erro ao buscar produtos');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-5">Carregando produtos...</p>;
  if (erro) return <p className="text-danger text-center mt-5">{erro}</p>;
  if (produtos.length === 0) return <p className="text-center mt-5">Nenhum produto cadastrado</p>;

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {produtos.map((produto) => (
          <Card data={produto} key={produto._id} />
        ))}
      </div>
    </div>
  );
};

export default ListProd;
