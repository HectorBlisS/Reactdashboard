import {combineReducers} from 'redux';
import {candidatosReducer} from './candidatosReducer';


export const rootReducer = combineReducers({
    candidatos: candidatosReducer
});

