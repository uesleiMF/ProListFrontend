const Api = {
  apiUrl: 'https://prolistbackend1.onrender.com/produtos',

  fetchGetAll: async () => {
    const response = await fetch(Api.apiUrl);
    if (!response.ok) throw new Error('Erro ao buscar produtos');
    return await response.json();
  },

  fetchGetById: async (id) => {
    const response = await fetch(`${Api.apiUrl}/${id}`);
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Produto não encontrado');
    }
    return await response.json(); // retorna JSON já
  },

  fetchPost: async (data) => {
    const response = await fetch(`${Api.apiUrl}/add`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  fetchPut: async (produto, id) => {
    const response = await fetch(`${Api.apiUrl}/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto)
    });
    return await response.json();
  },

  fetchDelete: async (id) => {
    const response = await fetch(`${Api.apiUrl}/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  }
};

export default Api;
