import React from 'react';
import './style.css'

const FormAluno = () => (
    <div>




        <div className="row">
            <div className="col">
                <label className='text-primary'>Nome</label>
                <input type="input" className="form-control" id='formAluno' aria-describedby="emailHelp" placeholder="aluno" /></div>
        </div>


        <div className="row">
            <div className="col-xl-6">
                <label className='mt-3 text-primary'>Endereço de email</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="aluno@ecitdm.com" />
            </div>
            <div className="col-xl-6">
                <label className='mt-3 text-primary'>Senha</label>
                <input type="password" className="form-control"  placeholder="senha" />
            </div>
        </div>


        <div className='row'>
            <div className='col-md-4'>
                <label className='mt-3 text-primary'>Série</label>
                <select className="form-control">
                    <option>1°</option>
                    <option>2°</option>
                    <option>3°</option>
                </select>
            </div>
            <div className='col-lg-4'>
                <label className='mt-3 text-primary'>Curso Técnico</label>
                <select className="form-control" >
                    <option>Análises Clinicas</option>
                    <option>Agroecologia</option>
                    <option>Informática</option>
                </select>
            </div>
            <div className='col-md-4'>
                <label className='mt-3 text-primary'>Turma</label>
                <select className="form-control" >
                    <option>"A"</option>
                    <option>"B"</option>
                    <option>"C"</option>
                </select>
            </div>
        </div>
        <button type="button" className="btn btn-primary btn-lg btn-block mt-5">Cadastrar</button>
    </div>


);

export default FormAluno;