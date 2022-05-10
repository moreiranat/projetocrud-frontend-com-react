import React from 'react';
import './App.css';

export default class App extends React.Component {

state = {
  name: ""
}

create = () => {
  alert("A categoria -" + this.state.name + "- foi salva!");;
}

  render() {
    return (

      <div className="container">
        
        <div className='row'>
          <div className='col-6 offset-md-3'>
            <h1 class="display-3 text-center">Salvar Categoria</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-6 offset-md-3">
            
            <form action='' className='form'>
              <div>
                <label className='form-label'>Nome da Categoria:</label>
                <input className='form-control' type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
              </div>

              <br/>
              <input className="form-control btn btn-primary " type="button" value="Salvar" onClick={this.create}/>
              
            </form>
          </div>
        </div>
      </div>
    );
  } 
} 
