import React, { createContext, useReducer } from "react";
import questions from "./dataTemperamento";
import { AnswerList } from "../helper";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  currentAnswer: "",
  answers: AnswerList(questions[0]),
  showResults: false,
  correctAnswersCount: 0,
  sangineoAnswers: 0,
  colericoAnswers: 0,
  melancolicoAnswers: 0,
  flematicoAnswers: 0,
  mapa: new Map()
};

const generateAnswers = (question) => {
  if (!question) {
    return [];
  }
  return question.answers
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": { /*
      if(action.payload == 1){
        state.sangineoAnswers = state.sangineoAnswers + 1
      }else if (action.payload == 2){
        state.colericoAnswers = state.colericoAnswers + 1
      }else if (action.payload == 3){
        state.melancolicoAnswers = state.melancolicoAnswers + 1
      }else if (action.payload == 4){
        state.flematicoAnswers = state.flematicoAnswers + 1
      }*/
      return {
        ...state,
        currentAnswer: action.payload
      };
    }
    case "NEXT_QUESTION": {
      let currentAnswer = state.currentAnswer;
      console.log(state.currentQuestionIndex, "esto es el index de la pregunta?")
      if(currentAnswer == 1){
        state.mapa.set(state.currentQuestionIndex, currentAnswer)
      }else if (currentAnswer == 2){
        state.mapa.set(state.currentQuestionIndex, currentAnswer)
      }else if (currentAnswer == 3){
        state.mapa.set(state.currentQuestionIndex, currentAnswer)
      }else if (currentAnswer == 4){
        state.mapa.set(state.currentQuestionIndex, currentAnswer)
      }
      console.log()
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : AnswerList(state.questions[currentQuestionIndex]);

      if(showResults === true){
        console.log(state.mapa)
        state.mapa.forEach((valor,clave)=> {
          if(valor == 1){
            state.sangineoAnswers += 1
          }else if(valor == 2){
            state.colericoAnswers += 1
          }else if(valor == 3){
            state.melancolicoAnswers += 1
          }else if(valor == 4){
            state.flematicoAnswers += 1
          }
        })
      }
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