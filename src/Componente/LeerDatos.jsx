import {React, Fragment,useEffect} from 'react'

const LeerDatos = ({heroe,dato}) => {
    let key = localStorage.getItem('key')
    const axios = require('axios')
    useEffect(() => {
        const obtenerDatos = async() =>{
            try {const { data } = await axios.get(`https://www.superheroapi.com/api.php/${key}/search/${heroe}`)
            const datoFinal= data.results
            datoFinal === undefined ? dato([]) : dato(datoFinal)
            // console.log(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerDatos()
    }, [heroe])
    
    return ( 
        <Fragment>
        </Fragment>
     );
}
 
export default LeerDatos;