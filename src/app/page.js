// page.js
'use client'; // Asegura que es un componente del cliente
import React from 'react';
import App from "@/componentes/App";
import styles from "@/app/page.module.css";

const Page = () => {
  return (
    <div className={styles.appContainer}>
      <App />
    </div>
  );
};

export default Page;