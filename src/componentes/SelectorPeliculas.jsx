// SelectorPeliculas.jsx
import React, { useState } from 'react';
import peliculasDisponibles from "@/componentes/peliculasDisponibles";
import styles from "@/app/page.module.css";

const SelectorPeliculas = ({ addPelicula }) => {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const handleAdd = () => {
    if (peliculaSeleccionada) {
      addPelicula({ ...peliculaSeleccionada, quantity: 1 });
      setPeliculaSeleccionada(null);
    }
  };

  return (
    <div className={styles.selectorPeliculas}>
      <select onChange={(e) => setPeliculaSeleccionada(peliculasDisponibles.find(pelicula => pelicula.nombre === e.target.value))}>
        <option value="">*Seleccione la película que desea comprar*</option>
        {peliculasDisponibles.map((pelicula, index) => (
          <option key={index} value={pelicula.nombre}>{pelicula.nombre}</option>
        ))}
      </select>
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
};

export default SelectorPeliculas;





