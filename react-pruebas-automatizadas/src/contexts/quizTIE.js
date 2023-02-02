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
    indexValue: 0,
    //Competencia
    Autoconciencia: 0,
    //subs
    IdentificarEmocionesPropias: 0,
    ComprenderEmocionesPropias: 0,
    //Competencia
    Autocontrol: 0,
    //subs
    ManejarYdirigirEmociones: 0,
    ToleranciaAlEstres: 0,
    Automotivacion: 0,
    //Competencia
    Empatia: 0,
    //subs
    IdentificarEmocionesEnOtros: 0,
    ComprenderEmocionesOtros: 0,
    //Competencia
    HabilidadesSociales : 0,
    //subs
    Colaboracion: 0,
    FlexibilidadYAdaptacionAlCambio: 0,
    ResolucionDeConflictos: 0,
    Comunicacion: 0,
    Influencia: 0,
    Liderazgo: 0,
    mapa: new Map()
  };
  
  const reducerTIE = (state, action) => {
    switch (action.type) {
      case "SELECT_ANSWER": {
        /*
        const correctAnswersCount =
          action.payload ===
          state.questionsTIE[state.currentQuestionIndex].correctAnswer
            ? state.correctAnswersCount + 1
            : state.correctAnswersCount;
            */
        return {
          ...state,
          currentAnswer: action.payload,
          //correctAnswersCount,
        };
      }
      case "NEXT_QUESTION": {
          let currentAnswer = state.currentAnswer;

          if(currentAnswer == "Nada de acuerdo"){
            console.log(" NUMERO 1")
            state.indexValue = 0;
          }else if (currentAnswer == "Algo de acuerdo"){
            console.log("NUMERO 2")
            state.indexValue = 1;
          }else if (currentAnswer == "Bastante de acuerdo"){
            console.log("NUMERO 3")
            state.indexValue = 2;
          }else if (currentAnswer == "Totalmente de acuerdo"){
            console.log("NUMERO 4")
            state.indexValue = 3;
          }
          const X = state.X;
          state.X = questionsTIE[state.currentQuestionIndex].answers;
          //Definir un index para la respuesta seleccionada y utilizarlo para mandar a llamar los resultados
          const respuesta = X[state.indexValue].value;
          const subcomp = X[state.indexValue].subcompetencia;

          if (subcomp == "IEP"){
            state.IdentificarEmocionesPropias += respuesta;}
          else if (subcomp == "CEP"){
            state.ComprenderEmocionesPropias += respuesta;}
          else if (subcomp == "MEDFC"){
            state.ManejarYdirigirEmociones += respuesta;}
          else if (subcomp == "TAE"){
            state.ToleranciaAlEstres += respuesta;}
          else if (subcomp == "AUTO"){
            state.Automotivacion += respuesta;}
          else if (subcomp == "IEEO"){
            state.IdentificarEmocionesEnOtros += respuesta;}
          else if (subcomp == "CEEO"){
            state.ComprenderEmocionesOtros += respuesta;}
          else if (subcomp == "COLAB"){
            state.Colaboracion += respuesta;}
          else if (subcomp == "FYAAC"){
            state.FlexibilidadYAdaptacionAlCambio += respuesta;}
          else if (subcomp == "RDC"){
            state.ResolucionDeConflictos += respuesta;}
          else if (subcomp == "COM"){
            state.Comunicacion += respuesta;}
          else if (subcomp == "INFLU"){
            state.Influencia += respuesta;}
          else if (subcomp == "LIDER"){
            state.Liderazgo += respuesta;}
          

         // console.log("value:", X[0].value);
          console.log("subcompetencia:", X[state.indexValue].subcompetencia);
          console.log("this is respuesta", respuesta);
          console.log("this is subcomp", state.IdentificarEmocionesPropias);
          console.log("this is current answer", state.currentAnswer);
          console.log(state.IdentificarEmocionesPropias);
          console.log(state.ComprenderEmocionesPropias);
          console.log(state.ManejarYdirigirEmociones);
          console.log(state.ToleranciaAlEstres);
          console.log(state.Automotivacion);
          console.log(state.IdentificarEmocionesEnOtros);
          console.log(state.ComprenderEmocionesOtros);
          console.log(state.Colaboracion);
          console.log(state.FlexibilidadYAdaptacionAlCambio);
          console.log(state.ResolucionDeConflictos);
          console.log(state.Comunicacion);
          console.log(state.Influencia);
          console.log(state.Liderazgo);

          //console.log("competencia:", X[0].competencia);

          //console.log('this is autoconciencia', state.Autoconciencia);
          
          

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
