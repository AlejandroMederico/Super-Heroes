import React from 'react'
import {useSelector } from 'react-redux'
// import '../style.css'

const NumeroEquipo = () => {
    let good=0, bad=0;
    const todasLasEstadistica = useSelector(store => store.EstadisticaArray.equipo);
    // console.log(todasLasEstadistica);
    todasLasEstadistica.forEach(e => {
        // console.log(e.biography.alignment);
        if (e.biography.alignment === "good") good=good+1;
        if (e.biography.alignment === "bad") bad=bad+1;

    })
    return ( <div className="mt-3 row">
                <h3 className="text-primary text-center col-12 mb-3">Equipo  : {good+bad}/6 </h3>
                <h5 className="text-primary text-center col-6 col-md-12 ">Heroe Good : {good}</h5>
                <h5 className="text-primary text-center col-6 col-md-12 ">Heroe Bad : {bad}</h5>

                {(good+bad) === 6 
                  ? <h5 className="text-primary text-center mt-2 col-12 ">Equipo Completo</h5>
                  : <h5 className="text-primary text-center mt-2 col-12 ">Equipo Incompleto </h5>
                }
            </div> );
}
 
export default NumeroEquipo;