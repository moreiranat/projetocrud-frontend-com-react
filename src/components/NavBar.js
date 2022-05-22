import React from 'react';
import NavBarItem from './NavBarItem'

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Minhas Tarefas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <NavBarItem href="/" label="Home" />
                        <NavBarItem href="/login" label="Login"/>
                        <NavBarItem href="/createCategory" label="Cadastrar Categoria"/>
                        <NavBarItem href="/updateCategory/:id" label="Atualizar Categoria"/>
                        <NavBarItem href="/deleteCategory" label="Deletar Categoria"/>
                        <NavBarItem href="/viewCategories" label="Categorias"/>
                        <NavBarItem href="/createTask" label="Cadastrar Tarefa"/>
                        <NavBarItem href="/updateTask/:id" label="Atualizar Tarefa"/>
                        <NavBarItem href="/deleteTask" label="Deletar Tarefa"/>
                        <NavBarItem href="/viewTasks" label="Tarefas"/>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;