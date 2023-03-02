import { connect } from 'react-redux';
import { useSelector, useDispatch} from 'react-redux';
import {  saveTemplateParams, saveTemplateParams2, banderaTIE, setBanderaTIE} from '../../contexts/store';
import { useContext } from "react";
import { QuizContextTIE } from "../../contexts/quizTIE";
import "../Temperamento/quiz.css";
import QuestionTIE from "./QuestionTIE";
import { PieChart, Pie, Sector, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import emailjs from '@emailjs/browser';
import { sendEmail, mergeArrays, ArrayTIE} from "../../contexts/SendEmail";
import React, { useEffect, useState } from 'react';
/*
  Este archivo tiene la finalidad de importar los resultados de los quiz del context de su prueba correspondiente
  ademas, se encarga de la reporteria de los datos obtenidos en el quiz, como tambien el manejo de las banderas para la barra de progreso una vez finalizado el test
  al final de este archivo por medio de los handlers se actualiza el store con los datos obtenidos en el quiz
*/
const QuizTIE = (props) => {
  const complete = useSelector((state) => state.complete);
  const [quizState, dispatch2] = useContext(QuizContextTIE);
  const [banderaTIE, setBanderaTIE] = useState(false);

    //para actualizar el store de manera continua
  const showResults = quizState.showResults;
  const IEP = (quizState.IEP);
  const CEP = (quizState.CEP);
  const MEDFC =(quizState.MEDFC);
  const TAE =(quizState.TAE);
  const AUTO =(quizState.AUTO);
  const IEEO =(quizState.IEEO);
  const CEEO =(quizState.CEEO);
  const COLAB =(quizState.COLAB);
  const FYAAC =(quizState.FYAAC);
  const RDC =(quizState.RDC);
  const COM =(quizState.COM);
  const INFLU =(quizState.INFLU);
  const LIDER =(quizState.LIDER);
  const Autoconciencia = quizState.Autoconciencia;
  const Autocontrol = quizState.Autocontrol;
  const Empatia = quizState.Empatia;
  const HabilidadesSociales = quizState.HabilidadesSociales;

//apartado de store
  const dispatch = useDispatch();
  const templateFinal = useSelector((state) => state.templateFinal);

  var templateParams = quizState.templateParams;

  const handleSendEmail = () => {
    console.log("params actualizados");
    props.saveTemplateParams(quizState.templateParams);
  };

  const handleMergeArrays = () => {
    dispatch({ type: 'MERGE_ARRAYS' });
    console.log("redux");
  };

  const handleBanderaTIE = (x) => {
    props.setBanderaTIE(x);
    console.log("Cambiando bandera TIE...");
  };

  function sendEmail22(a) {
    emailjs.send('service_ljon6t8', 'template_ikmvv1r', templateParams, 'dw7yxB6O6v4NSfxS0')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
  }

  const BarChartResults = [
    { name: "IEP", Frecuencia: IEP },
    { name: "CEP", Frecuencia: CEP },
    { name: "MEDFC", Frecuencia: MEDFC },
    { name: "TAE", Frecuencia: TAE },
    { name: "AUTO", Frecuencia: AUTO },
    { name: "IEEO", Frecuencia: IEEO },
    { name: "CEEO", Frecuencia: CEEO },
    { name: "COLAB", Frecuencia: COLAB },
    { name: "FYAAC", Frecuencia: FYAAC },
    { name: "RDC", Frecuencia: RDC },
    { name: "COM", Frecuencia: COM },
    { name: "INFLU", Frecuencia: INFLU },
    { name: "LIDER", Frecuencia: LIDER }
  ];

  const BarChartResultsComp = [
    { name: "Autoconciencia", Frecuencia: Autoconciencia },
    { name: "Autocontrol", Frecuencia: Autocontrol },
    { name: "Empatia", Frecuencia: Empatia },
    { name: "Habilidades Sociales", Frecuencia: HabilidadesSociales }
  ];
  

  useEffect(() => {
    if (showResults) {
      handleSendEmail();
      handleMergeArrays();
      handleBanderaTIE(true);
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
        <div className="results-TIE">

          <div className="congratulations">Test de inteligencia emocional</div>
            <div className="results-info"> 
              <div className='graficos'>



                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <BarChart
                        width={650}
                        height={530}
                        data={BarChartResultsComp}
                        margin={{
                          top: 5,
                          right: 100,
                          left: 20,
                          bottom: 150,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" interval={0} angle={45} textAnchor="start" />
                        <YAxis tickCount={5} />
                        <Tooltip />
                        <Bar dataKey="Frecuencia" fill="#f16a24" />
                  </BarChart>

                
                  <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                    <div style={{width: "0%"}}></div>

                      <BarChart
                          width={600}
                          height={330}
                          data={BarChartResults}
                          margin={{
                            top: 5,
                            right: 50,
                            left: 0,
                            bottom: 40,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" interval={0} angle={45} textAnchor="start" />
                          <YAxis tickCount={5} />
                          <Tooltip />
                          <Bar dataKey="Frecuencia" fill="#f16a24" />
                      </BarChart>
                          
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                      <div style={{width: "0%"}}></div>
                        <div style={{textAlign: "left"}}>
                            Subcompetencias: <br />
                            <br />
                            IEP: <br />Identificar emociones propias <br /><br />
                            CEP: <br />Comprender emociones <br /><br />
                            MEDFC: <br />Manejar y dirigir emociones de forma constructiva <br /><br />
                            TAE: <br />Tolerancia al estrés <br /><br />
                            AUTO: <br />Automotivación <br /><br />
                            IEEO: <br />Identificar emociones en otros <br /><br />
                        </div>

                      <div style={{width: "1%"}}></div>

                      <div style={{textAlign: "left"}}>
                          <br /><br />
                          CEEO: <br />Comprender emociones en otros <br /><br />
                          COLAB: <br />Colaboración <br /><br />
                          FYAAC: <br />Flexibilidad y adaptación al cambio <br /><br />
                          RDC: <br />Resolución de conflictos <br /><br />
                          COM: <br />Comunicación <br /><br />
                          INFLU: <br />Influencia <br /><br />
                          LIDER: <br />Liderazgo <br /><br />
                      </div>
                    </div>
                  </div>
                </div>
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
            {quizState.questionsTIE.length}
          </div>
          <QuestionTIE />
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
  saveTemplateParams: (templateParams) => dispatch(saveTemplateParams(templateParams)),
  setBanderaTIE: (banderaTIE) => dispatch(setBanderaTIE(banderaTIE)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizTIE);
