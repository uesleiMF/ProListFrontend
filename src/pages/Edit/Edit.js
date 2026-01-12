import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [produto, setProduto] = useState({
    titulo: '',
    descricao: '',
    prioridade: 'media',
    status: 'pendente',
    capa: '',
    data: '',
    prazo: ''
  });

  const [erro, setErro] = useState('');

  useEffect(() => {
    getProdutoById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProdutoById = async () => {
    try {
      const data = await Api.fetchGetById(id); // já retorna JSON
      setProduto({
        ...data,
        prazo: data.prazo ? data.prazo.split('T')[0] : '',
        data: data.data ? data.data.split('T')[0] : ''
      });
    } catch (err) {
      console.error(err.message);
      setErro(err.message);
    }
  };

  const handleFieldsChange = (evento) => {
    setProduto({
      ...produto,
      [evento.target.name]: evento.target.value
    });
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    try {
      const data = await Api.fetchPut(produto, id); // já retorna JSON
      if (data.error) {
        alert(data.error);
      } else {
        alert(data.message);
        navigate(`/view/${id}`);
      }
    } catch (err) {
      console.error(err.message);
      alert('Erro ao atualizar produto');
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
      <div className="card mt-4">
        <div className="card-title">
          <h3 className="mx-3 my-3">Edição do Produto</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <label htmlFor="titulo">Título:</label>
                <input
                  id="titulo"
                  type="text"
                  className="form-control"
                  name="titulo"
                  value={produto.titulo}
                  onChange={handleFieldsChange}
                  required
                />
              </div>
              <div className="col-4">
                <label htmlFor="descricao">Descrição:</label>
                <input
                  id="descricao"
                  type="text"
                  className="form-control"
                  name="descricao"
                  value={produto.descricao}
                  onChange={handleFieldsChange}
                  required
                />
              </div>
              <div className="col-4">
                <label htmlFor="prioridade">Prioridade:</label>
                <select
                  id="prioridade"
                  className="form-control"
                  name="prioridade"
                  value={produto.prioridade}
                  onChange={handleFieldsChange}
                >
                  <option value="baixa">Baixa</option>
                  <option value="media">Média</option>
                  <option value="alta">Alta</option>
                </select>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-4">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  className="form-control"
                  name="status"
                  value={produto.status}
                  onChange={handleFieldsChange}
                >
                  <option value="pendente">Pendente</option>
                  <option value="em_andamento">Em andamento</option>
                  <option value="concluido">Concluído</option>
                </select>
              </div>
              <div className="col-4">
                <label htmlFor="capa">Link da imagem:</label>
                <input
                  id="capa"
                  type="text"
                  className="form-control"
                  name="capa"
                  value={produto.capa}
                  onChange={handleFieldsChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="prazo">Validade:</label>
                <input
                  id="prazo"
                  type="date"
                  className="form-control"
                  name="prazo"
                  value={produto.prazo}
                  onChange={handleFieldsChange}
                />
              </div>
              <div className="col-4 mt-3">
                <label htmlFor="data">Data de Fabricação:</label>
                <input
                  id="data"
                  type="date"
                  className="form-control"
                  name="data"
                  value={produto.data}
                  onChange={handleFieldsChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
