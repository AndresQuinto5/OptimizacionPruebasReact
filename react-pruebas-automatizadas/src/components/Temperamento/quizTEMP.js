import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import {  saveTemplateParams, saveTemplateParams2  } from '../../contexts/store';
import { useContext } from "react";
import { Formik, Field, Form } from 'formik';
import Question from "./QuestionTEMP";
import { QuizContext } from "../../contexts/quizTemperamento";
import "./quiz.css";
import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import emailjs from '@emailjs/browser';
import { sendEmail, mergeArrays, ArrayTemperamento } from "../../contexts/SendEmail";
import { Context } from '../../contexts/contextEmail';

const Quiz = (props) => {

  const [quizState, dispatch22] = useContext(QuizContext);
  const [complete, setComplete] = useState(false);
  //data normalization for chart
  const san = (quizState.sangineoAnswers);
  const col = (quizState.colericoAnswers);
  const mel = (quizState.melancolicoAnswers);
  const fle = (quizState.flematicoAnswers);
  const san100 = ((quizState.sangineoAnswers)/40)*100;
  const col100 = ((quizState.colericoAnswers)/40)*100;
  const mel100 = ((quizState.melancolicoAnswers)/40)*100;
  const fle100 = ((quizState.flematicoAnswers)/40)*100;
  const FS = (quizState.FS);
  const FC = (quizState.FC);
  const FM = (quizState.FM);
  const FF = (quizState.FF);
  const DS = (quizState.DS);
  const DC = (quizState.DC);
  const DM = (quizState.DM);
  const DF = (quizState.DF);

  //apartado de store
  const dispatch = useDispatch();
  const templateFinal = useSelector((state) => state.templateFinal);
  
  var templateParams2 = quizState.templateParams;

  
  const pieResults = [
    { name: "Sanguíneo", Frecuencia: san },
    { name: "Colérico", Frecuencia: col },
    { name: "Melancólico", Frecuencia: mel },
    { name: "Flemático", Frecuencia: fle }
  ];
  
  


  const handleSendEmail2 = () => {
    props.saveTemplateParams2(quizState.templateParams);
  };

  const handleMergeArrays = () => {
    dispatch({ type: 'MERGE_ARRAYS' });
    console.log("redux");
  };

  function sendEmail22(a) {
    emailjs.send('service_ljon6t8', 'template_9shod4j', templateParams2, 'dw7yxB6O6v4NSfxS0')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
  }
  /*
  const { arrayTemp, setArrayTemp } = useContext(Context);
  const { mergeArrays } = useContext(Context);

  const handleMergeArrays = () => {
    const templateFinal = mergeArrays();
    console.log(templateFinal);
  };

  const handleSendEmail = () => {
    setArrayTemp({ ...arrayTemp, ...templateParams2 });
    console.log(arrayTemp);
    }
*/
  return (
    
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <button onClick={handleSendEmail2}>Enviar correo 2</button>
          <button onClick={handleMergeArrays}>Merge arrays aqui</button>

          <pre>{JSON.stringify(templateFinal, null, 2)}</pre>
          <div className="congratulations">Ha completado con exito el test!!</div>
          <div className="results-info">
            <div className="exitoprompt">Sus resultados son:</div>
            <div className="sanguineo">
              Sanguíneo {(quizState.sangineoAnswers) }
            </div>
            <div className="colerico">
              Colérico {(quizState.colericoAnswers) }
            </div>
            <div className="melancolico">
              Melancólico {(quizState.melancolicoAnswers) }
            </div>
            <div className="flematico">
              Flemático {(quizState.flematicoAnswers) }
            </div>
            <div className="grafico">
            <BarChart
                width={465}
                height={300}
                data={pieResults}
                margin={{
                  top: 5,
                  right: 20,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickCount={5} domain={[0, 40]} />
                <Tooltip />
                <Bar dataKey="Frecuencia" fill="#f16a24" />
            </BarChart>
          
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults ?
        <div>
          {!complete ? 
            <div>
              <p>
                Por favor llenar los datos del formulario para poder tomar la prueba de temperamento.
              </p>
              <br></br>
              <Formik
                initialValues={{
                  nombre: '',
                  apellido: '',
                  dpi: '',
                }}
                onSubmit={async (values) => {
                  console.log(values)
                  if (values.apellido == "" || values.nombre == "" || values.dpi == ""){
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
                  <label htmlFor="dpi">DPI</label>
                  <br></br>
                  <Field id="dpi" name="dpi" maxLength="13" />
                  <br></br>
                  <br></br>
                  <button type="submit" className="form-button">Comenzar prueba</button>
                </Form>
              </Formik>
            </div>
          :
          <div>
            <div>
              <div className="score">
             Pregunta {quizState.currentQuestionIndex + 1}/
             {quizState.questions.length}
            </div>
             <Question />
             {quizState.currentQuestionIndex !== 0 && (
                <div
                  onClick={() => dispatch22({ type: "PREVIOUS_QUESTION" })}
                  className="prev-button"
                >
                  Anterior
                </div>
              )}
            {quizState.currentAnswer && (
              <div>
                <div onClick={() => dispatch22({ type: "NEXT_QUESTION" })} className="next-button">Siguiente</div>
              </div>
            )}
              
              
          </div></div>}
        </div>
      :
        <div></div>
      }
      
    </div>
  );
};
const mapStateToProps = (state) => ({
  templateFinal: state.templateFinal,
});

const mapDispatchToProps = (dispatch) => ({
  saveTemplateParams2: (templateParams2) => dispatch(saveTemplateParams2(templateParams2)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);