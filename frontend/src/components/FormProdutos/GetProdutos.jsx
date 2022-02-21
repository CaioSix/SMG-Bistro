import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { busca } from '../../api/api'

// import Delete from './DeleteProdutos'

import './styles.module.css'

const ListaProdutos = ({ url }) => {


const [Produtos, setProdutos] = useState([])


useEffect(() => {
    busca(url, setProdutos )

},[])


    return(
        <section className="" > 
            { 
            Produtos.map((post) => (
                
                <article > 
                    <table className="tabela" key={post.id}>
                   
                            <th className="tabela__coluna--p item">{post.nome}</th>
                            <th className="tabela__coluna--g item">{post.descricao}</th>
                            <th className="tabela__coluna--g id">{post.id}</th>
                    </table>
                            {/* <Delete /> */}
                </article>
                
            ))
            }
        </section>
    )
}

export default ListaProdutos