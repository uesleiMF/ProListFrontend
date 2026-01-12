import React, { useState } from 'react';
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    setErro('');
    setLoading(true);

    const titulo = evento.target.titulo.value.trim();
    const descricao = evento.target.descricao.value.trim();
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const capa = evento.target.capa.value.trim();
    const prazo = evento.target.prazo.value;
    const data = evento.target.data.value;

    // Validação frontend
    if (!titulo || !descricao) {
      setErro('Título e descrição são obrigatórios.');
      setLoading(false);
      return;
    }

    const validPrioridades = ['baixa', 'media', 'alta'];
    const validStatus = ['pendente', 'em_andamento', 'concluido'];

    if (!validPrioridades.includes(prioridade)) {
      setErro('Prioridade inválida.');
      setLoading(false);
      return;
    }

    if (!validStatus.includes(status)) {
      setErro('Status inválido.');
      setLoading(false);
      return;
    }

    const produto = {
      titulo,
      descricao,
      prioridade,
      status,
      capa,
      prazo: prazo || null,
      data: data || null,
    };

    try {
      const result = await Api.fetchPost(produto);

      if (result.error) {
        // Pode ser array ou string
        const mensagemErro = Array.isArray(result.error)
          ? result.error.join(', ')
          : result.error;
        setErro(mensagemErro);
      } else {
        alert('Produto cadastrado com sucesso!');
        navigate('/');
      }
    } catch (err) {
      setErro('Erro no servidor. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="card p-4 bg-warning">
        <h3 className="text-center mb-4">Cadastro de Produtos</h3>

        {erro && <p className="text-danger text-center">{erro}</p>}

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <label htmlFor="titulo">Título:</label>
              <input
                id="titulo"
                name="titulo"
                type="text"
                className="form-control"
                placeholder="Nome do Produto"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="descricao">Descrição:</label>
              <input
                id="descricao"
                name="descricao"
                type="text"
                className="form-control"
                placeholder="Descrição do Produto"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="prioridade">Prioridade:</label>
              <select
                id="prioridade"
                name="prioridade"
                className="form-control"
                defaultValue="media"
                required
              >
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                name="status"
                className="form-control"
                defaultValue="pendente"
                required
              >
                <option value="pendente">Pendente</option>
                <option value="em_andamento">Em andamento</option>
                <option value="concluido">Concluído</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="capa">Capa (URL):</label>
              <input
                id="capa"
                name="capa"
                type="text"
                className="form-control"
                placeholder="URL da capa do produto"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="prazo">Data de Validade:</label>
              <input
                id="prazo"
                name="prazo"
                type="date"
                className="form-control"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="data">Data de Fabricação:</label>
              <input
                id="data"
                name="data"
                type="date"
                className="form-control"
              />
            </div>

            <div className="col-12 d-flex justify-content-around mt-4">
              <button type="submit" className="btn btn-success" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
              <button type="reset" className="btn btn-danger">
                Limpar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
