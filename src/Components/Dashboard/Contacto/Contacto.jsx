import React, { useState } from 'react';
import './Contacto.css'; // Import CSS file for styling

function Contacto() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Contacto</button>
      {visible && (
        <div className="window">
          <button onClick={toggleVisibility}>Close</button>
          <div className="content">
            {/* Content of the window */}
            <p>Informacion sobre nosotros</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contacto;