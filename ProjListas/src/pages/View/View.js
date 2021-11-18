import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Api from '../../api/api';

const View = () => {
  // inicializa o estado musica para poder fazer as alteracoes do dom.
  const [produto, setProduto] = useState({});

  // chama o use effect sem parametro de dependencia (executa uma vez ao renderizar o componente)
  // chamando a funcao getMusicaById
  useEffect(() => {
    getProdutoById();
  }, [])

  // acessa o id no parametro da url;
  const { id } = useParams();
  console.log(id);

  // faz a chamada para a api passando o id como parametro para buscar o objeto da musica (invidual por id)
  const getProdutoById = async () => {
    const request = await Api.fetchGetById(id);
    const produto = await request.json();
    setProduto(produto);
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-6">
          <img src={produto.capa} className="w-100" alt={produto.titulo}/>
        </div>
        <div className="col-6">
          <div className="card my-5">
            <h1 className="text-center my-4"><b>Titulo: </b>{produto.titulo}</h1>
            <h3 className="text-center"><b>Descrição: </b>{produto.descricao}</h3>
            <h4 className="text-center"><b>Prioridade: </b> {produto.prioridade}</h4>
            <h5 className="text-center"><b>Status: </b>{produto.status}</h5>
            <h5 className="text-center"><b>Prazo: </b>{produto.prazo}</h5>
            <h6 className="text-center"><b>Data de Criação: </b>{produto.dataCriacao}</h6>
            <div className="btn-group mt-3 w-100">
              <Link to={`/edit/${produto._id}`} className="btn btn-info">Editar</Link>
              <button className="btn btn-danger">Excluir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
