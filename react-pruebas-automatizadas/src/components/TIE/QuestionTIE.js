import { useContext } from "react";
import { QuizContextTIE } from "../../contexts/quizTIE";
import AnswerTIE from "./AnswerTIE";
import imagen1 from "../../assets/Picture1.png";
import imagen2 from "../../assets/Picture2.png";
import imagen3 from "../../assets/Picture3.png";
import imagen4 from "../../assets/Picture4.png";
/*
  Este archivo tiene como finalidad mostrar la pregunta actual y el dispatch para la respuesta seleccionada
*/
const QuestionTIE = () => {
  const [quizState, dispatch] = useContext(QuizContextTIE);
  const currentQuestion = quizState.questionsTIE[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}
        <div className="hola">{quizState.currentQuestionIndex === 18 && <img src={imagen1}/>}
          {quizState.currentQuestionIndex === 36 && <img src={imagen2}/>}
          {quizState.currentQuestionIndex === 54 && <img src={imagen3}/>}
          {quizState.currentQuestionIndex === 72 && <img src={imagen4}/>}
        </div>
      </div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <AnswerTIE
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionTIE;