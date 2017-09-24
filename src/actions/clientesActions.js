export function loadClientesSuccess(payload){
    return {type:"LOAD_CLIENTES_SUCCESS", payload}
}

export function setFoundPage(page){
    return {type:"SET_FOUND_PAGE", page}
}

export function loadClientes(page = 1){
    return function(dispatch, getState){
        const pages = getState().clientes.pages;
        const current = getState().clientes.currentPage;
        if(pages[page]){
            dispatch(setFoundPage(page));
            return;
        }
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        fetch('http://dipra.planb.com.mx/api/clientes/?page='+page, {headers:{Authorization: 'Token '+userToken}})
            .then(r=>r.json())
            .then(data=>{
                console.log("hice consumo: ",data);
                const payload = {
                    count:data.count,
                    items:data.results,
                    next:data.next,
                    previous:data.previous,
                    page:page,
                    numberOfPages:data.count/data.results.length
                };
                dispatch(loadClientesSuccess(payload))

            })
            .catch(e=>console.log(e));
    }
}