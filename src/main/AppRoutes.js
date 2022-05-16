import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import CreateCategory from "../screens/createCategory/CreateCategory";
import UpdateCategory from "../screens/updateCategory/UpdateCategory";
import CreateTask from "../screens/createTask/CreateTask";
import UpdateTask from "../screens/updateTask/UpdateTask";

function AppRoutes() {
    return (
        <BrowserRouter>
            {/* <Route component = { Home } path = "/" exact /> */}
            <Route component = { CreateCategory } path="/createCategory" />
            <Route component = { UpdateCategory } path="/updateCategory" />
            <Route component = { CreateTask } path="/createTask" />
            <Route component = { UpdateTask } path="/updateTask" />
        </BrowserRouter>
    );
}

export default AppRoutes;