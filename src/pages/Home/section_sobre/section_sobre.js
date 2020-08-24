import React from 'react';

import ImgSobre from '../../../assets/fotos/ecit.svg';

import '../../../assets/styles/global.css';
import './section_sobre.css';
import './responsi_sobre.css';

function Section_Sobre() {
    return(
        <div className="section_sobre" id="section_sobre">
            <div id="sobre_img">
                <img src={ImgSobre} alt="Imagem da escola" />
            </div>

            <div id="sobre_texts">
                <p className="textos">
                    <h1>Título</h1>
                    <h6>Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás</h6>
                </p>

                <p className="textos">
                    <h1>Título Opcional</h1>
                    <h6>Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás</h6>
                </p>
            </div>
        </div>
    );
}

export default Section_Sobre;