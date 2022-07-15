import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";
import { languages } from "../../language";
import { Button } from "bootstrap";
import { Formik, Form, Field } from "formik"; 

const _language = languages["es"];

const Contact = () => {
  const [formularioEnviado,cambiarFormularioEnviado]= useState(false);

  return (
    <div className="container container-web">
      <div className="card card-web">
        <div className="card-body">
            <h5 className="card-title card-title-web">Contacto</h5>
          
               <span>Contactese con nosotros a través del siguiente formulario</span>
                <Formik 
                initialValues={{
                  nombre: '',
                  correo: ''

                }}

                validate={(valores)=> {
                  let errores = {};

                  //Validación del nombre - No vale el nombre del hijo de Elon Musk

                  if(!valores.nombre){
                    errores.nombre = 'Por favor ingrese un nombre'
                  } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre='El nombre solo puede contener letras y espacios'



                  }

                  //Validación del correo electrónico

                  if(!valores.correo){
                    errores.correo = 'Por favor ingrese un correo electrónico'
                  } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                  .test(valores.correo)){
                    errores.correo='El correo solo puede contener letras,números,puntos,guiones y guión bajo'



                  }


                  return errores;


                }




                }
                onSubmit={(valores, {resetForm})=>{
                  resetForm();
                  console.log('Formulario enviado');
                  cambiarFormularioEnviado(true);
                  setTimeout(()=>cambiarFormularioEnviado(false),5000);
                }}
                  
                >
                  {({values,errors,touched,handleSubmit,handleChange,handleBlur}) => (
                <Form className="formulario" onSubmit={handleSubmit}> 
                      <div>
                          <label htmlFor="nombre">Nombre</label>
                          <input 
                          type="text" 
                          id="nombre" 
                          name="nombre" 
                          placeholder="Daniel de Acha" 
                          value={values.nombre}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          />
                          {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                  
                        </div>
                        <div> 
                          <label htmlFor="correo">Correo</label>
                          <input 
                          type="email" 
                          id="correo" 
                          name="correo" 
                          placeholder="tucorreo@elcorreo.com" 
                          value={values.correo} 
                          onChange={handleChange}
                          onBlur={handleBlur}
                          />
                           {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                        </div>

                        <div>
                          <Field name="mensaje" as="textarea" placeholder="Escriba su mensaje" />
                        </div>
                        
                          <button type="submit">Enviar</button>

                           {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
                  
                    




                      
                </Form>
                  )} 
                  </Formik>

                
            </div>
      </div>
    </div>
  );
};

export default Contact;
