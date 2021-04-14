import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './products/Pages/Home';
import Usuarios from './products/Pages/Usuarios';
import Header from './products/components/Header';
import Roles from './products/Pages/Roles';
import Estudiantes from './products/Pages/Estudiantes';
import Materias from './products/Pages/Materias';



function App () {
  return(
    <Router>
      <Header></Header> 
      
    <Switch>
      
      <Route path='/Home' exact component={Home}></Route>
      <Route path='/Usuarios' exact component={Usuarios}></Route>
      <Route path='/Roles' exact component={Roles}></Route>
      <Route path='/Materias' exact component={Materias}></Route>
      <Route path='/Estudiantes' exact component={Estudiantes}></Route>

    </Switch>
  </Router>
  );
}

export default App
