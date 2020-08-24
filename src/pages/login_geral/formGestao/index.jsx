import React from 'react';
import { Link } from 'react-router-dom';

const FormGestao = () => (
<div>
    <form>
        <div className="form-group">
            <label for="exampleInputEmail1" className="text-primary">Endereço de email</label>
            <input type="email" className="form-control" id="emailGestao" aria-describedby="emailHelp" placeholder="Seu email" />
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1" className="text-primary">Senha</label>
            <input type="password" className="form-control" id="senhaGestao" placeholder="Senha" />
            <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <Link to="/cadastro">
            <button type="button" className="btn btn-primary btn-block">Ok</button>
        </Link>
    </form>
</div>
);

export default FormGestao;
