export function candidatosReducer(state = [], action){
    switch(action.type){
        case "LOAD_CANDIDATOS_SUCCESS":
            return action.candidatos;

        case "SAVE_CANDIDATO_SUCCESS":
            return [...state, action.candidato];

        case "UPDATE_CANDIDATO_SUCCESS":
            return state.map(c=>{
               if(c.id === action.candidato.id){
                   return action.candidato
               }
               return c;
            });

        default:
            return state;
    }
}