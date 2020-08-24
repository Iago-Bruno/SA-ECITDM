import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Index';
import LoginGeral from './pages/login_geral/login/index';
import CadastroGeral from './pages/cadastro_gestao/cadastro/index';

function Routes() {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={LoginGeral} path="/login" />
            <Route component={CadastroGeral} path="/cadastro" />
        </BrowserRouter>
    );
}

export default Routes;