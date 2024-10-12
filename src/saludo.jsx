import React from 'react';

const Saludo = ({ nombre, idioma }) => {
  let mensaje;

  switch (idioma) {
    case 'es':
      mensaje = `¡Hola, ${nombre}!`;
      break;
    case 'en':
      mensaje = `Hello, ${nombre}!`;
      break;
    case 'fr':
      mensaje = `Bonjour, ${nombre}!`;
      break;
    default:
      mensaje = `¡Hola, ${nombre}!`; // idioma por defecto
  }

  return (
    <div>
      <h1>{mensaje}</h1>
    </div>
  );
};

export default Saludo;
