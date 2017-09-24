import {combineReducers} from 'redux';


//count
function countReducer(state = null, action){
    switch(action.type){
        case "LOAD_CLIENTES_SUCCESS":
            return action.payload.count;
        default:
            return state;
    }
}
//pages
function pagesReducer(state = {}, action){
    switch(action.type){
        case "LOAD_CLIENTES_SUCCESS":
            return {...state,
                [action.payload.page]: {
                    items: action.payload.items.map(i=> i.id),
                    next:action.payload.next,
                    previous:action.payload.previous
                }
            };


        default:
            return state;
    }
}

//currentPage --Cambiar por un action que no haga consumo--
function currentPageReducer(state = 1, action){
    switch(action.type){
        case "LOAD_CLIENTES_SUCCESS":
            return action.payload.page;
        case "SET_FOUND_PAGE":
            return action.page;
        default:
            return state;
    }
}

//items together
function itemsReducer(state = [], action){
    switch(action.type){
        case "LOAD_CLIENTES_SUCCESS":
            let obj = {};
            action.payload.items.map(i=>{
                obj[i.id] = i;
            });
            return {...state, ...obj};
        default:
            return state;
    }
}

//number of pages
function numberOfPagesReducer(state = 1, action){
    if(action.type === "LOAD_CLIENTES_SUCCESS") return action.payload.numberOfPages;
    return state;
}

//combine
const clientesReducer = combineReducers({
    count:countReducer,
    pages:pagesReducer,
    items:itemsReducer,
    currentPage:currentPageReducer,
    numberOfPages: numberOfPagesReducer

});

export default clientesReducer;