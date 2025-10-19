import React, { useState, useEffect } from 'react'
import Card from '../Card';

const ListProd = () => {
    const [produtos, setProdutos] = useState([]);
   useEffect(() => {
    getProdutos();
  }, [])

  
  const getProdutos = async () => {
    const request = await fetch('https://prolistbackend-3zb4.onrender.com/produtos')
    const data = await request.json();
      setProdutos(data);
  }


  return (
    <div class="card-deck">
  <div class="card bg-success">
    <div class="card-body text-center "/>
    <div className="row row-cols-1 row-cols-md-4 mt-4  rounded-circle ">
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
