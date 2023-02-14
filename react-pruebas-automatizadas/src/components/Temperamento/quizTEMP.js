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


const Quiz = () => {

  const [quizState, dispatch] = useContext(QuizContext);
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

  var templateParams2 = {
    name: 'James',
    notes: 'Check this out!',
    sangineo: san,
    colerico: col,
    melancolico: mel,
    flematico: fle,
    sobre100S: san100.toFixed(2),
    sobre100C: col100.toFixed(2),
    sobre100M: mel100.toFixed(2),
    sobre100F: fle100.toFixed(2),
    FS: FS,
    FC: FC,
    FM: FM,
    FF: FF,
    DS: DS,
    DC: DC,
    DM: DM,
    DF: DF
  };
  console.log(templateParams2);
  const pieResults = [
    { name: "Sanguíneo", Frecuencia: san },
    { name: "Colérico", Frecuencia: col },
    { name: "Melancólico", Frecuencia: mel },
    { name: "Flemático", Frecuencia: fle }
  ];
  
  function sendEmail22(a) {
    emailjs.send('service_ljon6t8', 'template_9shod4j', templateParams2, 'dw7yxB6O6v4NSfxS0')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
  }

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

  return (
    
    <div className="quiz">
      <button onClick={handleSendEmail}>Enviar correo Temperamento</button>
      <button onClick={handleMergeArrays}>Merge arrays</button>
      {quizState.showResults && (
        <div className="results">
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
          
          <button onClick={ArrayTemperamento}>Enviar resultados correo</button>
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
                  onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
                  className="prev-button"
                >
                  Anterior
                </div>
              )}
            {quizState.currentAnswer && (
              <div>
                <div onClick={() => dispatch({ type: "NEXT_QUESTION" })} className="next-button">Siguiente</div>
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

export default Quiz;