import {React,Fragment} from 'react';
import {useDispatch,useSelector } from 'react-redux'
import {agregarAlEquipoAction} from '../redux/EstadisticaDuck';
import '../style.css'

const CardHeroe = ({nombre,img,jsonHeroe}) => {
    let good=0, bad=0, repetido=0;
    const dispatch= useDispatch()
    const todasLasEstadistica = useSelector(store => store.EstadisticaArray.equipo);
    // console.log(todasLasEstadistica);
   
    const agregar = () =>{
        if (todasLasEstadistica.length < 6) {
            
            todasLasEstadistica.forEach(e => {
                console.log(e.biography.alignment);
                if (e.biography.alignment === "good") good=good+1;
                if (e.biography.alignment === "bad") bad=bad+1;
                if (e.id === jsonHeroe.id) repetido=1;
        
            });
            // console.log(!repetido);
            if(!repetido){
                if (jsonHeroe.biography.alignment === "good"){
                    if (good<3){dispatch(agregarAlEquipoAction(jsonHeroe))}
                       else{alert("Por favor ingrese Heroe Malo para completar el grupo 6")}}
                if (jsonHeroe.biography.alignment === "bad"){
                    if (bad<3){dispatch(agregarAlEquipoAction(jsonHeroe))}
                        else{alert("Por favor ingrese Heroe buenos  para completar el grupo 6")}}
            }
        }else alert("Ya tienes el equipo completo")
    }

    return (  
        <Fragment>
            <div className="col">
                <div className="card card580px card770px">
                        <img 
                        src={img} alt={nombre} 
                        className="card-img-top imagen480 mx-auto"
                        style={{maxHeight: "13em"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                        </div>
                        <button type="button" 
                        className="btn btn-primary" 
                        onClick={agregar}>
                        Agregar</button>
                </div>
            </div>
        </Fragment>
    );
}
 
export default CardHeroe;