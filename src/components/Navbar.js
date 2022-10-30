import React from 'react';
import logo from '../images/React-small-icon.svg.png';

export default function Navbar(props){
    
    return(
        <div>
            <nav className={props.darkMode? "navbar dark--mode" : "navbar"} >
                
                <div className="logo--section">
                    <img src={logo} alt="Logo" className="nav--logo" />
                    <p className="nav--logo_text" >ReactFacts</p>
                </div>

                <div className="toggler">
                    <p className="toggler--light">Light Mode</p>
                    <div className="toggler--slider" onClick={props.toggle}>
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark Mode</p>
                </div>

            </nav>
        </div>
    )
}