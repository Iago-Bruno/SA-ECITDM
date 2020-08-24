import React from 'react';

import Informatica from '../../../assets/fotos/informática.svg'
import Analises from '../../../assets/fotos/analises.svg'
import Agroecologia from '../../../assets/fotos/agroecologia.svg'
import Arrow_right from '../../../assets/fotos/arrow_right.svg';
import Arrow_left from '../../../assets/fotos/arrow_left.svg';

import '../../../assets/styles/global.css';
import './section_cursos.css';
import './responsi_cursos.css';

function Section_cursos() {
    return(
        <div className="section_cursos" id="section_cursos">

           <div className="name_section">
               <h1>Cursos Técnicos</h1>
           </div>


            <div className="container_cursos">

                <input type="radio" name="images" id="i1" defaultChecked />
                <input type="radio" name="images" id="i2" />
                <input type="radio" name="images" id="i3" />

                <div className="slide_img" id="one">
                    <div className="slide_content">
                        <img src={Informatica} alt="InfoImg" />
                        <p>
                            <h1>Informática</h1>
                            <h5>Content</h5>
                        </p>
                    </div>
                    
                    <label htmlFor="i3" className="pre"><img src={Arrow_left} alt="Anterior" /></label>
                    <label htmlFor="i2" className="nxt"><img src={Arrow_right} alt="Próximo" /></label>
                </div>

                <div className="slide_img" id="two">
                    <div className="slide_content">
                        <img src={Analises} alt="AnaImg" />
                        <p>
                            <h1>Análises</h1>
                            <h5>Content</h5>
                        </p>
                    </div>

                    <label htmlFor="i1" className="pre"><img src={Arrow_left} alt="Anterior" /></label>
                    <label htmlFor="i3" className="nxt"><img src={Arrow_right} alt="Próximo" /></label>
                </div>

                <div className="slide_img" id="three">
                    <div className="slide_content">
                        <img src={Agroecologia} alt="AgroImg" />
                        <p>
                            <h1>Agroecologia</h1>
                            <h5>Content</h5>
                        </p>
                    </div>

                    <label htmlFor="i2" className="pre"><img src={Arrow_left} alt="Anterior" /></label>
                    <label htmlFor="i1" className="nxt"><img src={Arrow_right} alt="Próximo" /></label>
                </div>



                <div className="dotsin"> 
                    <label className="dots" id="dot1" htmlFor="i1"></label>
                    <label className="dots" id="dot2" htmlFor="i2"></label>
                    <label className="dots" id="dot3" htmlFor="i3"></label>
                </div> 

            </div>

        </div>
    );
}

export default Section_cursos;