import React from 'react';
import './DeleteCategory.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class DeleteCategory extends React.Component {

    state = {
      id: 0
    }
  
    delete = () => {
      axios.delete(`http://localhost:8080/api/category/${this.state.id}`,
      ).then(response => 
        {
          console.log(response);
        }
      ).catch(error => 
        {
          console.log(error.response);
        }
      );
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

                <div className="card border-danger mb-3" style={this.styles.cardBorder}>
                  <h3 className="card-header text-center">Exclusão de Categoria</h3>
                  <div className="card-body">
      
                    <div className='row'>
                      <div className='col-lg-12' >
                        <div className='bs-component'>

                            <div className="form-group">
                              <label className="form-label mt-4">Id:</label>
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="inputId" placeholder="Digite o Id da Categoria" value={this.state.id} onChange={(e) => { this.setState({id: e.target.value })}} />
                                <label htmlFor="inputId">Digite o Id da Categoria</label>
                              </div>
                            </div>
                            
                            <br />
                            
                            <button onClick={this.delete} type="button" className="btn btn-outline-danger">
                              <i className="pi pi-save"></i> Deletar
                            </button>
                            <button onClick={this.cancel} type="button" className="btn btn-outline-info">
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
      colMd12: {
        position: 'relative'
      },
      cardBorder: {
        outerWidth: '20rem',
        margin: '50px 0 0 0'
      }
    }
} 

export default withRouter(DeleteCategory);