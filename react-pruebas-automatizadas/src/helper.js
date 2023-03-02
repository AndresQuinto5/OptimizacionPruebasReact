/*
  archivo que se utilizaba para hacerle shuffle a las preguntas, ahora solo las provee en orden
*/
export const AnswerList = (question) => {
  if (!question) {
    return [];
  }
  return question.answers.map((answer) => answer.answer);
};
