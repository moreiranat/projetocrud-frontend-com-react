import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import CreateCategory from "../screens/createCategory/CreateCategory";
import UpdateCategory from "../screens/updateCategory/UpdateCategory";
import DeleteCategory from "../screens/deleteCategory/DeleteCategory";
import ViewCategories from "../screens/viewCategories/ViewCategories";
import CreateTask from "../screens/createTask/CreateTask";
import UpdateTask from "../screens/updateTask/UpdateTask";
import DeleteTask from "../screens/deleteTask/DeleteTask";
import ViewTasks from "../screens/viewTasks/ViewTasks";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { Home } path ="/" exact />
            <Route component = { Login } path="/login" />
            <Route component = { CreateCategory } path="/createCategory" />
            <Route component = { UpdateCategory } path="/updateCategory/:id" />
            <Route component = { DeleteCategory } path="/deleteCategory" />
            <Route component = { ViewCategories } path="/viewCategories" />
            <Route component = { CreateTask } path="/createTask" />
            <Route component = { UpdateTask } path="/updateTask/:id" />
            <Route component = { DeleteTask } path="/deleteTask" />
            <Route component = { ViewTasks } path="/viewTasks" />
        </BrowserRouter>
    );
}

export default AppRoutes;