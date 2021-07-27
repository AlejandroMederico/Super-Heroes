import React,{ Fragment} from 'react'
import { Link } from 'react-router-dom'

import {useDispatch,useSelector } from 'react-redux'
import {actualizarEquipoAction} from '../redux/EstadisticaDuck';

const CardHeroeHome = ({JsonHeroe}) => {
    const dispatch= useDispatch()
    const todasLasEstadistica = useSelector(store => store.EstadisticaArray.equipo);
    const eliminar = () =>{
        // console.log(todasLasEstadistica);
        const nuevo = todasLasEstadistica.filter(e => e.id !== JsonHeroe.id)
        // console.log(nuevo);
        dispatch(actualizarEquipoAction(nuevo))
    }
    
    return (
        <div>
            {JsonHeroe.name === undefined
          ? (<Fragment/>)
          : (
            <div className="col">
                <div className="card card580px p-2">
                        <img src={JsonHeroe.image.url} 
                             alt={JsonHeroe.name}
                             className="card-img-top"
                             style={{maxHeight: "16.5em"}}
                             />
                        <div className="card-body">
                            <h5 className="card-title">{JsonHeroe.name}</h5>
                        </div>
                         {/* COMBAT */}
                        <p>Combat</p>
                         <div className="progress"> 
                            <div className="progress-bar ml-4 mr-4" 
                                 role="progressbar" 
                                 style={{width:`${JsonHeroe.powerstats.combat}%`}} 
                                 aria-valuemin="0" 
                                 aria-valuemax="100"
                            >{JsonHeroe.powerstats.combat}%</div>
                        </div>
                        {/* durability */}
                        <p>Durability</p>
                        <div className="progress"> 
                            <div className="progress-bar ml-4 mr-4" 
                                 role="progressbar" 
                                 style={{width:`${JsonHeroe.powerstats.durability}%`}} 
                                 aria-valuemin="0" 
                                 aria-valuemax="100"
                            >{JsonHeroe.powerstats.durability}%</div>
                        </div>
                        {/* intelligence */}
                        <p>Intelligence</p>
                        <div className="progress"> 
                            <div className="progress-bar ml-4 mr-4" 
                                 role="progressbar" 
                                 style={{width:`${JsonHeroe.powerstats.intelligence}%`}} 
                                 aria-valuemin="0" 
                                 aria-valuemax="100"
                            >{JsonHeroe.powerstats.intelligence}%</div>
                        </div>
                        {/* power */}
                        <p>Power</p>
                        <div className="progress"> 
                            <div className="progress-bar ml-4 mr-4" 
                                 role="progressbar" 
                                 style={{width:`${JsonHeroe.powerstats.power}%`}} 
                                 aria-valuemin="0" 
                                 aria-valuemax="100"
                            >{JsonHeroe.powerstats.power}%</div>
                        </div>
                        {/* speed */}
                        <p>Speed</p>
                        <div className="progress"> 
                            <div className="progress-bar ml-4 mr-4" 
                                 role="progressbar" 
                                 style={{width:`${JsonHeroe.powerstats.speed}%`}} 
                                 aria-valuemin="0" 
                                 aria-valuemax="100"
                            >{JsonHeroe.powerstats.speed}%</div>
                        </div>
                        {/* strength */}
                        <p>Strength</p>
                        <div className="progress"> 
                            <div className="progress-bar ml-4 mr-4" 
                                 role="progressbar" 
                                 style={{width:`${JsonHeroe.powerstats.strength}%`}} 
                                 aria-valuemin="0" 
                                 aria-valuemax="100"
                            >{JsonHeroe.powerstats.strength}%</div>
                        </div>
                        <div className="d-grid gap-2 d-flex justify-content-evenly">
                            <button className="btn btn-danger mt-3 mb-3" type="button" onClick={eliminar}>Eliminar</button>
                            <Link to={`/${JsonHeroe.id}`} className="btn btn-primary mt-3 mb-3" aria-current="page">+  Info</Link>
                        </div>
                </div>
            </div>
           )}
        </div>
        
     )
}
 
export default CardHeroeHome;