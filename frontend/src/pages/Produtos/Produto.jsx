import React from 'react';
import ListaProdutos from '../../components/FormProdutos/GetProdutos.jsx'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Delete from '../../components/FormProdutos/DeleteProdutos'
import './produto.css'

const Produtos = () =>{
    return(
        <main>
            <div>
                <table className="tabela">
                    <thead>
                        <tr>
                            <th className="tabela__coluna--p">Produto</th>
                            <th clclassNameass="tabela__coluna--g">Descrição</th>
                            <th className="tabela__coluna--m tabela__alinhamento--direita"><Link to="/editarproduto">Editar Produto</Link></th>
                            <th className="tabela__coluna--m tabela__alinhamento--direita"><Link to="/newproduto">Novo Produto</Link></th>
                            <th className="tabela__coluna--m tabela__alinhamento--direita"><Delete /></th>
                            
                        </tr>
                    </thead>
                    
                </table>
                <ListaProdutos url={'/produtos'} />
                
                
            </div>
        </main>
    )
}



export default Produtos