import React, { createContext, useReducer, useState } from "react";
import questionsTIE from "../contexts/dataTIE"
import { AnswerList } from "../../src/helper";

const initialStateTIE = {
    questionsTIE,
    currentQuestionIndex: 0,
    currentAnswer: "",
    answers: AnswerList(questionsTIE[0]),
    showResults: false,
    correctAnswersCount: 0,
    indexValue: 0,


    
    //Competencia
    Autoconciencia: 0,
    //subs
    IEP: 0,
    CEP: 0,

    //Competencia
    Autocontrol: 0,
    //subs
    MEDFC: 0,
    TAE: 0,
    AUTO: 0,

    //Competencia
    Empatia: 0,
    //subs
    IEEO: 0,
    CEEO: 0,

    //Competencia
    HabilidadesSociales : 0,
    //subs
    COLAB: 0,
    FYAAC: 0,
    RDC: 0,
    COM: 0,
    INFLU: 0,
    LIDER: 0,
    //para el boton anterior
    PreviousAnsw: 0,
    PreviousSubcomp: "",
    mapa: new Map()
    
  };
  
  const reducerTIE = (state, action) => {
    switch (action.type) {
      case "SELECT_ANSWER": {

        return {
          ...state,
          currentAnswer: action.payload,

          //correctAnswersCount,
        };
      }
      case "NEXT_QUESTION": {
        const PreguntaYrespuestas = state.questionsTIE[state.currentQuestionIndex].answers;
        let respuesta;
        let subcomp;
        let currentAnswer = state.currentAnswer;
        
        switch (currentAnswer) {
          case "Nada de acuerdo":
          state.indexValue = 0;
          respuesta = PreguntaYrespuestas[state.indexValue].value;
          subcomp = PreguntaYrespuestas[state.indexValue].subcompetencia;
          console.log(subcomp, respuesta)
          break;
          case "Algo de acuerdo":
          state.indexValue = 1;
          respuesta = PreguntaYrespuestas[state.indexValue].value;
          subcomp = PreguntaYrespuestas[state.indexValue].subcompetencia;
          console.log(subcomp, respuesta)

          break;
          case "Bastante de acuerdo":
          state.indexValue = 2;
          respuesta = PreguntaYrespuestas[state.indexValue].value;
          subcomp = PreguntaYrespuestas[state.indexValue].subcompetencia;
          console.log(subcomp, respuesta)

          break;
          case "Totalmente de acuerdo":
          state.indexValue = 3;
          respuesta = PreguntaYrespuestas[state.indexValue].value;
          subcomp = PreguntaYrespuestas[state.indexValue].subcompetencia;
          console.log(subcomp, respuesta)

          break;
          }
          state.mapa.set(state.currentQuestionIndex, {respuesta, description: subcomp});
          console.log(state.mapa)
          
          const showResults =
          state.currentQuestionIndex === state.questionsTIE.length - 1;
          const currentQuestionIndex = showResults
          ? state.currentQuestionIndex
          : state.currentQuestionIndex + 1;
          const answers = showResults
          ? []
          : AnswerList(state.questionsTIE[currentQuestionIndex]);
          
          if (showResults === true){
            console.log(state.mapa)
            state.mapa.forEach((value, key) => {
              if (value.description == "IEP"){
                state.IEP += value.respuesta;
              } 
              else if (value.description == "CEP"){
                state.CEP += value.respuesta;
              }
              else if (value.description == "MEDFC"){
                state.MEDFC += value.respuesta;
              }
              else if (value.description == "TAE"){
                state.TAE += value.respuesta;
              }
              else if (value.description == "AUTO"){
                state.AUTO += value.respuesta;
              }
              else if (value.description == "IEEO"){
                state.IEEO += value.respuesta;
              }
              else if (value.description == "CEEO"){
                state.CEEO += value.respuesta;
              }
              else if (value.description == "COLAB"){
                state.COLAB += value.respuesta;
              }
              else if (value.description == "FYAAC"){
                state.FYAAC += value.respuesta;
              }
              else if (value.description == "RDC"){
                state.RDC += value.respuesta;
              }
              else if (value.description == "COM"){
                state.COM += value.respuesta;
              }
              else if (value.description == "INFLU"){
                state.INFLU += value.respuesta;
              }
              else if (value.description == "LIDER"){
                state.LIDER += value.respuesta;
              }
              
            })
            console.log("Estos son los valores de las subscompetencias");
            console.log(state.IEP);
            console.log(state.CEP);
            console.log(state.MEDFC);
            console.log(state.TAE);
            console.log(state.AUTO);
            console.log(state.IEEO);
            console.log(state.CEEO);
            console.log(state.COLAB);
            console.log(state.FYAAC);
            console.log(state.RDC);
            console.log(state.COM);
            console.log(state.INFLU);
            console.log(state.LIDER);
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
          state.currentQuestionIndex === state.questionsTIE.length;
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
  

  export const Context = createContext({});

  export const MyProvider = (props) => {
      const [arrayTIE, setArrayTIE] = useState({});
      const [arrayTemp, setArrayTemp] = useState({});
  
      const mergeArrays = () => {
          const templateFinal = { ...arrayTIE, ...arrayTemp };
          return templateFinal;
      };
  
      return (
          <Context.Provider
          value={{
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

export const QuizContextTIE = createContext();

export const QuizProviderTIE = ({ children }) => {
  const value = useReducer(reducerTIE, initialStateTIE);


  return <QuizContextTIE.Provider value={value}>{children}</QuizContextTIE.Provider>;

};
