import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        
        <div className="menu-container">
            <div className="menu-item">
                <a href="#">Inicio</a>
                  {/* Más elementos de menú aquí */}
            </div>
            <div className="menu-item">
                <a href="#">Nosotros</a>
            </div>
            <div className="menu-item">
            <a href="#">Contacto</a>
            </div>
          
        </div>
    );
};

export default Menu;
