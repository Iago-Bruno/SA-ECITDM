import React from 'react';

import MenuHome from '../../../assets/fotos/landing.svg';

import '../../../assets/styles/global.css';
import './section_home.css';
import './responsi_home.css';

function Section_Home() {
    return(
        <div className="section_home" id="section_home">
            <div className="menu_home">
                <p>
                    <h1>
                        SA - ECITDM
                    </h1>
                    <h5>
                        Alguma frase opcional 
                        (O tamanho da frase irá mudar o tamanho da imagem também)
                    </h5>
                </p>
                <div id="home_img">
                    <img src={MenuHome} alt="Imagem de menu" />
                </div>
            </div>
        </div>
    );
}

export default Section_Home;
