import React, { createContext, useReducer, useState } from "react";
import questionsCAM from "../contexts/dataCAM";
import { AnswerList } from "../../src/helper";

/*

  Archivo de js, donde se encuentra el contexto de la evaluacion Cambridge en el cual manejo los casos de los botones como
  siguiente pregunta, pregunta anterior, seleccionar respuesta, mostrar resultados, reiniciar evaluacion, etc.

  ademas al final del archivo realizo la actualizacion de datos en mi store.js, en donde almaceno en el navegador los resultados o data necesaria
  para enviar

*/

const initialStateCAM = {
    questionsCAM,
    currentQuestionIndex: 0,
    currentAnswer: "",
    answers: AnswerList(questionsCAM[0]),
    showResults: false,
    correctAnswersCount: 0,
    indexValue: 0,
    total: 0,
    templateParamsCAM: {},
    mapa: new Map()
    
};

const reducerCAM = (state, action) => {
    switch (action.type) {
    case "SELECT_ANSWER": {

        return {
        ...state,
        currentAnswer: action.payload,

        //correctAnswersCount,
        };
    }
    case "NEXT_QUESTION": {
        const PreguntaYrespuestas = state.questionsCAM[state.currentQuestionIndex].answers;
        let respuesta;
        let currentAnswer = state.currentAnswer;
        let indexPregunta = state.currentQuestionIndex;
        let indexCAM = PreguntaYrespuestas[state.indexValue].indexCAM;
        console.log('this is the index pregunta',indexPregunta)
        console.log('this is the index',indexCAM)
        console.log('this is the currentAnswer',currentAnswer)
        respuesta = PreguntaYrespuestas.find(answer => answer.answer === currentAnswer).value;
        console.log('this is the respuesta',respuesta)
        state.mapa.set(state.currentQuestionIndex, respuesta);
        console.log(state.mapa)
        
        const showResults =
        state.currentQuestionIndex === state.questionsCAM.length - 1;
        const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
        const answers = showResults
        ? []
        : AnswerList(state.questionsCAM[currentQuestionIndex]);
        
        if (showResults === true){
            console.log(state.mapa)
            state.mapa.forEach((value, key) => {
                console.log(value)
                console.log('this is la llave',key)
                state.total += value;
            })
            console.log(state.total)
            console.log(state.mapa)

            state.templateParamsCAM = {
            Acertadas: state.total
            }
            console.log(state.templateParamsCAM)
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
        state.currentQuestionIndex === state.questionsCAM.length;
        const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex - 1;
        const answers = showResults
        ? []
        : AnswerList(state.questionsCAM[currentQuestionIndex]);
    
        return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
        };
    }
    case "RESTART": {
        return initialStateCAM;
    }
    default:
        return state;
    }
};


export const Context = createContext({});

export const QuizContextCAM = createContext();

export const QuizProviderCAM = ({ children }) => {
const value = useReducer(reducerCAM, initialStateCAM);


return <QuizContextCAM.Provider value={value}>{children}</QuizContextCAM.Provider>;

};
