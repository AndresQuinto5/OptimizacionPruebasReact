const AnswerGRIT = ({
    answerText,
    index,
    onSelectAnswer,
    currentAnswer,
    correctAnswer,
  }) => {
    const letterMapping = ["A", "B", "C", "D", "E"];
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer =
      currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    return (
      <div
        className={`answer ${correctAnswerClass} ${wrongAnswerClass}`}
        onClick={() => onSelectAnswer(answerText)}
      >
        <div className="answer-letter">{letterMapping[index-1]}</div>
        <div className="answer-text">{answerText}</div>
      </div>
    );
  };
  
  export default AnswerGRIT;