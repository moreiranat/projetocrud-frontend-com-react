import React from 'react';
import './Home.css';

import { withRouter } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (

            <div className="container">
                <div className='row'>
                    <div className='col-md-12' style={this.styles.colMd12}>
                        <div className="bs-docs-section">

                            <div className="card border-primary mb-3" style={this.styles.cardBorder}>
                                <h1 className="card-header text-center">Bem Vindo(a) ao "Minhas Tarefas"</h1>
                                <h3 className="card-header text-center" style={this.styles.h1}>Organize suas Tarefas!!</h3>
                                <h4 className="card-header text-center">Projeto desenvolvido por Nataly Lucena para a Disciplina de Desenvolvimento de Aplicações Corporativas com o Professor Elenilson Vieira, no 5° Período do Curso de Análise e Desenvolvimento de Sistemas do IFPB, Campus Monteiro/PB</h4>
                                <h5 className="card-header text-center">Projeto Frontend utilizando React e Bootswatch</h5>
                                <div className="card-body">
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

export default withRouter(Home);