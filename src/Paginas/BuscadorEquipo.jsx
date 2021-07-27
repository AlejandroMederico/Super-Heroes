import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import FormularioEquipo from '../Componente/FormularioEquipo'
import ListaSuperHeroes from '../Componente/ListaSuperHeroes';
import PaginaFormulario from './PaginaFormulario';


const BuscadorEquipo = () => {
    const [heroe, setheroe] = useState("")
    const BusquedaHeroe = (e) =>{setheroe(e)}
    let key = localStorage.getItem('key')
    // console.log(key === null)
    return ( 
        <div >
            {key === null
            ?<div>
                <Redirect from='/buscar' to='/iniciarSeccion'/>
                <PaginaFormulario/>
            </div>
            :<div className="row">
            <FormularioEquipo BusquedaHeroe={BusquedaHeroe} /> 
            <ListaSuperHeroes heroe={heroe} />
             </div>
            }
        </div>
     );
}
 
export default BuscadorEquipo;


