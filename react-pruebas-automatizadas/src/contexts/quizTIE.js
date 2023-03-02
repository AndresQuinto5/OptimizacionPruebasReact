import React, { createContext, useReducer, useState } from "react";
import questionsTIE from "../contexts/dataTIE"
import { AnswerList } from "../../src/helper";
/*

  Archivo de js, donde se encuentra el contexto de la evaluacion TIE en el cual manejo los casos de los botones como
  siguiente pregunta, pregunta anterior, seleccionar respuesta, mostrar resultados, reiniciar evaluacion, etc.

  ademas al final del archivo realizo la actualizacion de datos en mi store.js, en donde almaceno en el navegador los resultados o data necesaria
  para enviar

  La calificacion de cada competencia se realiza en base a la suma de las respuestas de cada subcompetencia, y 
  Ademas se realizan cinco casos de evaluacion, evaluaciones para subcompetencias y competencias indicando si para cada caso es bajo, medio o alto
*/
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
  //Evaluaciones de cada sub competencia - competencia
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
        respuesta = PreguntaYrespuestas.find(answer => answer.answer === currentAnswer).value;
        subcomp = PreguntaYrespuestas.find(answer => answer.answer === currentAnswer).subcompetencia;
        console.log(respuesta, subcomp)

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

            state.Autoconciencia = state.IEP + state.CEP;
            state.Autocontrol = state.MEDFC + state.TAE + state.AUTO;
            state.Empatia = state.IEEO + state.CEEO;
            state.HabilidadesSociales = state.COLAB + state.FYAAC + state.RDC + state.COM + state.INFLU + state.LIDER;

            console.log("Estos son los valores de las competencias");
            console.log(state.Autoconciencia);
            console.log(state.Autocontrol);
            console.log(state.Empatia);
            console.log(state.HabilidadesSociales);

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
              IEP: state.IEP,
              evalIEP: evalIEP,
              CEP: state.CEP,
              evalCEP: evalCEP,
              MEDFC: state.MEDFC,
              evalMEDFC: evalMEDFC,
              TAE: state.TAE,
              evalTAE: evalTAE,
              AUTO: state.AUTO,
              evalAUTO: evalAUTO,
              IEEO: state.IEEO,
              evalIEEO: evalIEEO,
              CEEO: state.CEEO,
              evalCEEO: evalCEEO,
              COLAB: state.COLAB,
              evalCOLAB: evalCOLAB,
              FYAAC: state.FYAAC,
              evalFYAAC: evalFYAAC,
              RDC: state.RDC,
              evalRDC: evalRDC,
              COM: state.COM,
              evalCOM: evalCOM,
              INFLU: state.INFLU,
              evalINFLU: evalINFLU,
              LIDER: state.LIDER,
              evalLIDER: evalLIDER,
              Autoconciencia: state.Autoconciencia,
              evalAutoconciencia: evalAutoconciencia,
              Autocontrol: state.Autocontrol,
              evalAutocontrol: evalAutocontrol,
              Empatia: state.Empatia,
              evalEmpatia: evalEmpatia,
              HabilidadesSociales: state.HabilidadesSociales,
              evalHabilidadesSociales: evalHabilidadesSociales
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
