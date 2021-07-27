import React from 'react';
import {useFormik } from 'formik';
import * as Yup from 'yup';
import NumeroEquipo from './NumeroEquipo'
import '../style.css'

const FormularioEquipo = ({BusquedaHeroe}) => {

    const formik = useFormik({
        initialValues:{
            nombre:""
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Introduzca el nombre del Heroe")
        }),
        onSubmit: (formData) => {
            BusquedaHeroe(formData.nombre)
        }
    })
    // console.log(formik.values.nombre);
          return (
                <div className="col-8 col-md-3 blanco mt-3  p-3 mx-auto" style={{maxHeight:"450px"}}>
                  <h3 className="my-4 font-weight-bold text-primary text-center">Nombre del Heroe</h3>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <input 
                            name="nombre"
                            onChange={formik.handleChange}
                            type="nombre" 
                            className="form-control"
                            aria-describedby="nombreHelp"
                            error={formik.errors.nombre}
                         />
                         {<p className="text-danger">{formik.errors.nombre}</p>
                         
                         }
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button 
                        type="submit" 
                        className="btn btn-primary "
                        >
                        Buscar
                        </button>
                    </div>
                  </form>
                  <NumeroEquipo/>
                </div>
     );
}
 
export default FormularioEquipo;