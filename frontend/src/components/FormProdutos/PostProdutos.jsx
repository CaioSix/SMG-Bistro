import React from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
// import '../../pages/NovoProduto/NewProduto.css'

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
  }

  handleSubmit = event => {
    event.preventDefault();

    const produto = {
      nome: this.state.nome,
      descricao: this.state.descricao
  
    };

    axios.post(`http://localhost:3001/produtos/`,{ 
      nome: this.state.nome, 
      descricao: this.state.descricao  
    }).then(res => {
      alert('produto foi adiciondo')
    
    })
     
  }

  render() {
    return (
      <div>
     
     <h1 className={styles.title}>Adicione o Produto</h1>


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
        
        <button className={styles.meuBotao}>Salvar</button>
      </form>



      </div>
    )
  }
}