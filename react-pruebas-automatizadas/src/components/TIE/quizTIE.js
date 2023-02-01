import { useContext } from "react";
import { QuizContextTIE } from "../../contexts/quizTIE";
import "../Temperamento/quiz.css";
import QuestionTIE from "./QuestionTIE";


const QuizTIE = () => {
  const [quizState, dispatch] = useContext(QuizContextTIE);

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
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="restart-button"
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


          {quizState.currentAnswer && (
            <div>
              {quizState.currentQuestionIndex !== 0 && (
                <div
                  onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
                  className="prev-button"
                >
                  Anterior
                </div>
              )}
              <div
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                className="next-button"
              >
                Siguiente
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizTIE;