import React from 'react';
import './UpdateTask.css';

import { withRouter } from 'react-router-dom';

class UpdateTask extends React.Component {

    state = {
      description: "Ir ao Dentista",
      priority: "ALTA",
      categoryName: "Saúde"
    }
  
    update = () => {
      this.props.history.push('/updateTask/UpdateTask');
    }

    cancel = () => {
      this.props.history.push('/');
    }
  
    render() {
      return (
        
        <div className="container">
          <div className='row'>
            <div className='col-md-6' style={this.styles.colMd6}>
              <div className="bs-docs-section">

                <div className="card border-warning mb-3" style={this.styles.cardText}>
                  <h3 className="card-header text-center">Atualizar Tarefa</h3>
                  <div className="card-body">
  
                    <div className='row'>
                      <div className='col-lg-12' >
                        <div className='bs-component'>
  
                          <div className="form-group">
                            <label className="col-form-label mt-4" htmlFor="inputDefault">Descrição:</label>
                            <input type="text" className="form-control" placeholder="Descrição da Tarefa" id="inputDefault" value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} />
                          </div>
  
                          <div className="form-group">
                            <label className="col-form-label mt-4" htmlFor="inputDefault">Prioridade:</label>
                            <input type="text" className="form-control" placeholder="Prioridade da Tarefa" id="inputDefault" value={this.state.priority} onChange={(e) => { this.setState({ priority: e.target.value }) }} />
                          </div>
  
                          <div class="form-group">
                            <label htmlFor="exampleSelect1" className="form-label mt-4">Nome da Categoria:</label>
                            <select className="form-select" id="exampleSelect1" value={this.state.categoryName} onChange={(e) => { this.setState({ categoryName: e.target.value }) }}>
                              <option>Saúde</option>
                              <option>Lazer</option>
                              <option>Trabalho</option>
                              <option>Doméstico</option>
                              <option>Rotina</option>
                            </select>
                          </div>
                          <br />

                          <button onClick={this.update} type="button" className="btn btn-warning">
                            <i className="pi pi-save"></i> Atualizar
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
      );
    }
  
    styles = {
      colMd6: {
        position: 'relative',
        left: '300px'
      },
      cardText: {
        outerWidth: '20rem',
        margin: '50px 0 0 0'
      }
    }
  } 

  export default withRouter(UpdateTask);