import React from 'react';
import './Menu.css';
import Nosotros from '../Nosotros/Nosotros';
import Contacto from '../Contacto/Contacto';

const Menu = () => {
    return (
        
        <div className="menu-container">
            <div className="menu-item">
                <a href="#">Inicio</a>
            </div>
            <div className="menu-item">
                <Nosotros/>
            </div>
            <div className="menu-item">
                <Contacto/>
            </div>
            {/* Más elementos de menú aquí */}
        </div>
    );
};

export default Menu;
