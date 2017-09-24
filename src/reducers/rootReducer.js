import {combineReducers} from 'redux';
import {candidatosReducer} from './candidatosReducer';
import clientesReducer from './clientesReducer';

export const rootReducer = combineReducers({
    candidatos: candidatosReducer,
    clientes: clientesReducer
});

