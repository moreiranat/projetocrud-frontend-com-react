import React from 'react';
import './FindCategory.css';

import { withRouter } from 'react-router-dom';

class FindCategory extends React.Component {

    state = {
      name: ""
    }
  
    find = () => {
      this.props.history.push('/findCategory/FindCategory');
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

                <div className="card border-primary mb-3" style={this.styles.cardBorder}>
                  <h3 className="card-header text-center">Buscar Categoria</h3>
                  <div className="card-body">
      
                    <div className='row'>
                      <div className='col-lg-12' >
                        <div className='bs-component'>

                            <div className="form-group">
                              <label className="form-label mt-4">Categoria:</label>
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Digite o Nome da Categoria" value={this.state.name} onChange={(e) => { this.setState({name: e.target.value })}} />
                                <label htmlFor="floatingInput">Digite o Nome da Categoria</label>
                              </div>
                            </div>
                            <br />
                            
                            <button onClick={this.find} type="button" className="btn btn-success">
                              <i className="pi pi-save"></i> Buscar
                            </button>
                            <button onClick={this.cancel} type="button" className="btn btn-outline-danger">
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
      cardBorder: {
        outerWidth: '20rem',
        margin: '50px 0 0 0'
      }
    }
} 

export default withRouter(FindCategory);