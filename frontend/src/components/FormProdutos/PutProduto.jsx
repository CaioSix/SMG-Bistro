import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
// import '../../pages/NovoProduto/NewProduto.css'
import { busca } from '../../api/api'

export default class Post extends React.Component {
  
  
  
  state = {
    nome: '',
    descricao: ''
  }
  handleChange = event => {
    console.log(event)
    const value = event.target.value;
  
    
    this.setState({ 
     [event.target.name]: value
      });
      console.log(busca)

  }

  handleSubmit = event => {
    event.preventDefault();
    const id = document.querySelector('#update').value

    const produto = {
      nome: this.state.nome,
      descricao: this.state.descricao
    };
    
    // axios.get(`http://localhost:3001/produtos/`)
    //   .then(response =>{
    //     console.log(response)
    //   })

    axios.put(`http://localhost:3001/produtos/${id}`,{ 
      nome: this.state.nome, 
      descricao: this.state.descricao  
    }).then(res => {
      alert('produto foi editado')
    })
     
  }

  render() {
    return (
      <div className={styles.form}>
     
     <h1 className={styles.title}>Edite um  Produto</h1>


      <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>Nome</label>

          <input
          value={this.state.nome}
          onChange={this.handleChange}
          className={styles.meuInput}
          name="nome"
        />

        <label>descricao</label>
        <input 
        className={styles.meuInput} 
        name="descricao"
        onChange={this.handleChange}
          />
        <button  className={styles.meuBotao}>Editar</button>
      </form>
      <input 
      id="update" 
      type="number"
      placeholder="Digite o elemento"/>


      </div>
    )
  }
}