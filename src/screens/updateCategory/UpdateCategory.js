import React from 'react';
import './UpdateCategory.css';

import { withRouter } from 'react-router-dom';

class UpdateCategory extends React.Component {

    state = {
      name: "Lazer"
    }
  
    update = () => {
      this.props.history.push('/updateCategory/UpdateCategory');
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

                <br />
                <br />
  
                <div class="card border-primary mb-3" style={this.styles.cardBorder}>
                  <h3 class="card-header">Atualizar Categoria</h3>
                  <div class="card-body">
      
                    <div className='row'>
                      <div className='col-lg-12' >
                        <div className='bs-component'>

                            <div class="form-group">
                              <label class="form-label mt-4">Categoria:</label>
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Digite o Nome da Categoria" value={this.state.name} onChange={(e) => { this.setState({name: e.target.value })}} />
                                <label htmlFor="floatingInput">Edite o Nome da Categoria</label>
                              </div>
                            </div>
                            <button onClick={this.create} type="button" className="btn btn-warning">
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
      );
    }
  
    styles = {
      colMd6: {
        position: 'relative',
        left: '300px'
      },
      cardBorder: {
        outerWidth: '20rem' 
      }
    }
}

export default withRouter(UpdateCategory);