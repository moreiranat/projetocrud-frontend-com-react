import React from 'react';

export default props => {

    const rows = props.tasks.map(task => {
        return (
            <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.categoryId}</td>
                <td>{task.status}</td>
                <td>
                    <button type="button" title="Editar"
                        className="btn btn-warning"
                        onClick={e => props.edit(task.id)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir"
                        className="btn btn-danger"
                        onClick={e => props.delete(task.id)}>
                        <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    } )

    return (

        <table className="table table-hover">
            <thead>
                <tr className="table-active">
                    <th scope="col">Id</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Prioridade</th>
                    <th scope="col">Id da Categoria</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}