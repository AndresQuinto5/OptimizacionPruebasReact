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
    templateParams: {},
    mapa: new Map()
    
  };
  


  function eval1(a){
    if (a <= 8) {
      return "Bajo"
    }
    else if (a >= 9 && a <= 12) {
      return "Medio"
    }
    else if (a >= 13 && a <= 15) {
      return "Alto"
    }
  }
  function eval2(a){
    if (a <= 15) {
      return "Bajo"
    }
    else if (a >= 16 && a <= 24) {
      return "Medio"
    }
    else if (a >= 25 && a <= 30) {
      return "Alto"
    }
  }
  function eval3(a){
    if (a <= 23) {
      return "Bajo"
    }
    else if (a >= 24 && a <= 35) {
      return "Medio"
    }
    else if (a >= 36 && a <= 45) {
      return "Alto"
    }
  }
  function eval4(a){
    if (a <= 45) {
      return "Bajo"
    }
    else if (a >= 46 && a <= 75) {
      return "Medio"
    }
    else if (a >= 76 && a <= 90) {
      return "Alto"
    }
  }
  function eval5(a){
    if (a <= 55) {
      return "Bajo"
    }
    else if (a >= 56 && a <= 84) {
      return "Medio"
    }
    else if (a >= 85 && a <= 105) {
      return "Alto"
    }
  }

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

            let evalIEP = eval2(state.IEP);
            let evalCEP = eval1(state.CEP);
            let evalMEDFC = eval3(state.MEDFC);
            let evalTAE = eval1(state.TAE);
            let evalAUTO = eval2(state.AUTO);
            let evalIEEO = eval1(state.IEEO);
            let evalCEEO = eval1(state.CEEO);
            let evalCOLAB = eval1(state.COLAB);
            let evalFYAAC = eval1(state.FYAAC);
            let evalRDC = eval1(state.RDC);
            let evalCOM = eval2(state.COM);
            let evalINFLU = eval1(state.INFLU);
            let evalLIDER = eval1(state.LIDER);
            let evalAutoconciencia = eval3(state.Autoconciencia);
            let evalAutocontrol = eval4(state.Autocontrol);
            let evalEmpatia = eval2(state.Empatia);
            let evalHabilidadesSociales = eval5(state.HabilidadesSociales);

            state.templateParams = {
              uno: state.IEP,
              uno_: evalIEP,
              dos: state.CEP,
              dos_: evalCEP,
              tres: state.MEDFC,
              tres_: evalMEDFC,
              cuatro: state.TAE,
              cuatro_: evalTAE,
              cinco: state.AUTO,
              cinco_: evalAUTO,
              seis: state.IEEO,
              seis_: evalIEEO,
              siete: state.CEEO,
              siete_: evalCEEO,
              ocho: state.COLAB,
              ocho_: evalCOLAB,
              nueve: state.FYAAC,
              nueve_: evalFYAAC,
              diez: state.RDC,
              diez_: evalRDC,
              once: state.COM,
              once_: evalCOM,
              doce: state.INFLU,
              doce_: evalINFLU,
              trece: state.LIDER,
              trece_: evalLIDER,
              catorce: state.Autoconciencia,
              catorce_: evalAutoconciencia,
              quince: state.Autocontrol,
              quince_: evalAutocontrol,
              dieciseis: state.Empatia,
              dieciseis_: evalEmpatia,
              diecisiete: state.HabilidadesSociales,
              diecisiete_: evalHabilidadesSociales




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
