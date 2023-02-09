import { useContext } from "react";
import { QuizContextTIE } from "../../contexts/quizTIE";
import "../Temperamento/quiz.css";
import QuestionTIE from "./QuestionTIE";
import { PieChart, Pie, Sector, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import emailjs from '@emailjs/browser';



const QuizTIE = () => {
  const [quizState, dispatch] = useContext(QuizContextTIE);
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
  const Autoconciencia = IEP + CEP;
  const Autocontrol = MEDFC + TAE + AUTO;
  const Empatia = IEEO + CEEO;
  const HabilidadesSociales = COLAB + FYAAC + RDC + COM + INFLU + LIDER;


  function eval1(a){
    if (a <= 8) {
      return "Bajo"
    }
    else if (a >= 9 && a <= 12) {
      return "Medio"
    }
    else if (a >= 13 && a <= 15) {
      return "Alto"
    }
  }
  function eval2(a){
    if (a <= 15) {
      return "Bajo"
    }
    else if (a >= 16 && a <= 24) {
      return "Medio"
    }
    else if (a >= 25 && a <= 30) {
      return "Alto"
    }
  }
  function eval3(a){
    if (a <= 23) {
      return "Bajo"
    }
    else if (a >= 24 && a <= 35) {
      return "Medio"
    }
    else if (a >= 36 && a <= 45) {
      return "Alto"
    }
  }
  function eval4(a){
    if (a <= 45) {
      return "Bajo"
    }
    else if (a >= 46 && a <= 75) {
      return "Medio"
    }
    else if (a >= 76 && a <= 90) {
      return "Alto"
    }
  }
  function eval5(a){
    if (a <= 55) {
      return "Bajo"
    }
    else if (a >= 56 && a <= 84) {
      return "Medio"
    }
    else if (a >= 85 && a <= 105) {
      return "Alto"
    }
  }
  /*
  const evalIEP= "";
  const evalCEP= "";
  const evalMEDFC= "";
  const evalTAE= "";
  const evalAUTO= "";
  const evalIEEO= "";
  const evalCEEO= "";
  const evalCOLAB= "";
  const evalFYAAC= "";
  const evalRDC= "";
  const evalCOM= "";
  const evalINFLU= "";
  const evalLIDER= "";
  const evalAutoconciencia= "";
  const evalAutocontrol= "";
  const evalEmpatia= "";
  const evalHabilidadesSociales= "";
  */
  let evalIEP = eval2(IEP);
  let evalCEP = eval1(CEP);
  let evalMEDFC = eval3(MEDFC);
  let evalTAE = eval1(TAE);
  let evalAUTO = eval2(AUTO);
  let evalIEEO = eval1(IEEO);
  let evalCEEO = eval1(CEEO);
  let evalCOLAB = eval1(COLAB);
  let evalFYAAC = eval1(FYAAC);
  let evalRDC = eval1(RDC);
  let evalCOM = eval2(COM);
  let evalINFLU = eval1(INFLU);
  let evalLIDER = eval1(LIDER);
  let evalAutoconciencia = eval3(Autoconciencia);
  let evalAutocontrol = eval4(Autocontrol);
  let evalEmpatia = eval2(Empatia);
  let evalHabilidadesSociales = eval5(HabilidadesSociales);

  var templateParams = {
    name: 'James',
    notes: 'Check this out!',
    uno: IEP,
    uno_: evalIEP,
    dos: CEP,
    dos_: evalCEP,
    tres: MEDFC,
    tres_: evalMEDFC,
    cuatro: TAE,
    cuatro_: evalTAE,
    cinco: AUTO,
    cinco_: evalAUTO,
    seis: IEEO,
    seis_: evalIEEO,
    siete: CEEO,
    siete_: evalCEEO,
    ocho: COLAB,
    ocho_: evalCOLAB,
    nueve: FYAAC,
    nueve_: evalFYAAC,
    diez: RDC,
    diez_: evalRDC,
    once: COM,
    once_: evalCOM,
    doce: INFLU,
    doce_: evalINFLU,
    trece: LIDER,
    trece_: evalLIDER,
    catorce: Autoconciencia,
    catorce_: evalAutoconciencia,
    quince: Autocontrol,
    quince_: evalAutocontrol,
    dieciseis: Empatia,
    dieciseis_: evalEmpatia,
    diecisiete: HabilidadesSociales,
    diecisiete_: evalHabilidadesSociales

  };

  function sendEmail(a) {
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


  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Test de inteligencia emocional</div>
          <div className="results-info">
            <div>Se ha finalizado el test!</div>
            <div>
              Despliegue de resultados {quizState.correctAnswersCount} aqui &nbsp;
              {quizState.questionsTIE.length}
            </div>
            <BarChart
                width={550}
                height={330}
                data={BarChartResults}
                margin={{
                  top: 5,
                  right: 20,
                  left: 20,
                  bottom: 40,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={0} angle={45} textAnchor="start" />
                <YAxis tickCount={5} />
                <Tooltip />
                <Bar dataKey="Frecuencia" fill="#f16a24" />
          </BarChart>
                {console.log("Las evaluaciones son las siguientes",evalIEP, evalCEP, evalMEDFC, evalTAE, evalAUTO, evalIEEO, evalCEEO, 
                evalCOLAB, evalFYAAC, evalRDC, evalCOM, evalINFLU, evalLIDER, evalAutoconciencia, evalAutocontrol, evalEmpatia, evalHabilidadesSociales)}
                
          </div>
          <div  
            onClick={() => {
              dispatch({ type: "RESTART" });
              sendEmail(templateParams);
            }
              }
            className="next-button"
          >
            Restart
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
                  onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
                  className="prev-button"
                >
                  Anterior
                </div>
          )}
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
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

export default QuizTIE;