import React from 'react';
import 'bootswatch/dist/sketchy/bootstrap.css';
import './App.css';

import CreateTask from './screens/createTask/CreateTask';

import UpdateTask from './screens/updateTask/UpdateTask';

import CreateCategory from './screens/createCategory/CreateCategory'

import UpdateCategory from './screens/updateCategory/UpdateCategory'

import NavBar from './components/NavBar';

import AppRoutes from './main/AppRoutes';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <AppRoutes />
      </div>
    )
  
  }
} 