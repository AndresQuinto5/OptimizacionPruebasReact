import React, { useState } from "react";
import { sendEmail , alo} from "../../contexts/SendEmail";
import { Formik, Field, Form } from 'formik';

function Home() {
const [name, setName] = useState("");
const [identification, setIdentification] = useState("");
const [complete, setComplete] = useState(false);

//console.log(sendEmail())
return (
<div style={{ padding: "20px" }}>
<h3>Contenido de la página principal o definir otra prueba aquí</h3>
<Formik
                initialValues={{
                  nombre: '',
                  apellido: '',
                  correo: '',
                  dpi: '',
                }}
                onSubmit={async (values) => {
                  console.log(values)
                  if (values.apellido == "" || values.nombre == "" || values.correo == "" || values.dpi == ""){
                    alert("Tiene que llenar todo el formulario");
                    setComplete(false)
                  }else{
                    // aqui va para que guarde la info del usuario
                    setComplete(true)
                    
                  }
                }}
              >
                <Form>
                  <label htmlFor="nombre">Nombre</label>
                  <br></br>
                  <Field id="nombre" name="nombre" />
                  <br></br>
                  <br></br>
                  <label htmlFor="apellido">Apellido</label>
                  <br></br>
                  <Field id="apellido" name="apellido" />
                  <br></br>
                  <br></br>
                  <label htmlFor="correo">Correo Clectronico</label>
                  <br></br>
                  <Field id="correo" name="correo" />
                  <br></br>
                  <br></br>
                  <label htmlFor="dpi">DPI</label>
                  <br></br>
                  <Field id="dpi" name="dpi" maxLength="13" />
                  <br></br>
                  <br></br>
                  <button type="submit" className="form-button">Comenzar prueba</button>
                </Form>
              </Formik>
</div>
);
}

export default Home;