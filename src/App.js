import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    name: ""
  }

  create = () => {
    console.log(this.state);
    
  }

  render() {
    return (

      <div className="container">

        <div className='row'>
          <div className='col-6 offset-md-3'>
            <h1 class="display-3 text-center fs-2 fw-bold fst-italic">Salvar Categoria</h1>         
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-6 offset-md-3">

            <form action='' className='form'>
              <div className="input-group mb-3">
                <input className='form-control' type="text" placeholder="Nome da Categoria" aria-label="Nome da Categoria" aria-describedby="button-addon2" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                <input className="btn btn-outline-secondary" type="button" id="button-addon2" value="Salvar" onClick={this.create} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
} 
