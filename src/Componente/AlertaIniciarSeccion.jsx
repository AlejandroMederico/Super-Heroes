import React, { Fragment } from 'react'
const AlertaIniciarSeccion = ({info}) => {
    return ( 
        <Fragment>
        <div className="alert alert-warning d-flex align-items-center mt-4" role="alert">
            <div>
               <p>{info}</p> 
            </div>
        </div>
        </Fragment>
        
     );
}
 
export default AlertaIniciarSeccion;