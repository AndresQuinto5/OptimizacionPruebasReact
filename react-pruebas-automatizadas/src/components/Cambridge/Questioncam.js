import { useContext } from "react";
import { QuizContextCAM } from "../../contexts/quizCAM";
import AnswerCAM from "./AnswerCAM";

const QuestionCAM = () => {
  const [quizState, dispatch] = useContext(QuizContextCAM);
  const currentQuestion = quizState.questionsCAM[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}
      </div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <AnswerCAM
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

export default QuestionCAM;