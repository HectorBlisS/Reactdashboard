export function candidatosReducer(state = [], action){
    switch(action.type){
        case "LOAD_CANDIDATOS_SUCCESS":
            return action.candidatos;

        case "SAVE_CANDIDATO_SUCCESS":
            return [...state, action.candidato];

        default:
            return state;
    }
}