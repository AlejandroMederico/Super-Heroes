import {React} from 'react'
import CardHeroeHome from './CardHeroeHome'
import {useSelector } from 'react-redux'

const ListaHeroeHome = () => {
    const todasLasEstadistica = useSelector(store => store.EstadisticaArray.equipo);
    console.log(todasLasEstadistica);
    return ( 
        <div>
            {
                todasLasEstadistica === []
                ? <h1>Iniciar seccion</h1>
                : (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"> 
                    {todasLasEstadistica.map ((e,index) => <CardHeroeHome 
                                                key={index} 
                                                JsonHeroe={e}/>
                                                )}
                    </div>
                   )
            }
         </div>
    )

}
 
export default ListaHeroeHome;