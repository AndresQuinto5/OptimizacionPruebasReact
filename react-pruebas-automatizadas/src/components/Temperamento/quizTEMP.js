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
  const san = (quizState.sangineoAnswers/2);
  const col = (quizState.colericoAnswers/2);
  const mel = (quizState.melancolicoAnswers/2);
  const fle = (quizState.flematicoAnswers/2);

  const pieResults = [
    { name: "Sanguineo", Frecuencia: san },
    { name: "Colerico", Frecuencia: col },
    { name: "Melancolico", Frecuencia: mel },
    { name: "Flematico", Frecuencia: fle }
  ];
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div className="exitoprompt">Ha completado con exito el test!</div>
            <div>
              Sangineo {(quizState.sangineoAnswers / 2) }
            </div>
            <div>
              Colerico {(quizState.colericoAnswers /2) }
            </div>
            <div>
              Melancolico {(quizState.melancolicoAnswers / 2) }
            </div>
            <div>
              Flematico {(quizState.flematicoAnswers / 2) }
            </div>
              <BarChart
                width={400}
                height={250}
                data={pieResults}
                margin={{
                  top: 5,
                  right: 30,
                  left: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickCount={5} domain={[0, 40]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Frecuencia" fill="#f16a24" />
          </BarChart>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
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
                  <button type="submit" className="next-button">Comenzar prueba</button>
                </Form>
              </Formik>
            </div>
          :
          <div>
            <div>
              <div className="score">
             Question {quizState.currentQuestionIndex + 1}/
             {quizState.questions.length}
            </div>
             <Question />
             {quizState.currentAnswer && (
              <div>
                <div onClick={() => dispatch({ type: "NEXT_QUESTION" })} className="next-button">Next question</div>
                <div onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })} className="prev-button">Previous question</div>
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