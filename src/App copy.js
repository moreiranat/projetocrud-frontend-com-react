import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    description: "",
    priority: "",
    categoryName: ""
  }

  create = () => {
 
    // alert("A tarefa -" + this.state.description + "- foi salva!");
  }

  render() {
    return (

      <div className="container">

        <div className='row'>
          <div className='col-6 offset-md-3'>
            <h1 class="display-3 text-center">Salvar Tarefa</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-6 offset-md-3">

            <form action='' className='form'>
              <div>
                <label className='form-label'>Descrição: </label>
                <input className='form-control' type="text" value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} />

                <br />
                <label className='form-label'>Prioridade: </label>
                <input className='form-control' type="text" value={this.state.priority} onChange={(e) => { this.setState({ priority: e.target.value }) }} />

                <br />
                <label className='form-label'>Nome da Categoria: </label>
                <input className='form-control' type="text" value={this.state.categoryName} onChange={(e) => { this.setState({ categoryName: e.target.value }) }} />
              </div>

              <br />
              <input className="form-control btn btn-primary " type="button" value="Salvar" onClick={this.create} />

            </form>
          </div>
        </div>
      </div>
    );
  }
} 
