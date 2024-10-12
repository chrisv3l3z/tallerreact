import React from 'react';
import Saludo from './saludo';
import Contenedor from './container';
import Contador from './contador';

const App = () => {
  return (
    <div>
        <Contenedor>
      <Saludo nombre="cristian" idioma="es" />
      </Contenedor><Contenedor>
      <Saludo nombre="David" idioma="en" />
      </Contenedor><Contenedor>
      <Saludo nombre="Mateo" idioma="fr" />
      </Contenedor>
    </div>
  );
};

export default App;

