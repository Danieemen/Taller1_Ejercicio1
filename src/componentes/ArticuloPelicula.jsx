// ArticuloPelicula.jsx
import React from 'react';
import styles from "@/app/page.module.css";

const ArticuloPelicula = ({ pelicula, index, updateQuantity, removePelicula }) => {
  return (
    <div className={styles.peliculaItem}>
      <h3>{pelicula.nombre} - ${pelicula.precio.toFixed(2)}</h3>
      <input
        type="number"
        min="1"
        value={pelicula.quantity}
        onChange={(e) => updateQuantity(index, e.target.value)}
      />
      <button onClick={() => removePelicula(index)}>X</button>
    </div>
  );
};

export default ArticuloPelicula;
