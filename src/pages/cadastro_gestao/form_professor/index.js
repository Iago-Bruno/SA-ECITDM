import React from 'react';


const FormProfessor = () => (
    <div>




        <div className="row">
            <div className="col">
                <label className='text-primary'>Nome</label>
                <input type="input" className="form-control" id='formProfessor' aria-describedby="emailHelp" placeholder="professor" /></div>
        </div>


        <div className="row">
            <div className="col-xl-6">
                <label className='mt-3 text-primary'>Endereço de email</label>
                <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="professor@ecitdm.com" />
            </div>
            <div className="col-xl-6">
                <label className='mt-3 text-primary'>Senha</label>
                <input type="password" className="form-control"  placeholder="senha" />
            </div>
        </div>



        <button type="button" className="btn btn-primary btn-lg btn-block mt-5">Cadastrar</button>
    </div>


);

export default FormProfessor;