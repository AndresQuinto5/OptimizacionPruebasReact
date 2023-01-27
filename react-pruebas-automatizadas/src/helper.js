export const AnswerList = (question) => {
  if (!question) {
    return [];
  }
  return question.answers.map((answer) => answer.answer);
};
