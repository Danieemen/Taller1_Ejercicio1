// App.jsx
import React, { useState, useEffect } from 'react';
import SelectorPeliculas from "@/componentes/SelectorPeliculas";
import ListaCompra from "@/componentes/ListaCompra";
import styles from "@/app/page.module.css";

const App = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [total, setTotal] = useState(0);

  const addPelicula = (pelicula) => {
    setPeliculas([...peliculas, pelicula]);
  };

  const updateQuantity = (index, quantity) => {
    const updatedPeliculas = peliculas.map((pelicula, i) =>
      i === index ? { ...pelicula, quantity: Number(quantity) } : pelicula
    );
    setPeliculas(updatedPeliculas);
  };

  const removePelicula = (index) => {
    const updatedPeliculas = peliculas.filter((_, i) => i !== index);
    setPeliculas(updatedPeliculas);
  };

  const calculateTotal = () => {
    const total = peliculas.reduce((acc, pelicula) => acc + pelicula.precio * pelicula.quantity, 0);
    setTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [peliculas]);

  return (
    <div className={styles.appContainer}>
      <h1>Lista de compra de peliculas</h1>
      <SelectorPeliculas addPelicula={addPelicula} />
      <ListaCompra
        peliculas={peliculas}
        updateQuantity={updateQuantity}
        removePelicula={removePelicula}
      />
      <div className={styles.total}>
        <span>Total: ${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default App;


