export function candidatosReducer(state = [], action){
    switch(action.type){
        case "LOAD_CANDIDATOS_SUCCESS":
            return action.candidatos

        default:
            return state;
    }
}