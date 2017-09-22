import api from '../Api/Django';

export function loadCandidatosSuccess(candidatos){
    return {type:"LOAD_CANDIDATOS_SUCCESS", candidatos}
}

export function loadCandidatos(){
    return function(dispatch, getState){
        api.getCandidatos()
            .then(lista=>{
                dispatch(loadCandidatosSuccess(lista))
            })
            .catch(e=>console.log(e));
    }
}