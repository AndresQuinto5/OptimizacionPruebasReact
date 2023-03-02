import { connect } from 'react-redux';
import { useSelector, useDispatch} from 'react-redux';
import {  saveTemplateParamsCAM, saveTemplateParams2, banderaCAM, setBanderaCAM} from '../../contexts/store';
import { useContext } from "react";
import { QuizContextCAM } from "../../contexts/quizCAM";
import "./CAMBRIDGE.css";
import QuestionCAM from "./Questioncam";
import { PieChart, Pie, Sector, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, legendType, ResponsiveContainer } from "recharts";
import emailjs from '@emailjs/browser';
import { sendEmail, mergeArrays, ArrayCAM} from "../../contexts/SendEmail";
import { Context } from '../../contexts/contextEmail';
import React, { useEffect, useState } from 'react';
/*
  Este archivo tiene la finalidad de importar los resultados de los quiz del context de su prueba correspondiente
  ademas, se encarga de la reporteria de los datos obtenidos en el quiz, como tambien el manejo de las banderas para la barra de progreso una vez finalizado el test
  al final de este archivo por medio de los handlers se actualiza el store con los datos obtenidos en el quiz
*/
const QuizCAM = (props) => {
  const complete = useSelector((state) => state.complete);
  const [quizState, dispatch2] = useContext(QuizContextCAM);
  const [banderaCAM, setBanderaCAM] = useState(false);

  //para actualizar el store de manera continua
  const showResults = quizState.showResults;
  const totalCAM = quizState.total;
//apartado de store
  const dispatch = useDispatch();
  const templateFinal = useSelector((state) => state.templateFinal);

  var templateParamsCAM = quizState.templateParamsCAM;

  const handleSendEmail = () => {
    console.log("params actualizados");
    console.log(templateParamsCAM)
    props.saveTemplateParamsCAM(quizState.templateParamsCAM);
  };

  const handleMergeArrays = () => {
    dispatch({ type: 'MERGE_ARRAYS' });
    console.log("redux");
  };

  const handleBanderaCAM = (x) => {
    props.setBanderaCAM(x);
    console.log("Cambiando bandera CAM...");
  };

  const BarChartResults = [
    { name: "Acertadas", Total: totalCAM }
  ];

  useEffect(() => {
    if (showResults) {
      handleSendEmail();
      handleMergeArrays();
      handleBanderaCAM(true);
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
        <div className="results-CAM">

          <div className="congratulations">Ha finalizado con éxito el test de inglés Cambridge</div>
            <div className="results-info"> 

                  <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                    <div style={{width: "0%"}}></div>

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
                      <XAxis type="number" orientation='top' tickCount={6} domain={[0, 25]}/>
                      <YAxis dataKey="name" type='category'/>
                      <Tooltip />
                      <Bar dataKey="Total" fill="#f16a24" barSize={75} />
                    </BarChart>

                  </div>
              
            </div>
            <div
              onClick={() => dispatch2({ type: "RESTART" })}
              className="restart-button">
              Reiniciar
            </div>
        </div>
      )}

      {!quizState.showResults && (
        <div>
          <div className="score">
            Pregunta {quizState.currentQuestionIndex + 1}/
            {quizState.questionsCAM.length}
          </div>
          <QuestionCAM />
          {quizState.currentQuestionIndex !== 0 && (
                <div
                  onClick={() => dispatch2({ type: "PREVIOUS_QUESTION" })}
                  className="prev-button"
                >
                  Anterior
                </div>
          )}
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch2({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Siguiente
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  templateFinal: state.templateFinal,
});

const mapDispatchToProps = (dispatch) => ({
  saveTemplateParamsCAM: (templateParams) => dispatch(saveTemplateParamsCAM(templateParams)),
  setBanderaCAM: (banderaCAM) => dispatch(setBanderaCAM(banderaCAM)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizCAM);
