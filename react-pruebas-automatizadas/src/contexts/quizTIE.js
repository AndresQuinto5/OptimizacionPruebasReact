import React, { createContext, useReducer } from "react";
import questionsTIE from "../contexts/dataTIE"
import { AnswerList } from "../../src/helper";

const initialStateTIE = {
    questionsTIE,
    currentQuestionIndex: 0,
    currentAnswer: "",
    answers: AnswerList(questionsTIE[0]),
    showResults: false,
    correctAnswersCount: 0,
  };
  
  const reducerTIE = (state, action) => {
    switch (action.type) {
      case "SELECT_ANSWER": {
        const correctAnswersCount =
          action.payload ===
          state.questionsTIE[state.currentQuestionIndex].correctAnswer
            ? state.correctAnswersCount + 1
            : state.correctAnswersCount;
        return {
          ...state,
          currentAnswer: action.payload,
          correctAnswersCount,
        };
      }
      case "NEXT_QUESTION": {
        const showResults =
          state.currentQuestionIndex === state.questionsTIE.length - 1;
        const currentQuestionIndex = showResults
          ? state.currentQuestionIndex
          : state.currentQuestionIndex + 1;
        const answers = showResults
          ? []
          : AnswerList(state.questionsTIE[currentQuestionIndex]);
        return {
          ...state,
          currentAnswer: "",
          showResults,
          currentQuestionIndex,
          answers,
        };
      }
      case "PREVIOUS_QUESTION": {
        const showResults =
          state.currentQuestionIndex === state.questionsTIE.length - 1;
        const currentQuestionIndex = showResults
          ? state.currentQuestionIndex
          : state.currentQuestionIndex - 1;
        const answers = showResults
          ? []
          : AnswerList(state.questionsTIE[currentQuestionIndex]);
        return {
          ...state,
          currentAnswer: "",
          showResults,
          currentQuestionIndex,
          answers,
        };
      }
      case "RESTART": {
        return initialStateTIE;
      }
      default:
        return state;
    }
  };
  
export const QuizContextTIE = createContext();

export const QuizProviderTIE = ({ children }) => {
  const value = useReducer(reducerTIE, initialStateTIE);


  return <QuizContextTIE.Provider value={value}>{children}</QuizContextTIE.Provider>;

};
