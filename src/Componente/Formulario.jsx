import {Fragment, React,useState} from 'react';
import {useFormik } from 'formik';
import * as Yup from 'yup';

import FacebookLogin from 'react-facebook-login';
import {Redirect} from "react-router-dom";
import Home from '../Paginas/Home';

const Formulario = () => {
    const [IngresoBien, setIngresoBien] = useState(false)
    const axios = require('axios').default;
    const responseFacebook = (response) => {
        console.log(response.id)
        localStorage.setItem('key2',response.id)
        localStorage.setItem('key','1909215045907052')
      }
    const componentClicked = () => {
        console.log("OnclickFaceBokk")
    }

    const formik = useFormik({
        initialValues:{
            email:"",
            clave:"",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("No es un email").required("Requiere el Email"),
            clave: Yup.string().required("Requiere la clave").min(8,"Coloque 8 caracteres como Minimo"),
        }),
        onSubmit: (formData) => {
            console.log(formData);
            localStorage.setItem('key','1909215045907052')
            axios.post('http://challenge-react.alkemy.org/', {
                body: JSON.stringify(formData)
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                // alert("No se pudo ingresar por error :",error );
              });
              setIngresoBien(true)
        }
    })
   return (
        <Fragment>
            {IngresoBien === false
            ? <div>
                        <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                        <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleInputEmail1" 
                                className="form-label">
                                Email address
                            </label>
                            <input 
                                name="email"
                                onChange={formik.handleChange}
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                error={formik.errors.email}
                            />
                            {<p className="text-danger">{formik.errors.email}</p>
                            
                            }
                        </div>
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleInputPassword1" 
                                className="form-label">
                                Password
                            </label>
                            <input 
                                name="clave"
                                onChange={formik.handleChange}
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1"
                                error={formik.errors.C}
                            />
                            {<p className="text-danger">{formik.errors.clave}</p>
                            
                            }
                        </div>
                        <div className="row mx-auto">
                            <button 
                            type="submit" 
                            className="btn btn-primary d-block mx-auto px-1 col-8  my-2 anchoMin200px">
                            Enviar Datos
                            </button>
                            <FacebookLogin
                                appId="906973040174650"
                                autoLoad={false}
                                fields="name,email,picture"
                                cssClass="btn btn-primary d-block mx-auto px-2 col-9  my-2 anchoMin200px"
                                size='metro'
                                textButton="Ingresar por Facebook"
                                onClick={componentClicked}
                                callback={responseFacebook} />  
                        </div>     
                        </form>
                </div>
                :<div>
                    <Redirect from='/iniciarSecciond' to='/'/>
                    <Home/>
                </div>
            }
            
        </Fragment>              
     );
}
 
export default Formulario;