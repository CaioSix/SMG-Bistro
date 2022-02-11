import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



import "./App.css";


function App() {


  return (
    <div className="grid">
      <Header />
      <main>
        <Routes>

          <Route path="*" element={<>Página não encontrada</>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
