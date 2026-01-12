import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Api from '../../api/api';

const View = () => {
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState('');
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const AbreModal = () => setOpen(true);
  const FechaModal = () => setOpen(false);

  useEffect(() => {
    getProdutoById();
  }, []);

  const getProdutoById = async () => {
    try {
      const produto = await Api.fetchGetById(id);
      setProduto(produto);
    } catch (err) {
      console.error(err.message);
      setErro('Produto não encontrado');
    }
  };

  const handleDelete = async () => {
    try {
      await Api.fetchDelete(id);
      navigate('/');
    } catch (err) {
      alert('Erro ao excluir produto');
    }
  };

  if (erro) {
    return <p className="text-danger text-center mt-5">{erro}</p>;
  }

  if (!produto) {
    return <p className="text-center mt-5">Carregando...</p>;
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-6">
          <img src={produto.capa} className="w-100" alt={produto.titulo} />
        </div>

        <div className="col-6">
          <div className="card my-10 bg-light p-3">
            <h1 className="text-center"><b>Título:</b> {produto.titulo}</h1>
            <h3 className="text-success text-center"><b>Descrição:</b> {produto.descricao}</h3>
            <h4 className="text-danger text-center"><b>Prioridade:</b> {produto.prioridade}</h4>
            <h5 className="text-primary text-center"><b>Status:</b> {produto.status}</h5>
            <h5 className="text-warning text-center"><b>Prazo:</b> {produto.prazo}</h5>
            <h6 className="text-secondary text-center">
              <b>Data de Criação:</b> {new Date(produto.dataCriacao).toLocaleDateString()}
            </h6>

            <div className="btn-group mt-3 w-100">
              <Link to={`/edit/${produto._id}`} className="btn btn-info">Editar</Link>
              <button className="btn btn-danger" onClick={AbreModal}>Excluir</button>
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <h4 className="my-4 text-center">Deseja realmente excluir?</h4>
        <div className="d-flex justify-content-around">
          <button className="btn btn-secondary" onClick={FechaModal}>Não</button>
          <button className="btn btn-danger" onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
  );
};

export default View;
