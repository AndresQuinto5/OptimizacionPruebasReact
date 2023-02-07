import { useContext } from "react";
import { QuizContextTIE } from "../../contexts/quizTIE";
import AnswerTIE from "./AnswerTIE";
import imagen1 from "../../assets/Picture1.png";
import imagen2 from "../../assets/Picture2.png";
import imagen3 from "../../assets/Picture3.png";
import imagen4 from "../../assets/Picture4.png";

const QuestionTIE = () => {
  const [quizState, dispatch] = useContext(QuizContextTIE);
  const currentQuestion = quizState.questionsTIE[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="hola">{quizState.currentQuestionIndex === 19 && <img src={imagen1}/>}
      {quizState.currentQuestionIndex === 37 && <img src={imagen2}/>}
      {quizState.currentQuestionIndex === 55 && <img src={imagen3}/>}
      {quizState.currentQuestionIndex === 73 && <img src={imagen4}/>}</div>
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