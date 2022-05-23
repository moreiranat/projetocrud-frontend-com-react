import React from 'react';
import './ViewTasks.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

import TasksTable from '../../components/TasksTable'

class ViewTasks extends React.Component {

    state = {
        description: '',
        priority: '',
        categoryId: 0,
        status: '',
        id: '',
        tasks: []
    }

    delete = (taskId) => {
        axios.delete(`http://localhost:8080/api/task/${taskId}`,
        ).then(response => {
            this.find();
        }
        ).catch(error => {
            console.log(error.response);
        }
        );
    }

    edit = (taskId) => {
        this.props.history.push(`/updateTask/${taskId}`);
    }

    find = () => {
        var params = '?';

        if (this.state.id != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}id=${this.state.id}`;
        }

        if (this.state.description != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}description=${this.state.description}`;
        }

        if (this.state.priority != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}priority=${this.state.priority}`;
        }

        if (this.state.categoryId != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}categoryId=${this.state.categoryId}`;
        }

        if (this.state.status != '') {
            if (params != '?') {
                params = `${params}&`;
            }

            params = `${params}status=${this.state.status}`;
        }

        axios.get(`http://localhost:8080/api/task/${params}`)
            .then(response => {
                const tasks = response.data;
                this.setState({ tasks });
                console.log(tasks);
            }
            ).catch(error => {
                console.log(error.response);
            }
            );
    }

    findAll = () => {

        axios.get(`http://localhost:8080/api/task/all`)
            .then(response => {
                const tasks = response.data;
                this.setState({ tasks });
                console.log(tasks);
            }
            ).catch(error => {
                console.log(error.response);
            }
            );
    }

    render() {
        return (

            <div className="container">
                <div className='row'>
                    <div className='col-md-12' style={this.styles.colMd12}>
                        <div className="bs-docs-section">

                            <br />
                            <br />
                            <div className="card border-success mb-3" style={this.styles.cardText}>
                                <h3 className="card-header text-center">Consulta de Tarefas</h3>
                                <div className="card-body">

                                    <div className="form-group">
                                        <label className="col-form-label mt-4" htmlFor="inputId">Id:</label>
                                        <input type="text" className="form-control" placeholder="Digite o Id da Tarefa" id="inputId" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />

                                        <div className="form-group">
                                            <label className="col-form-label mt-4" htmlFor="inputDescription">Descrição:</label>
                                            <input type="text" className="form-control" placeholder="Digite a Descrição da Tarefa" id="inputDescription" value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} />

                                            <div className="form-group">
                                                <label htmlFor="selectPriority" className="col-form-label mt-4">Prioridade:</label>
                                                <select className="form-select" id="selectPriority" value={this.state.priority} onChange={(e) => { this.setState({ priority: e.target.value }) }}>
                                                    <option>Selecione uma opção</option>
                                                    <option>ALTA</option>
                                                    <option>MÉDIA</option>
                                                    <option>BAIXA</option>
                                                </select>

                                                <div className="form-group">
                                                    <label className="col-form-label mt-4" htmlFor="inputCategoryId">Id da Categoria:</label>
                                                    <input type="text" className="form-control" placeholder="Digite o Id da Categoria" id="inputCategoryId" value={this.state.categoryId} onChange={(e) => { this.setState({ categoryId: e.target.value }) }} />

                                                    <div className="form-group">
                                                        <label htmlFor="selectStatus" className="form-label mt-4">Status:</label>
                                                        <select className="form-select" id="selectStatus" value={this.state.status} onChange={(e) => { this.setState({ status: e.target.value }) }}>
                                                            <option>Selecione uma opção</option>
                                                            <option>PENDENTE</option>
                                                            <option>EM_ANDAMENTO</option>
                                                            <option>CONCLUÍDA</option>
                                                        </select>

                                                        <br />
                                                        <div className="btn-group-vertical">
                                                            <button onClick={this.find} type="button" className="btn btn-success">
                                                                <i className="pi pi-search"></i> Filtrar
                                                            </button>
                                                            <br />
                                                            <button onClick={this.findAll} type="button" className="btn btn-primary">
                                                                <i className="pi pi-search"></i> Buscar Tudo
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <br />
                                            <div className='row'>
                                                <div className='col-lg-12' >
                                                    <div className='bs-component'>
                                                        <TasksTable tasks={this.state.tasks}
                                                            delete={this.delete}
                                                            edit={this.edit} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                    </div >
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
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

export default withRouter(ViewTasks);