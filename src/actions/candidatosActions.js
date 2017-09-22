import api from '../Api/Django';


export function loadCandidatosSuccess(candidatos){
    return {type:"LOAD_CANDIDATOS_SUCCESS", candidatos}
}
export function saveCandidatoSuccess(candidato){
    return {type:"SAVE_CANDIDATO_SUCCESS", candidato}
}

export function loadCandidatos(){
    return function(dispatch, getState){
        api.getCandidatos()
            .then(lista=>{
                dispatch(loadCandidatosSuccess(lista));

            })
            .catch(e=>{
                console.log(e);
            });
    }
}

export function saveCandidato(candidato){
    return function(dispatch, getState){
        return api.newCandidato(candidato)
            .then(c=>{
                dispatch(saveCandidatoSuccess(c));
                return true

            }).catch(e=>console.log(e))
    }
}

