import React from 'react';
import './styles.css';
import '../../../assets/styles/global.css';
import FormAluno from '../form_aluno/index';
import FormProfessor from '../form_professor/index';



const Cadastro = () => (
    <div >



        <div className='card w-50 p-3 mt-5 ' className='telaCadastro'>

            <nav >
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Aluno</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Professor</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Disciplina</a>
                </div>
            </nav>



            <div className='card-body'>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><FormAluno /></div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><FormProfessor /></div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Cadê o conteúdo? SUMIU!</div>
                </div>
            </div>

        </div>

    </div >

);

export default Cadastro;