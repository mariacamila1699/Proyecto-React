import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './products/Pages/Home';
import Usuarios from './products/Pages/Usuarios';
import Header from './products/components/Header';
import Roles from './products/Pages/Roles';
import Inscripcion from './products/Pages/Inscripcion';
import Materias from './products/Pages/Materias';
import HorarioProfesor  from './products/Pages/HorarioProfesor'
import HorarioEstudiante  from './products/Pages/HorarioEstudiante'
import Grupo from './products/Pages/Grupo'
import Aula from './products/Pages/Aula'
import Carrera from './products/Pages/Carrera'





function App () {
  return(
    <Router>
      <Header></Header> 
      
    <Switch>
      
      <Route path='/Home' exact component={Home}></Route>
      <Route path='/Usuarios' exact component={Usuarios}></Route>
      <Route path='/Roles' exact component={Roles}></Route>
      <Route path='/Materias' exact component={Materias}></Route>
      <Route path='/Inscripcion' exact component={Inscripcion}></Route>
      <Route path='/HorarioProfesor' exact component={HorarioProfesor}></Route>
      <Route path='/HorarioEstudiante' exact component={HorarioEstudiante}></Route>
      <Route path='/Grupo' exact component={Grupo}></Route>
      <Route path='/Aula' exact component={Aula}></Route>
      <Route path='/Carrera' exact component={Carrera}></Route>

    </Switch>
  </Router>
  );
}

export default App
