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
                        {/* <NavBarItem href="/" label="Home" /> */}
                        <NavBarItem href="/createCategory" label="Cadastrar Categoria"/>
                        <NavBarItem href="/updateCategory" label="Atualizar Categoria"/>
                        <NavBarItem href="/createTask" label="Cadastrar Tarefa"/>
                        <NavBarItem href="/updateTask" label="Atualizar Tarefa"/>                      
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Buscar" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;
