import {React,useState,useEffect,Fragment} from 'react'
import { Link, useParams } from 'react-router-dom';
import {useSelector } from 'react-redux'

const Detalle = () => {
    const [JsonHeroe, setJsonHeroe] = useState({})
    let id=useParams().id    
    const TodosEquipo = useSelector(store => store.EstadisticaArray.equipo);

    useEffect(() => {
        TodosEquipo.map((e,index) => {
            if (e.id === id) setJsonHeroe(e)
            return(<Fragment key={index}/>)
        })
    }, [id])

    return ( <div>
                {JsonHeroe.name === undefined
                ? (<Fragment/>)
                : (<div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <Link to={`/`} className="btn btn-primary d-block mx-auto mt-5" aria-current="page">Volver</Link>
                        <div className="card mt-2" style={{width:"20rem"}}>
                        <img src={JsonHeroe.image.url} 
                             alt={JsonHeroe.biography["full-name"]}
                             className="card-img-top"
                             style={{maxHeight: "15em"}}
                             />
                        <div className="card-body">
                            <h5 className="card-title text-center">{JsonHeroe.biography["full-name"]}</h5>
                            <h5 className="card-title text-center">Alias:  {JsonHeroe.name}</h5>
                            <p className="card-title ">Peso:  {JsonHeroe.appearance.weight[1]}</p>
                            <p className="card-title ">Altura:  {JsonHeroe.appearance.height[1]}</p>
                            <p className="card-title ">Color de ojo:  {JsonHeroe.appearance["eye-color"]}</p>
                            <p className="card-title ">Color de cabello:  {JsonHeroe.appearance["hair-color"]}</p>
                            <p className="card-title ">Lugar de Trabajo:  {JsonHeroe.work.base}</p>
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
                        </div>
                    </div>
                   </div>
                  )}
            </div>
     )
}
 
export default Detalle;