import { useContext } from "react";
import { Formik, Field, Form } from 'formik';
import Question from "./QuestionTEMP";
import { QuizContext } from "../../contexts/quizTemperamento";
import "./quiz.css";
import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip} from "recharts";


const Quiz = () => {

  const [quizState, dispatch] = useContext(QuizContext);
  const [complete, setComplete] = useState(false);
  const san = (quizState.sangineoAnswers/2)*2.5;
  const col = (quizState.colericoAnswers/2)*2.5;
  const mel = (quizState.melancolicoAnswers/2)*2.5;
  const fle = (quizState.flematicoAnswers/2)*2.5;
  const pieResults = [
    { name: "Sanguineo", value: san },
    { name: "Colerico", value: col },
    { name: "Melancolico", value: mel },
    { name: "Flematico", value: fle }
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" >
        {`${(percent * 100).toFixed(0)}% `}
        {pieResults[index].name}
      </text>
    );
  };
  
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
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
            <PieChart width={400} height={400}>
              <Pie
                  data={pieResults}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#black"
                  dataKey="value"
                >
                  {pieResults.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
              </Pie>
          </PieChart>
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