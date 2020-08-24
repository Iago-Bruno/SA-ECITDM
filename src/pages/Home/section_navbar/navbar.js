import React from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';

import LogoImg from '../../../assets/fotos/logo_dm.svg';
import LogoMenuLateral from '../../../assets/fotos/lateral_icon.svg';
import { BiUserCircle } from 'react-icons/bi';

import '../../../assets/styles/global.css';
import './navbar.css';
import './responsi_navbar.css';

function Section_Navbar() {

    // Isto abaixo faz a animação de scroll
    $(document).ready(function($) { 
        $(".scroll").click(function(event){        
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top-70}, 700);
        });
    });
    // Isto acima faz a animação de scroll


    return(
        <div className="navbar_home">


            <div className="container_logo">
                <div className="navbar_logo">
                    <a href="#section_home" id="nav_logo" className="scroll">
                        <img src={LogoImg} alt="LogoDM" />
                        <p id="logo_info">
                            <h1>E.C.I.T Dom Marcelo</h1> 
                            <h4>GBA/PB</h4>
                        </p>
                    </a> 
                </div>
                

                
                <div className="nav_links">
                    <input type="checkbox" id="chec" defaultChecked />
                    <label htmlFor="chec"><img id="logomenu" src={LogoMenuLateral} alt="MenuIcon" /></label>

                    <nav className="links">
                        <ul>
                            <li>
                                <a href="#section_sobre" className="link scroll" id="link_sobre">
                                    Sobre
                                </a>
                            </li>

                            <li>
                                <a href="#section_cursos" className="link scroll" id="link_cursos">
                                    Cursos Técnicos
                                </a>
                            </li>

                            <li>
                                <Link to="/login" className="link" id="link_login">
                                    <BiUserCircle />
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Section_Navbar;