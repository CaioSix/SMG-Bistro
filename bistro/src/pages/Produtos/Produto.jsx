import React from 'react';
import './produto.css'

const Produtos = () =>{
    return(
        <main className="produtos-container">
        <table className="tabela">
            <thead>
                <tr>
                    <th className="tabela__coluna--p">Produto</th>
                    <th clclassNameass="tabela__coluna--g">Descrição</th>
                    <th className="tabela__coluna--m tabela__alinhamento--direita"><a href="./cadastra_cliente.html" class="botao-simples botao-simples--adicionar">Novo Produto</a></th>
                </tr>
            </thead>
            <tbody data-tabela>
                
            </tbody>
        </table>
        <div className="modal-container modal--fechado">
            <article className="modal">
                <h2 className="modal__titulo">
                    Excluir
                </h2>
                <button className="modal__fechar">X</button>
                <p className="modal__texto">Deseja excluir essa entrada?</p>
                <div className="modal__botao-container">
                    <button className="modal__botao modal__botao--confirmar">Excluir</button>
                    <button className="modal__botao">Não excluir</button>
                </div>
            </article>
        </div>
    </main>
    )
}

export default Produtos