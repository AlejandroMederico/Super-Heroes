import {Fragment, React} from 'react'
import { Redirect } from 'react-router-dom';
import ListaHeroeHome from '../Componente/ListaHeroeHome'
import Menbrete from '../Componente/Menbrete';
import PaginaFormulario from './PaginaFormulario';


const Home = () => {
    let key = localStorage.getItem('key')
    console.log(key === null)
    return ( 
        <div className="container">
            {key === null
            ?<div>
                <Redirect from='/' to='/iniciarSeccion'/>
                <PaginaFormulario/>
            </div>
            :<Fragment>
                <Menbrete/>
                <ListaHeroeHome />      
            </Fragment>}
        </div>
     );
}
 
export default Home;