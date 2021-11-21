import React, { useState, useEffect } from 'react'
import Card from '../Card';

const ListProd = () => {
    const [produtos, setProdutos] = useState([]);
   useEffect(() => {
    getProdutos();
  }, [])

  
  const getProdutos = async () => {
    const request = await fetch('http://localhost:3001/produtos')
    const data = await request.json();
      setProdutos(data);
  }


  return (
    <div class="card-deck">
  <div class="card bg-info">
    <div class="card-body text-center"/>
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
      { }
      {produtos.map((produto) => (
        <Card data={produto} key={produto._id}/>
      ))}
    </div>
    </div>
    </div>
  )
}

export default ListProd
