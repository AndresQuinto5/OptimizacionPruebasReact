import AnswerGRIT from "./AnswerGRIT";
import { useContext } from "react";
import { QuizContextGRIT } from "../../contexts/quizGRIT";

const QuestionGRIT = () => {
  const [quizState, dispatch] = useContext(QuizContextGRIT);
  const currentQuestion = quizState.questionsGRIT[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <AnswerGRIT
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index +1}
            index={index +1}
            onSelectAnswer={(key) => {
              dispatch({ type: "SELECT_ANSWER", payload: key })
            }
            }
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionGRIT;