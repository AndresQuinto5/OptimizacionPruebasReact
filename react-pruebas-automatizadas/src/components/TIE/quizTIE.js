import { useContext } from "react";
import { QuizContextTIE } from "../../contexts/quizTIE";
import "../Temperamento/quiz.css";
import QuestionTIE from "./QuestionTIE";
import { PieChart, Pie, Sector, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";



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
          </div>

          <div
            onClick={() => dispatch({ type: "RESTART" })}
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