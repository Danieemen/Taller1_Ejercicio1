// ListaCompra.jsx
import React from 'react';
import ArticuloPelicula from "@/componentes/ArticuloPelicula";
import styles from "@/app/page.module.css";

const ListaCompra = ({ peliculas, updateQuantity, removePelicula }) => {
  return (
    <div className={styles.listaCompra}>
      {peliculas.map((pelicula, index) => (
        <ArticuloPelicula
          key={index}
          pelicula={pelicula}
          index={index}
          updateQuantity={updateQuantity}
          removePelicula={removePelicula}
        />
      ))}
    </div>
  );
};

export default ListaCompra;
