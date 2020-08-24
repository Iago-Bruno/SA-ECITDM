import React from 'react';

import Section_Home from './section_home/section_home';
import Section_Navbar from './section_navbar/navbar';
import Section_Sobre from './section_sobre/section_sobre';
import Section_Cursos from './section_cursos/section_cursos';


function Home() {

    return(
        <div className="Home">

            <Section_Navbar />
            <Section_Home />
            <Section_Sobre />
            <Section_Cursos />

        </div>
    );
};

export default Home;