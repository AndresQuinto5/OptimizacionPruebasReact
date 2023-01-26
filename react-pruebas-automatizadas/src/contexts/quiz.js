import React, { createContext, useReducer } from "react";
import questions from "../contexts/dataTemperamento";
import { shuffleAnswers } from "../../src/helper";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  currentAnswer: "",
  answers: questions[0].answers,
  answerValue: [0, 0, 0, 0], 
  showResults: false,
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const selectedAnswerIndex = state.answers.indexOf(action.payload);
      const newAnswerValue = [...state.answerValue];
      newAnswerValue[selectedAnswerIndex] = 1;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : state.questions[currentQuestionIndex].answers;
      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};