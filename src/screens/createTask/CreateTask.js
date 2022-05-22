import React from 'react';
import './CreateTask.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CreateTask extends React.Component {

  state = {
    description: "",
    priority: "",
    categoryId: "",
    status: ""
  }

  create = async () => {
    await axios.post('http://localhost:8080/api/task',
      {
        description: this.state.description,
        priority: this.state.priority,
        categoryId: this.state.categoryId,
        status: this.state.status
      }
    ).then(response => {
      console.log(response);
    }
    ).catch(error => {
      console.log(error.response);
    }
    );

    console.log('request finished');
  }

  cancel = () => {
    this.props.history.push('/');
  }

  render() {
    return (

      <div className="container">
        <div className='row'>
          <div className='col-md-12' style={this.styles.colMd12}>
            <div className="bs-docs-section">

              <div className="card text-white bg-info mb-3" style={this.styles.cardText}>
                <h3 className="card-header text-center">Cadastro de Tarefa</h3>
                <div className="card-body">

                  <div className='row'>
                    <div className='col-lg-12' >
                      <div className='bs-component'>

                        <div className="form-group">
                          <label className="col-form-label mt-4" htmlFor="inputDescription">Descrição:</label>
                          <input type="text" className="form-control" placeholder="Digite a Descrição da Tarefa" id="inputDescription" value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} />

                          <div className="form-group">
                            <label htmlFor="selectPriority" className="form-label mt-4">Prioridade:</label>
                            <select className="form-select" id="selectPriority" value={this.state.priority} onChange={(e) => { this.setState({ priority: e.target.value }) }}>
                              <option>Selecione uma opção</option>
                              <option>ALTA</option>
                              <option>MÉDIA</option>
                              <option>BAIXA</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label className="col-form-label mt-4" htmlFor="inputCategoryId">Id da Categoria:</label>
                            <input type="text" className="form-control" placeholder="Digite o Id da Categoria" id="inputCategoryId" value={this.state.categoryId} onChange={(e) => { this.setState({ categoryId: e.target.value }) }} />
                          </div>

                          <div className="form-group">
                            <label htmlFor="selectStatus" className="form-label mt-4">Status da Tarefa:</label>
                            <select className="form-select" id="selectStatus" value={this.state.status} onChange={(e) => { this.setState({ status: e.target.value }) }}>
                              <option>Selecione uma opção</option>
                              <option>PENDENTE</option>
                              <option>EM_ANDAMENTO</option>
                              <option>CONCLUÍDA</option>
                            </select>
                          </div>

                          <br />

                          <button onClick={this.create} type="button" className="btn btn-success">
                            <i className="pi pi-save"></i> Salvar
                          </button>
                          <button onClick={this.cancel} type="button" className="btn btn-danger">
                            <i className="pi pi-times"></i> Cancelar
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    colMd12: {
      position: 'relative'
    },
    cardText: {
      outerWidth: '20rem',
      margin: '50px 0 0 0'
    }
  }
}

export default withRouter(CreateTask);