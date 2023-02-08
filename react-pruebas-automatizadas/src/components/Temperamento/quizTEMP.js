import { useContext } from "react";
import { Formik, Field, Form } from 'formik';
import Question from "./QuestionTEMP";
import { QuizContext } from "../../contexts/quizTemperamento";
import "./quiz.css";
import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";






const Quiz = () => {

  const [quizState, dispatch] = useContext(QuizContext);
  const [complete, setComplete] = useState(false);
  //data normalization for chart
  const san = (quizState.sangineoAnswers);
  const col = (quizState.colericoAnswers);
  const mel = (quizState.melancolicoAnswers);
  const fle = (quizState.flematicoAnswers);

  const pieResults = [
    { name: "Sanguíneo", Frecuencia: san },
    { name: "Colérico", Frecuencia: col },
    { name: "Melancólico", Frecuencia: mel },
    { name: "Flemático", Frecuencia: fle }
  ];
  return (
    <div className="quiz">
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

              

            </div>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="restart-button"
          >
            Reiniciar
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