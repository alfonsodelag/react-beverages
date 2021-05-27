import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    /* No importa mucho el orden en que pongas los providers
    o sea si pones primero Categorias y luego recetas o vice versa */
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>

            <ListaRecetas />

          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
