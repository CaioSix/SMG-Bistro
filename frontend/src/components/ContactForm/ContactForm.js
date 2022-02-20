import React from "react";

import styles from "./styles.module.css";

class ConctactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(`seu formluario foi enviado: ${this.state.name}`);
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Contato</h1>

        <p className={styles.subTitle}>Entre em contato e reserve uma mesa!</p>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>Nome</label>

          <input
            value={this.state.name}
            onChange={this.handleChangeName}
            className={styles.meuInput}
          />

          <label>Email</label>
          <input className={styles.meuInput} />
          <label>Telefone</label>
          <input className={styles.meuInput} />
          <button className={styles.meuBotao}>Enviar</button>
        </form>
      </div>
    );
  }
}

export default ConctactForm;
