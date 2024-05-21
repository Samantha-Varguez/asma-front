import React, { useState } from 'react';

const allSymptoms = [
    'Comezon', 'Sarpullido', 'Sarpullido_en_ganglios_linfaticos', 'Estornudos_Frecuentes', 'Temblores', 'Escalofrios', 'Dolor_en_articulaciones', 'Dolor_de_estomago', 'Acidez', 'Ulceras_en_la_lengua',
    'Atrofia_muscular', 'Vomito', 'Ardor_al_orinar', 'Sangre_en_orina', 'Fatiga', 'Aumento_de_peso', 'Ansiedad', 'Extremidades_frias', 'Cambios_de_humor', 'Perdida_de_peso', 'Inquietud',
    'Letargia', 'Manchas_en_garganta', 'Nivel_anormal_de_azucar', 'Tos', 'Fiebre_alta', 'Ojos_hundidos', 'Falta_de_aire', 'Sudoracion', 'Deshidratacion', 'Indigestion',
    'Dolor_de_cabeza', 'Piel_amarilla', 'Orina_oscura', 'Nauseas', 'Perdida_de_apetito', 'Dolor_detras_de_ojos', 'Dolor_de_espalda', 'Constipacion', 'Dolor_abdominal', 'Diarrea',
    'Fiebre_leve', 'Orina_amarilla', 'Ojos_amarillentos', 'Fallo_hepatico_agudo', 'Hipervolemia', 'Hinchazon_del_estomago', 'Hinchazon_de_ganglios_linfaticos', 'Malestar', 'Vision_borrosa', 'Flemas',
    'Irritacion_de_la_garganta', 'Ojos_rojos', 'Presion_en_senos_paranasales', 'Goteo_nasal', 'Congestion_nasal', 'Dolor_de_pecho', 'Debilidad_de_extremidades', 'Ritmo_cardiaco_rapido', 'Dolor_al_evacuar', 'Dolor_anal',
    'Heces_con_sangre', 'Irritacion_anal', 'Dolor_de_cuello', 'Mareos', 'Colicos', 'Moretones_frecuentes', 'Obesidad', 'Piernas_hinchadas', 'Vasos_sanguineos_inflamados', 'Ojos_y_cara_hinchada',
    'Tiroides_agrandecida', 'Uñas_quebradizas', 'Extremidades_hinchadas', 'Hambre_excesiva', 'Contactos_extramaritales', 'Labios_secos', 'Habla_arrastrada', 'Dolor_de_rodillas', 'Dolor_de_cadera', 'Debilidad_muscular',
    'Cuello_rigido', 'Articulaciones_hinchadas', 'Rigidez_de_movimientos', 'Movimientos_giratorios', 'Perdida_de_equilibrio', 'Inestabilidad', 'Debilidad_de_un_lado_del_cuerpo', 'Perdida_de_olfato', 'Incomodidad_de_vejiga', 'Orina_con_olor_desagradable',
    'Miccion_frecuente', 'Gases', 'Comezon_interna', 'Apariencia_decaida_tifos', 'Depresion', 'Irritabilidad', 'Dolor_muscular', 'Sentidos_alterados', 'Manchas_rojas_en_el_cuerpo', 'Dolor_estomacal',
    'Problemas_de_menstruacion', 'Manchas_descoloridas', 'Ojos_llorosos', 'Apetito_elevado', 'Miccion_excesiva', 'Historial_Familiar', 'Esputo_mucoide', 'Esputo_con_color_oxidado', 'Problemas_de_concentracion', 'Problemas_de_vision',
    'Recibe_transfusiones_de_sangre', 'Recibe_inyecciones_no_esteriles', 'Coma', 'Sangrado_estomacal', 'Distension_abdominal', 'Alcoholismo', 'Hipervolemia_2', 'Sangre_en_esputo', 'Varices', 'Palpitaciones',
    'Dolor_al_caminar', 'Granos_con_pus', 'Puntos_negros', 'Scurring', 'Descamacion_de_la_piel', 'Piel_grisacea', 'Uñas_abolladas', 'Uñas_inflamadas', 'Ampollas', 'Llaga_roja_cerca_de_la_nariz', 'Pus_amarillenta',
];

function SymptomForm() {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const handleSymptomChange = (event) => {
        const { value, checked } = event.target;
        setSelectedSymptoms((prevSelectedSymptoms) =>
            checked
                ? [...prevSelectedSymptoms, value]
                : prevSelectedSymptoms.filter((symptom) => symptom !== value)
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const binaryArray = allSymptoms.map((symptom) =>
            selectedSymptoms.includes(symptom) ? 1 : 0
        );
        console.log(binaryArray);
        // Enviar binary array a consola
        fetch('/submit-symptoms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ symptoms: binaryArray }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Submit Symptoms</h1>
            {allSymptoms.map((symptom, index) => (
                <div key={index}>
                    <label>
                        <input
                            type="checkbox"
                            value={symptom}
                            onChange={handleSymptomChange}
                        />
                        {symptom}
                    </label>
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}

export default SymptomForm;
