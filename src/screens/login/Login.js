import React from 'react';
import './Login.css';

import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    state = {
        user: "",
        password: ""
    }
    login = () => {
        if (this.state.user === "monteiro@ifpb.edu.br" && this.state.password === "123") {
            console.log(this.state.user + ", você está logado!")
            this.props.history.push('/');

        } else {
            alert("Os dados estão incorretos. Por favor, digite-os novamente!")
        }
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

                            <div className="card border-success mb-3" style={this.styles.cardBorder}>
                                <h3 className="card-header">Login</h3>
                                <div className="card-body">

                                    <div className='row'>
                                        <div className='col-lg-12' >
                                            <div className='bs-component'>

                                                <form>
                                                    <fieldset>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Usuário:</label>
                                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email" value={this.state.user} onChange={(e) => { this.setState({ user: e.target.value }) }} />

                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Senha:</label>
                                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite sua senha" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                                            </div>

                                                            <br />

                                                            <button onClick={this.login} type="button" className="btn btn-success">
                                                                <i className="pi pi-save"></i> Login
                                                            </button>
                                                            <button onClick={this.cancel} type="button" className="btn btn-danger">
                                                                <i className="pi pi-times"></i> Cancelar
                                                            </button>
                                                        </div>
                                                    </fieldset>
                                                </form>

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

export default withRouter(Login);