import { createStore } from 'redux';
import { connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // importa el almacenamiento que quieres utilizar

const initialState = {
  idArray: {},
  templateFinal: {},
  templateParams: {},
  templateParams2: {},
  templateParamsCAM: {}, 
  complete: false,
  banderaTIE: false,
  banderaTEMP: false,
  banderaCAM: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_TEMPLATE_PARAMS':
      return {
        ...state,
        templateParams: action.templateParams,
      };
    case 'SAVE_TEMPLATE_PARAMS2':
      return {
        ...state,
        templateParams2: action.templateParams2,
      };
    case 'SAVE_TEMPLATE_CAM':
      return {
        ...state,
        templateParamsCAM: action.templateParamsCAM,
      };
    case 'SAVE_ID_ARRAY':
      return {
        ...state,
        idArray: action.idArray,
      };
    case 'SET_COMPLETE':
      console.log('complete', action.complete);
      return {
        ...state,
        complete: action.complete,
      };
    case 'MERGE_ARRAYS':
        console.log('merge');
        console.log(state.templateFinal);
      return {
        ...state,
        templateFinal: {...state.idArray, ...state.templateParams, ...state.templateParams2, ...state.templateParamsCAM},
      };
    case 'SET_BANDERA_TIE':
      console.log(state.banderaTIE);
      return {
        ...state,
        banderaTIE: action.banderaTIE,
      };
    case 'SET_BANDERA_TEMP':
      return {
        ...state,
        banderaTEMP: action.banderaTEMP,
      };
      case 'SET_BANDERA_CAM':
      return {
        ...state,
        banderaCAM: action.banderaCAM,
      };
      case 'RESET_STATES':
        return {
          idArray: {},
          templateFinal: {},
          templateParams: {},
          templateParams2: {},
          templateParamsCAM: {},  
          complete: false,
          banderaTIE: false,
          banderaTEMP: false,
          banderaCAM: false,
        };      
    default:
      return state;
  }
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

//Aqui guardo los datos del quiz 1
export function saveTemplateParams(templateParams) {
    return {
      type: 'SAVE_TEMPLATE_PARAMS',
      templateParams,
    };
}
//aqui guardo los datos del quiz 2
export function saveTemplateParams2(templateParams2) {
    return {
      type: 'SAVE_TEMPLATE_PARAMS2',
      templateParams2,
    };
}
//aqui guardo los datos del quiz CAMBRIDGE
export function saveTemplateParamsCAM(templateParamsCAM) {
  return {
    type: 'SAVE_TEMPLATE_CAM',
    templateParamsCAM,
  };
}
//aqui guardo los datos de la persona que esta utilizando la app
export function saveIdArray(idArray) {
    console.log('this is array id', idArray);
    return {
      type: 'SAVE_ID_ARRAY',
      idArray,
    };
}

export function setComplete(complete) {
    return {
      type: 'SET_COMPLETE',
      complete,
    };
}

//aqui levanto la bandera TIE
export function setBanderaTIE(banderaTIE) {
  return {
    type: 'SET_BANDERA_TIE',
    banderaTIE,
  };
}

//aqui levanto la bandera TEMP
export function setBanderaTEMP(banderaTEMP) {
  return {
    type: 'SET_BANDERA_TEMP',
    banderaTEMP,
  };
}
//aqui levanto la bandera CAM
export function setBanderaCAM(banderaCAM) {
  return {
    type: 'SET_BANDERA_CAM',
    banderaCAM,
  };
}

export function resetStates() {
  return {
    type: 'RESET_STATES',
  };
}


export const selectTemplateFinal = state => state.templateFinal;

export const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);

export default store;