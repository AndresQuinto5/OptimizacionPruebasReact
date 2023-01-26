import Answer from "./AnswerTEMP";
import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const handleSelectAnswer = (answerText) => {
    dispatch({
      type: "UPDATE_ANSWER",
      payload: { answerText, value: 1 },
    });
  };

  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {currentQuestion.answers.map((answer, index) => (
          <Answer
            answerText={answer.text}
            value={answer.value}
            key={index}
            index={index}
            onSelectAnswer={handleSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
