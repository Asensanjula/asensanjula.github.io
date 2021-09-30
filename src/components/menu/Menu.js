import React from 'react';
import "./menu.scss"

function Menu({openMenuBar, setOpenMenuBar}) {
    return (
        <div className={"menu " + ( openMenuBar && "active")}>
            <ul>
                <li onClick={()=> setOpenMenuBar(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=> setOpenMenuBar(false)}>
                    <a href="#about">About Me</a>
                </li>
                <li onClick={()=> setOpenMenuBar(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=> setOpenMenuBar(false)}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={()=> setOpenMenuBar(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;