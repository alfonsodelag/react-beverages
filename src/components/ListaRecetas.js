import React, { useContext } from 'react'
import { RecetasContext } from '../context/RecetasContext'
import Receta from './Receta';

function ListaRecetas() {

    // Extraer las recetas
    const { recetas } = useContext(RecetasContext);

    console.log(recetas)

    return (
        <div>
            <div className="row mt-5">
                {recetas.map(receta => (
                    <Receta
                        key={receta.idDrink}
                        receta={receta}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListaRecetas
