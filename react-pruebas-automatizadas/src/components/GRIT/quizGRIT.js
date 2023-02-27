import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import {  saveTemplateParamsGRIT, saveTemplateParams2, banderaGRIT, setBanderaGRIT  } from '../../contexts/store';
import { useContext } from "react";
import { Formik, Field, Form } from 'formik';
import QuestionGRIT from "./QuestionGRIT";
import { QuizContextGRIT } from "../../contexts/quizGRIT";
import "../Temperamento/quiz.css";
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import emailjs from '@emailjs/browser';
import { sendEmail, mergeArrays, ArrayGRIT} from "../../contexts/SendEmail";
import { Context } from '../../contexts/contextEmail';
import { Redirect } from 'react-router-dom';

const QuizGRIT = (props) => {
  const complete = useSelector((state) => state.complete);
  const [quizState, dispatchGRIT] = useContext(QuizContextGRIT);
  const [banderaGRIT, setBanderaGRIT] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);


  const showResults = quizState.showResults;
  //data normalization for chart
  const totalGRIT = (quizState.totalGRIT);

  const BarChartResults = [
    { name: "GRIT", Total: (totalGRIT / 10)}
  ]

  //apartado de store
  const dispatch = useDispatch();
  const templateFinal = useSelector((state) => state.templateFinal);
  
  var templateParamsGRIT = quizState.templateParamsGRIT;

  
  const handleSendEmailGRIT = () => {
    props.saveTemplateParamsGRIT(quizState.templateParamsGRIT);
  };
  
  const handleMergeArrays = () => {
    dispatch({ type: 'MERGE_ARRAYS' });
    console.log("redux");
  };

  const handleBanderaGRIT = (w) => {
    props.setBanderaGRIT(w);
    console.log("Cambiando bandera GRIT...");
  };
  useEffect(() => {
    if (showResults) {
      handleSendEmailGRIT();
      handleMergeArrays();
      handleBanderaGRIT(true);
    }
  }, [showResults]);
  

  if (complete === false) {
    return (
      <div>
        <p>Por favor complete el formulario del componente Home primero.</p>
      </div>
    );
  }
  return (
    
    
    <div className="quiz">
      
      {quizState.showResults && (
        <div className="results">

        <div className="congratulations">¡Ha completado con éxito el test!</div>
        
          <div className="results-info">    

            <div className="exitoprompt">Sus resultados son:</div>
              <div className="sanguineo">
                GRIT: {(quizState.totalGRIT / 10) }
              </div>
              </div>
              <div className="grafico">
                    <BarChart
                      width={600}
                      height={330}
                      data={BarChartResults}
                      layout="vertical"
                      margin={{
                        top: 5,
                        right: 50,
                        left: 50,
                        bottom: 40,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" orientation='top' tickCount={6} domain={[0, 5]}/>
                      <YAxis dataKey="name" type='category'/>
                      <Tooltip />
                      <Bar dataKey="Total" fill="#f16a24" barSize={75} />
                    </BarChart>
              
            </div>
              
              <div
                onClick={() => dispatchGRIT({ type: "RESTART" })}
                className="restart-button-grit"
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
                {quizState.questionsGRIT.length}
              </div>
            <QuestionGRIT />
            <div className="button-container">
            {quizState.currentQuestionIndex !== 0 && (
                <div
                  onClick={() => dispatchGRIT({ type: "PREVIOUS_QUESTION" })}
                  className="prev-button"
                >
                  Anterior
                </div>
              )}

            {quizState.currentAnswer && (
              <div>
                <div onClick={() => dispatchGRIT({ type: "NEXT_QUESTION" })} 
                className="next-button"
                >
                    Siguiente
                </div>
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
  saveTemplateParamsGRIT: (templateParamsGRIT) => dispatch(saveTemplateParamsGRIT(templateParamsGRIT)),
  setBanderaGRIT: (banderaGRIT) => dispatch(setBanderaGRIT(banderaGRIT)),
});
export default connect(mapStateToProps, mapDispatchToProps)(QuizGRIT);