import React from 'react';

const FormAluno = () => (
    <div>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1" className="text-primary">Endereço de email</label>
                <input type="email" className="form-control" id="emailAluno" aria-describedby="emailHelp" placeholder="Seu email" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1" className="text-primary">Senha</label>
                <input type="password" className="form-control" id="senhaAluno" placeholder="Senha" />
                <small><a href="">Esqueci minha senha</a></small>
            </div>
            <button type="button" className="btn btn-primary btn-block">Ok</button>
        </form>
    </div>
);

export default FormAluno;
