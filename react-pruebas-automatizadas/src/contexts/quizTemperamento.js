import React, { createContext, useReducer } from "react";
import questions from "./dataTemperamento";
import { AnswerList } from "../helper";
import { sendEmail } from "./SendEmail";


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
  FS:0,
  FC:0,
  FM:0,
  FF:0,
  DS: 0,
  DC: 0,
  DM: 0,
  DF: 0,
  templateParams: {},
  
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
    case "SELECT_ANSWER": { 
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
            //console.log(state.sangineoAnswers, "respuesta añadida a sangineo")
          }else if(valor == 2){
            state.colericoAnswers += 1
            //console.log(state.colericoAnswers, "respuesta añadida a colerico")
          }else if(valor == 3){
            state.melancolicoAnswers += 1
            //console.log(state.melancolicoAnswers, "respuesta añadida a melancolico")
          }else if(valor == 4){
            state.flematicoAnswers += 1
            //console.log(state.flematicoAnswers, "respuesta añadida a flematico")
          }
        })
        const entries = Array.from(state.mapa.entries());
        for (let i = 0; i < 20; i++) {
          const [clave, valor] = entries[i];
          if (valor === 1) {
            state.FS += 1;
          } else if (valor === 2) {
            state.FC += 1;
          } else if (valor === 3) {
            state.FM += 1;
          } else if (valor === 4) {
            state.FF += 1;
          }
        }
        const entries2 = Array.from(state.mapa.entries());
        for (let i = 20; i < 40; i++) {
          const [clave, valor] = entries2[i];
          if (valor === 1) {
            state.DS += 1;
          } else if (valor === 2) {
            state.DC += 1;
          } else if (valor === 3) {
            state.DM += 1;
          } else if (valor === 4) {
            state.DF += 1;
          }
        }
        const san100 = ((state.sangineoAnswers)/40)*100;
        const col100 = ((state.colericoAnswers)/40)*100;
        const mel100 = ((state.melancolicoAnswers)/40)*100;
        const fle100 = ((state.flematicoAnswers)/40)*100;
        state.templateParams = {
          sangineo: state.sangineoAnswers,
          colerico: state.colericoAnswers,
          melancolico: state.melancolicoAnswers,
          flematico: state.flematicoAnswers,
          sobre100S: san100.toFixed(2),
          sobre100C: col100.toFixed(2),
          sobre100M: mel100.toFixed(2),
          sobre100F: fle100.toFixed(2),
          FS: state.FS,
          FC: state.FC,
          FM: state.FM,
          FF: state.FF,
          DS: state.DS,
          DC: state.DC,
          DM: state.DM,
          DF: state.DF
        };
        console.log(state.templateParams, "esto es el template params")

      }
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
        state.currentQuestionIndex === state.questions.length;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex - 1;
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