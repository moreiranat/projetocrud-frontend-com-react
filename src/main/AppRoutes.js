import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import CreateCategory from "../screens/createCategory/CreateCategory";
import UpdateCategory from "../screens/updateCategory/UpdateCategory";
import CreateTask from "../screens/createTask/CreateTask";
import UpdateTask from "../screens/updateTask/UpdateTask";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { Home } path ="/" exact />
            <Route component = { Login } path="/login" />
            <Route component = { CreateCategory } path="/createCategory" />
            <Route component = { UpdateCategory } path="/updateCategory" />
            <Route component = { CreateTask } path="/createTask" />
            <Route component = { UpdateTask } path="/updateTask" />
        </BrowserRouter>
    );
}

export default AppRoutes;