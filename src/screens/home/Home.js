import React from 'react';
import './Home.css';

import { withRouter } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (

            <div className="container">
                <div className='row'>
                    <div className='col-md-6' style={this.styles.colMd6}>
                        <div className="bs-docs-section">

                            <br />
                            <br />

                            <div className="card border-primary mb-3" style={this.styles.cardBorder}>
                                <h1 className="card-header text-center">Bem Vindo(a) a Minhas Tarefas</h1>
                                <h3 className="card-header text-center">Liste suas Tarefas!!</h3>
                                <h4 className="card-header text-center">Projeto desenvolvido na Disciplina de Desenvolvimento de Aplicações Corporativas</h4>
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
        colMd6: {
            position: 'relative',
            left: '300px'
        }
    }
}

export default withRouter(Home);