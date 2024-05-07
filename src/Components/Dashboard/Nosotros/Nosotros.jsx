import React, { useState } from 'react';
import './Nosotros.css'; // Import CSS file for styling

function Nosotros() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Nosotros</button>
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

export default Nosotros;