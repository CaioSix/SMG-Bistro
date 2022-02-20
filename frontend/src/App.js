import React  from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages"
import Produtos from "./pages/Produtos/Produto.jsx"
import NewProduto from "./pages/NovoProduto/NewProduto.jsx"
import Contato from "./pages/Contato/Contato.jsx"

import "./App.css";


function App() {


  return (
    <div className="grid">
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<>Página não encontrada</>} />
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/newproduto" element={<NewProduto/>}/>
          <Route path="/contato" element={<Contato/>} /> 

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
