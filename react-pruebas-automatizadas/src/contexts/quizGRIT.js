import React, { createContext, useReducer, useState } from "react";
import questionsGRIT from "../contexts/dataGRIT"
import { AnswerList } from "../../src/helper";

const initialStateGRIT = {
    questionsGRIT,
    currentQuestionIndex: 0,
    currentAnswer: "",
    answers: AnswerList(questionsGRIT[0]),
    showResults: false,
    correctAnswersCount: 0,
    indexValue: 0,

    totalGRIT: 0,

    //para el boton anterior
    PreviousAnsw: 0,
    PreviousSubcomp: "",
    templateParamsGRIT: {},
    mapa: new Map()
    
  };
  
  const reducerGRIT = (state, action) => {
    switch (action.type) {
      case "SELECT_ANSWER": {

        return {
          ...state,
          currentAnswer: action.payload,

          //correctAnswersCount,
        };
      }
      case "NEXT_QUESTION": {
        const PreguntaYrespuestas = state.questionsGRIT[state.currentQuestionIndex].answers;
        let respuesta;
        let currentAnswer = state.currentAnswer;
        
        respuesta = PreguntaYrespuestas.find(answer => answer.answer === currentAnswer).value;
        

          state.mapa.set(state.currentQuestionIndex, respuesta);
          console.log(state.mapa)
          
          const showResults =
          state.currentQuestionIndex === state.questionsGRIT.length - 1;
          const currentQuestionIndex = showResults
          ? state.currentQuestionIndex
          : state.currentQuestionIndex + 1;
          const answers = showResults
          ? []
          : AnswerList(state.questionsGRIT[currentQuestionIndex]);
          
          if (showResults === true){
            console.log(state.mapa)
            state.mapa.forEach((value, key) => {

              state.totalGRIT += value;
              console.log(state.totalGRIT);
              
            })

            state.templateParamsGRIT = {
              totalGRIT: state.totalGRIT / 10,
            }
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
          state.currentQuestionIndex === state.questionsGRIT.length;
        const currentQuestionIndex = showResults
          ? state.currentQuestionIndex
          : state.currentQuestionIndex - 1;
        const answers = showResults
          ? []
          : AnswerList(state.questionsGRIT[currentQuestionIndex]);
    
        return {
          ...state,
          currentAnswer: "",
          showResults,
          currentQuestionIndex,
          answers,
        };
      }
      case "RESTART": {
        return initialStateGRIT;
      }
      default:
        return state;
    }
  };
  

  export const Context = createContext({});

  export const MyProvider = (props) => {
    const [arrayGRIT, setArrayGRIT] = useState({});
      const [arrayTIE, setArrayTIE] = useState({});
      const [arrayTemp, setArrayTemp] = useState({});
  
      const mergeArrays = () => {
          const templateFinal = { ...arrayTIE, ...arrayTemp, ...arrayGRIT };
          return templateFinal;
      };
  
      return (
          <Context.Provider
          value={{
              arrayGRIT,
              setArrayGRIT,
              arrayTIE,
              setArrayTIE,
              arrayTemp,
              setArrayTemp,
              mergeArrays,
          }}
          >
          {props.children}
          </Context.Provider>
      );
      };

export const QuizContextGRIT = createContext();

export const QuizProviderGRIT = ({ children }) => {
  const value = useReducer(reducerGRIT, initialStateGRIT);


  return <QuizContextGRIT.Provider value={value}>{children}</QuizContextGRIT.Provider>;

};
