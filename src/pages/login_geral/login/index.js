import React from 'react';
import './styles.css';

import FormAluno from '../formAluno';
import FormProfessor from '../formProfessor';
import FormGestao from '../formGestao';






const Login = () => (


  <div>
    <div id="logo" className="container">

    </div>
    <div className="card text-white mb-3" id="telalogin">
      <div className="card-header">
        <nav>
          <div className="nav nav-pills nav-fill" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Aluno</a>
            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Professor</a>
            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Gestão</a>
          </div>
        </nav>
      </div>

      <div className="card-body">
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><FormAluno /> </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><FormProfessor /> </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><FormGestao /> </div>
        </div>
      </div>

    </div>
  </div>
);

export default Login;