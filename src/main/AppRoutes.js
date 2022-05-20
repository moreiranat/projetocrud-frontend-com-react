import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import CreateCategory from "../screens/createCategory/CreateCategory";
import UpdateCategory from "../screens/updateCategory/UpdateCategory";
import DeleteCategory from "../screens/deleteCategory/DeleteCategory";
import FindCategory from "../screens/findCategory/FindCategory";
import CreateTask from "../screens/createTask/CreateTask";
import UpdateTask from "../screens/updateTask/UpdateTask";
import DeleteTask from "../screens/deleteTask/DeleteTask";
import FindTask from "../screens/findTask/FindTask";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { Home } path ="/" exact />
            <Route component = { Login } path="/login" />
            <Route component = { CreateCategory } path="/createCategory" />
            <Route component = { UpdateCategory } path="/updateCategory" />
            <Route component = { DeleteCategory } path="/deleteCategory" />
            <Route component = { FindCategory } path="/findCategory" />
            <Route component = { CreateTask } path="/createTask" />
            <Route component = { UpdateTask } path="/updateTask" />
            <Route component = { DeleteTask } path="/deleteTask" />
            <Route component = { FindTask } path="/findTask" />
        </BrowserRouter>
    );
}

export default AppRoutes;