import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import {  saveTemplateParams, saveTemplateParams2, banderaTEMP, setBanderaTEMP  } from '../../contexts/store';
import { useContext } from "react";
import { Formik, Field, Form } from 'formik';
import Question from "./QuestionTEMP";
import { QuizContext } from "../../contexts/quizTemperamento";
import "./quiz.css";
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import emailjs from '@emailjs/browser';
import { sendEmail, mergeArrays, ArrayTemperamento } from "../../contexts/SendEmail";
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

/*
  Este archivo tiene la finalidad de importar los resultados de los quiz del context de su prueba correspondiente
  ademas, se encarga de la reporteria de los datos obtenidos en el quiz, como tambien el manejo de las banderas para la barra de progreso una vez finalizado el test
  al final de este archivo por medio de los handlers se actualiza el store con los datos obtenidos en el quiz
*/

const Quiz = (props) => {
  const complete = useSelector((state) => state.complete);
  const [quizState, dispatch22] = useContext(QuizContext);
  const [banderaTEMP, setBanderaTEMP] = useState(false);
  //const [complete, setComplete] = useState(false);
  //para actualizar el store de manera continua
  const showResults = quizState.showResults;
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
  };

  const handleBanderaTEMP = (y) => {
    props.setBanderaTEMP(y);
  };

  useEffect(() => {
    if (showResults) {
      handleSendEmail2();
      handleMergeArrays();
      handleBanderaTEMP(true);
    }
  }, [showResults]);
  
  if (complete === false) {
    return (
      <div className='FormAlert'>
            <FontAwesomeIcon icon={faTriangleExclamation} size="4x" color='#003660' />  
            <p>Por favor complete el formulario del componente Home primero.</p>
        </div>
    );
  }
  <div className="congratulations">¡Ha completado con éxito el test!</div>
  return (
    
    <div className="quiz">
      
      {quizState.showResults && (
        <div className="results">
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
              
              <div
                onClick={() => dispatch22({ type: "RESTART" })}
                className="restart-button"
              >
                Reiniciar
              </div>
        </div>
      )}
      {!quizState.showResults ?
        <div>
          <div>
            <div>
              <div className="score">
                Pregunta {quizState.currentQuestionIndex + 1}/
                {quizState.questions.length}
              </div>
            <Question />
            <div className="button-container">
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

            </div>
            </div>
          </div>
        </div>
        : null}
      
      
    </div>
  );
};
const mapStateToProps = (state) => ({
  templateFinal: state.templateFinal,
});

const mapDispatchToProps = (dispatch) => ({
  saveTemplateParams2: (templateParams2) => dispatch(saveTemplateParams2(templateParams2)),
  setBanderaTEMP: (banderaTEMP) => dispatch(setBanderaTEMP(banderaTEMP)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);