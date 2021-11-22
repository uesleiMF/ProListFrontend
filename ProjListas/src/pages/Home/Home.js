import React from 'react'
import ListProdut from '../../components/structure/ListProd';


const Home = () => {
  return (
   
     
    <div className="container">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      
      <h1 className="text-center h1">PRODUTOS ALIMENTICIOS</h1>
      <ListProdut/>
    </div>
    </div>
    </div>
    </div>
  
  )
}




export default Home

