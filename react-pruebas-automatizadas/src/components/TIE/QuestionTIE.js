import { useContext } from "react";
import { QuizContextTIE } from "../../contexts/quizTIE";
import AnswerTIE from "./AnswerTIE";

const QuestionTIE = () => {
  const [quizState, dispatch] = useContext(QuizContextTIE);
  const currentQuestion = quizState.questionsTIE[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
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