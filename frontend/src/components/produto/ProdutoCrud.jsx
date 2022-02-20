import React, { Component } from "react";
import Axios from "axios"


const baseUrl = 'http://localhost:3001/produtos'
const initialState = {
    produto: { nome: '', descricao: ''},
    list: []
}

export default class ProdutoCrud extends Component {

    state = {...initialState}

    clear(){
        this.setState({ produto: initialState.produto })
    }

    save(){
        const produto = this.state.produto
        const method = produto.id ? 'put' : 'post'
        const url = produto.id ? `${baseUrl}/${produto.id}` : baseUrl
        Axios[method](url, produto)
            .then(resp =>{
                const list = this.getUpdatedList(resp.data)
                this.setState({ produto : initialState.produto, list})
            })
    }


    getUpdatedList(produto){
        const list = this.state.list.filter( u => u.id !== produto.id)
        list.unshift(produto)
        return list
    }

    updateField(event){
        const produto = { ...this.state.produto }
        produto[event.target.nome] = event.target.value
        this.setState({ produto })
    }

    rendeForm(){
       return(
           <div className='form'>
               <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Nome</label>
                            <input type='text' className='form-control'
                            nome='nome' 
                            value={this.state.produto.nome}
                            onChange={e => this.updateField(e)}
                            placeholder='Digite o Nome do produto' />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Descricao</label>
                            <input type='text' className='form-control'
                            nome='descricao' 
                            value={this.state.produto.descricao}
                            onChange={e => this.updateField(e)}
                            placeholder='Digite a descricao do produto' />
                        </div>
                    </div>
               </div>

               <hr />
               <div className='row'>
                   <div className='col-12 d-flex justify-content-end'>
                        <button className='btn btn-primary'
                        onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className='btn btn-primary'
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                   </div>

               </div>

           </div>
       )
    }


    render() {
        return(
            <>
                {this.renderForm()}
            </>
        )
    }
}



