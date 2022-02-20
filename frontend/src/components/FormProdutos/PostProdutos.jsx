import React from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
// import '../../pages/NovoProduto/NewProduto.css'

export default class PersonList extends React.Component {
  
  state = {
    nome: '',
    descricao: ''
  }

  handleChange = event => {
    this.setState({ 
      nome: event.target.value,
      descricao: event.target.value
      });
  }


// teste

// handleChange = event => {
//   const produto = { ...this.state.produto }
//   produto[event.target.nome] = event.target.value
//   this.setState({ produto })
// }







// 









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
      console.log(this.state.nome)
      console.log(this.state.descricao)
      console.log(produto.nome)
      console.log(produto.descricao)
      console.log(produto)
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
        />

        <label>descricao</label>
        <input className={styles.meuInput} 
          />
        
        <button className={styles.meuBotao}>Salvar</button>
      </form>



      </div>
    )
  }
}