import {React,useState} from 'react'
import CardHeroe from './CardHeroe'
import LeerDatos from './LeerDatos'


const ListaSuperHeroes = ({heroe}) => {
    const [ArrayBusqueda, setArrayBusqueda] = useState([])
    // let key = localStorage.getItem('key')
    // useEffect(() => {
    //     const obtenerDatos = async() =>{
    //         try {const data = await fetch(`https://www.superheroapi.com/api.php/${key}/search/${heroe}`)
    //         const user = await data.json()
    //         const datoFinal= user.results
    //         datoFinal === undefined ? setArrayBusqueda([]) : setArrayBusqueda(datoFinal)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     obtenerDatos()
    // }, [heroe])
    
const dato = (e) =>{
    // console.log(e);
    e === undefined ? setArrayBusqueda([]) : setArrayBusqueda(e)
}

    return ( 
            <div className="col-12 col-sm-9">
            {
                            heroe === ""
                            ? <h1 className="text-center text-primary mt-5">Ingrese un Heroe al Buscador</h1>
                            : (<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-3 "> 
                                {ArrayBusqueda.map ((e,index) => <CardHeroe
                                                                key={index}
                                                                nombre={e.name}
                                                                img={e.image.url}
                                                                id={e.id}
                                                                jsonHeroe={e}
                                                                />)}
                                <LeerDatos heroe={heroe} dato={dato}/>
                                </div>)
           }
            </div>

     );
}
 
export default ListaSuperHeroes;