import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Perfil from './components/Perfil';
import FormularioEvento from './components/FormularioEvento'


export default [
    <Route exact path="/" component={Home} key={0} />,
    <Route path="/login" component={Login} key={1}/>,
    <Route path="/perfil" component={Perfil} key={2}/>,
    <Route path="/formularioevento" component={FormularioEvento} key={3}/>,
];