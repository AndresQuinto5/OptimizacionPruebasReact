import { useState } from 'react';

const Answer = ({ answerText, index, onSelectAnswer, value }) => {
  const [answerValue, setAnswerValue] = useState(value);
  const letterMapping = ["A", "B", "C", "D"];
  const disabledClass = value ? "disabled-answer" : "";

  const onClick = () => {
    setAnswerValue(1);
    onSelectAnswer(answerText, answerValue);
  }

  return (
    <div
      className={`answer ${disabledClass}`}
      onClick={onClick}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
