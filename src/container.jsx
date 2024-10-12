import React from 'react';

const Contenedor = ({ children }) => {
  return (
    <div style={{ border: '2px solid black'}}>
      {children}
    </div>
  );
};

export default Contenedor;
