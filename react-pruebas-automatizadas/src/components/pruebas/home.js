import React, { useState } from "react";
import { Formik, Field, Form } from 'formik';
import { store } from '../../contexts/store';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import {  saveIdArray, setComplete } from '../../contexts/store';
import emailjs from '@emailjs/browser';
import { sendEmail } from "../../contexts/SendEmail";
import './home.css'


function Home(props) {
const [name, setName] = useState("");
const [identification, setIdentification] = useState("");
const [complete, setComplete] = useState(false);
const [idDatos, setIdDatos] = useState({});
const [formComplete, setFormComplete] = useState(false);

//apartado de store
const dispatch = useDispatch();
const templateFinal = useSelector((state) => state.templateFinal);

const handleSendIdArray = (a) => {
  props.saveIdArray(a);
  console.log(a);
  //dispatch({ type: 'SET_COMPLETE', payload: true });
}
const handleSetState = (a) => {
  props.setComplete(a);
  console.log("set complete");
}
const handleMergeArrays = () => {
  dispatch({ type: 'MERGE_ARRAYS' });
  console.log("merging arrays...");
};

//console.log(sendEmail())
return (
  <div style={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
<div style={{ padding: "20px", maxWidth: "500px", width: "100%" }}>
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
                  const regexDPI = /^\d{13}$/;
                  const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|yahoo|hotmail)\.(com|net|org|edu|info)$/i;

                  if (values.apellido == "" || values.nombre == "" || values.correo == "" || values.dpi == ""){
                    alert("Tiene que llenar todo el formulario");
                    handleSetState(false);
                  }
                  else if (!regexDPI.test(values.dpi)) {
                    alert("El DPI debe tener 13 dígitos");
                    handleSetState(false);
                  } 
                  else if (!emailRegex.test(values.correo)) {
                    console.log("Correo no válido:", values.correo);
                    alert("El correo debe ser válido y tener una de las terminaciones permitidas (gmail, outlook, yahoo o hotmail)");
                    setComplete(false);
                    handleSetState(false);
                  }
                  else
                  {
                    // aqui va para que guarde la info del usuario
                    setIdentification(values);
                    setIdDatos(values);
                    handleSendIdArray(values);
                    handleMergeArrays();
                    handleSetState(true);
                    //sendEmail();
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
</div>

);}

const mapStateToProps = (state) => ({
  templateFinal: state.templateFinal,
});

const mapDispatchToProps = (dispatch) => ({
  saveIdArray: (identification) => dispatch(saveIdArray(identification)),
  setComplete: (complete) => dispatch(setComplete(complete)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);