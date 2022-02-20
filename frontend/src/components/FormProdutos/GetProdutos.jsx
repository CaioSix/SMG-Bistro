import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { busca } from '../../api/api'

import Delete from './DeleteProdutos'


const ListaProdutos = ({ url }) => {


const [Produtos, setProdutos] = useState([])


useEffect(() => {
    busca(url, setProdutos )

},[])


    return(
        <section className="posts container" > 
            { 
            Produtos.map((post) => (
                
                <article > 
                    <table className="tabela" key={post.id}>
                    <thead>
                        <tr>
                            <th className="tabela__coluna--p"> {post.nome} </th>
                            <th clclassNameass="tabela__coluna--g"> {post.descricao}</th>
                            <th clclassNameass="tabela__coluna--g"> N: {post.id}</th>
                        </tr>
                    </thead>
                        <tbody data-tabela>
                            <Delete />
                        </tbody>
                    </table>
                </article>
                
            ))
            }
        </section>
    )
}

export default ListaProdutos