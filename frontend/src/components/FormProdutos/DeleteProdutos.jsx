import React, { useEffect } from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    id: '',
  }




  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.get(`http://localhost:3001/produtos/`)
    axios.delete(`http://localhost:3001/produtos/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <label> */}
            {/* Person ID: */}
            <input type="text" name="id" onChange={this.handleChange} />
          {/* </label> */}
          <button type="submit" onChange={this.handleChange} >Delete</button>
        </form>
      </div>
    )
  }
}

