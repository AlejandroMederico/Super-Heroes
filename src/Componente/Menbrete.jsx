import React, { Fragment } from 'react'
import {useSelector } from 'react-redux'
import AlertaIniciarSeccion from './AlertaIniciarSeccion';

const Menbrete = () => {
    const todasLasEstadistica = useSelector(store => store.EstadisticaArray.equipo);
    console.log(todasLasEstadistica.length );
    let combate=0,durabilidad=0,inteligencia=0,poder=0,velocidad=0,fuerza=0,alturaTotal=0,pesoTotal=0;
return ( <div>
           {
                todasLasEstadistica.length === 0
                ? <AlertaIniciarSeccion info={"Por Favor Buscar heroe. Gracias!!"}/>
                :<div>
                {     
                    todasLasEstadistica.map((e,index) =>{
                                                    let combatFor=parseInt(e.powerstats.combat)
                                                    isNaN(combatFor) ? combate=combate+0 : combate=combate+combatFor
                  
                                                    let durabilityFor=parseInt(e.powerstats.durability)
                                                    isNaN(durabilityFor) ? durabilidad=durabilidad+0 : durabilidad=durabilidad+durabilityFor

                                                    let intelligenceFor=parseInt(e.powerstats.intelligence)
                                                    isNaN(intelligenceFor) ? inteligencia=inteligencia+0 : inteligencia=inteligencia+intelligenceFor
                                                    
                                                    let powerFor=parseInt(e.powerstats.power)
                                                    isNaN(powerFor) ? poder=poder+0 : poder=poder+powerFor

                                                    let speedFor=parseInt(e.powerstats.speed)
                                                    isNaN(speedFor)? velocidad=velocidad+0 : velocidad=velocidad+speedFor

                                                    let strengthFor=parseInt(e.powerstats.strength)
                                                    isNaN(strengthFor) ? fuerza=fuerza+0 : fuerza=fuerza+strengthFor
                                                    return(<Fragment key={index}/>)
                                                    })
                }
                
                {(combate > durabilidad && 
                  combate > inteligencia && 
                  combate > poder &&
                  combate > velocidad &&
                  combate > fuerza) ? <h1 className="text-center text-primary mt-2">El equipo es de Combate</h1>
                  :<p></p>}
                  {(durabilidad > combate && 
                  durabilidad > inteligencia && 
                  durabilidad > poder &&
                  durabilidad > velocidad &&
                  durabilidad > fuerza) ? <h1 className="text-center text-primary mt-2">El equipo es de Durisimo</h1>
                  :<p></p>}
                  {(inteligencia > combate && 
                  inteligencia > durabilidad && 
                  inteligencia > poder &&
                  inteligencia > velocidad &&
                  inteligencia > fuerza) ? <h1 className="text-center text-primary mt-2">El equipo es Inteligente</h1>
                  :<p></p>}
                  {(poder > combate && 
                  poder > durabilidad && 
                  poder > inteligencia &&
                  poder > velocidad &&
                  poder > fuerza) ? <h1 className="text-center text-primary mt-2">El equipo tiene Poder</h1>
                  :<p></p>}
                  {(velocidad > combate && 
                  velocidad > durabilidad && 
                  velocidad > inteligencia &&
                  velocidad > poder &&
                  velocidad > fuerza) ? <h1 className="text-center text-primary mt-2">El equipo tiene Velociddad</h1>
                  :<p></p>}
                  {(velocidad > combate && 
                  fuerza > durabilidad && 
                  fuerza > inteligencia &&
                  fuerza > poder &&
                  fuerza > velocidad) ? <h1 className="text-center text-primary mt-2">El equipo es Fuerte</h1>
                  :<p></p>}
                {todasLasEstadistica.map(e =>{
                  let altura =e.appearance.height[1];
                  let alturaiNT=parseInt (altura.slice(0,altura.indexOf(" ")));
                  alturaTotal=alturaTotal+alturaiNT;

                  let peso = e.appearance.weight[1]
                  let pesoInt=parseInt (peso.slice(0,peso.indexOf(" ")));
                  pesoTotal=pesoTotal+pesoInt
                  return(<Fragment></Fragment>)
                })}
                  <div className="row justify-content-evenly">
                    <div className="col-10 col-md-4">
                      <p className="text-primary text-center h5">Estadistica Total : {combate+durabilidad+inteligencia+poder+velocidad+fuerza}</p>
                    </div>
                    <div className="col-6 col-md-4 text-center h5 home">
                      <p className="text-primary">Peso Promedio: {(pesoTotal/todasLasEstadistica.length).toFixed(0)} Kg</p>
                    </div>
                    <div className="col-6 col-md-4 text-center h5 home">
                      <p className="text-primary">Altura Promedio: {(alturaTotal/todasLasEstadistica.length).toFixed(0)} Cm</p>
                    </div>
                  </div>
                </div>
            }
  </div> );
}   
 
export default Menbrete;


