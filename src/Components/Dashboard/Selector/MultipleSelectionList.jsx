import React, { useState } from 'react';
import './MultipleSelectionList.css';

const MultipleSelectionList = () => {

  const options = ['Comezon', 'Sarpullido', 'Sarpullido en ganglios linfaticos', 'Estornudos Frecuentes','Temblores', 'Escalofrios', 
  'Dolor en articulaciones', 'Dolor de estomago', 'Acidez', 'Ulceras en la lengua','Atrofia muscular', 'Vomito', 'Ardor al orinar', 'Sangre en orina', 'Fatiga', 'Aumento de peso', 'Ansiedad', 'Articulaciones frias', 'Cambios de humor',
  'Perdida de peso','Inquietud', 'Letargia', 'Manchas en garganta', 'Nivel anormal de azucar', 'Tos', 'Fiebre alta', 'Ojos hundidos', 'Falta de aire', 'Sudoracion', 'Deshidratacion', 'Indigestion', 'Dolor de cabeza', 'Piel amarilla', 
'Orina oscura', 'Nauseas', 'Perdida de apetito', 'Dolor detras de ojos','Dolor de espalda', 'Constipacion', 'Dolor abdominal', 'Diarrea', 'Fiebre leve', 'Orina amarilla', 'Ojos amarillentos','Fallo hepatico agudo', 'Hipervolemia', 'Hinchazon del estomago', 'Hinchazon de ganglios linfaticos',
'Malestar','Vision borrosa', 'Flemas', 'Irritacion de la garganta', 'Ojos rojos', 'Presion en senos paranasales', 'Goteo nasal', 'Congestion nasal', 'Dolor de pecho', 'Debilidad de extremidades', 'Ritmo cardiaco rapido', 'Dolor al evacuar', 'Dolor anal', 'Heces con sangre', 'Dolor de cuello',
'Mareos', 'Colicos', 'Moretones frecuentes', 'Obesidad', 'Piernas hinchadas', 'Vasos sanguineos inflamados', 'Ojos y cara hinchada', 'Tiroides agrandecida', 'Uñas quebradizas', 'Extremidades hinchadas', 'Hambre excesiva', 'extramarital-', 'Labios secos', 'Habla arrastrada', 'Dolor de rodillas', 'Dolor de cadera',
'Debilidad muscular','Cuello rigido' ,'Articulaciones hinchadas', 'Rigidez de movimientos' ,'Movimientos giratorios', 'Perdida de equilibrio', 'Inestabilidad',  'Debilidad de un lado del cuerpo', 'Perdida de olfato', 'Incomodidad de vejiga', 'Orina con olor desagradable', 'Miccion frecuente', 'Gases', 'Comezon interna', 'Apariencia decaida (tifos)', 
'Depresion', 'Irritabilidad', 'Dolor muscular', 'Sentidos alterados', 'Manchas rojas en el cuerpo', 'Dolor estomacal', 'Problemas de menstruacion', 'Manchas descoloridas', 'Ojos llorosos', 'Miccion excesiva', 'Historial Medico', 'Esputo mucoide', 'Esputo con color oxidado', 'Problemas de concentracion',
'Problemas de vision', 'Recibe transfusiones de sangre', 'Recibe inyecciones no esteriles', 'Coma', 'Sangrado estomacal', 'Distension abdominal', 'Alcoholismo', 'Hipervolemia 2', 'Sangre en esputo', 'Varices', 'Palpitaciones', 'Dolor al caminar', 'Granos con pus' , 'Puntos negros', 'Scurring', 'Descamacion de la piel', 'Piel grisacea', 'Uñas abolladas' , 'Uñas inflamadas',
'Ampollas', 'Llaga roja cerca de la nariz', 'Pus amarillenta' ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectOption = (e) => {
    const value = e.target.value;
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div className="MultipleSelectionList">
      <div className="search-input">
      <input
        type="text"
        placeholder="Buscar sintomas"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>

      <select className="list" multiple={true} onChange={handleSelectOption} style={{ height: '150px', width: '500px', fontSize: '16px'}}>
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}

      </select>
  <div className="Sintomas">
        <h3>Sintomas:</h3>
        <div className="SelectedOptions">
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>
              {option}
              <button className= "remover" onClick={() => handleRemoveOption(option)}> X </button>
            </li>
          ))}
        </ul>

      <button className="Confirmar"  onClick={() => console.log(selectedOptions)}> Confirmar Sintomas </button>
      </div>
      </div>
    </div>
  );
};

export default MultipleSelectionList ;