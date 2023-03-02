import Answer from "./AnswerTEMP";
import { useContext } from "react";
import { QuizContext } from "../../contexts/quizTemperamento";
/*
  Este archivo tiene como finalidad mostrar la pregunta actual y el dispatch para la respuesta seleccionada
*/
const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
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

export default Question;