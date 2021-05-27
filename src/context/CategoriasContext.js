import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

// Crear el Context 
export const CategoriasContext = createContext();

// Provider es donde se encuentras las funciones y state
// ! Siempre se le pasa "props" al Provider
const CategoriasProvider = (props) => {
    // Crear el state del context
    // eslint-disable-next-line no-unused-vars
    const [categorias, guardarCategorias] = useState([]);

    // Ejecutar el llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

            const categorias = await axios.get(url)

            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();

    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {/* Gracias a props.children los otros componentes como App o Formulario estarán dentro de props.children y de esa forma se pasarán los datos */}
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;