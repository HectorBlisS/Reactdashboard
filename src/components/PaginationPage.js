/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as clientesActions from '../actions/clientesActions';

const styles = {
    active: {
        borderStyle: 'inset',
    }
};


const BlissNumbers = ({numberOfPages = 1, onClick, currentPage}) => {
    let lista = Array.from(Array(Math.round(numberOfPages)+1).keys());
    let cacho = lista.slice(currentPage, numberOfPages+3);
    // if(currentPage+5 > numberOfPages){
    //     cacho = lista.slice(lista.length-5);
    // }else{
    //     cacho = lista.slice(currentPage, currentPage+5);
    // }

    console.log("lista: ",lista);
    console.log("cacho: ",cacho);
  return(
    <div>
        <button
            onClick={()=>onClick(1)}
        >{"<<"}</button>

        {currentPage !== 1 && <span><button
            onClick={()=>onClick(1)}
        >1</button>{currentPage !== 2 && "..."}</span>}

        {cacho.map(i=>{
            return <button
                style={currentPage === i?styles.active:null}
                onClick={()=>onClick(i)} key={i}>{i}</button>;
        })}

        {cacho[cacho.length-1] !== numberOfPages && <span>...<button
            onClick={()=>onClick(numberOfPages)}
        >{Math.round(numberOfPages)}</button></span>}

        <button
            onClick={()=>onClick(numberOfPages)}
        >{">>"}</button>
    </div>

  );
};


class PaginationPage extends Component {
    state = {
        clientes:{
            pages:{1:[]},
            items:[{}],
            currentPage:1

        },
        propsExists:false
    };

    componentWillReceiveProps(nP){
        this.setState({clientes:nP.clientes, propsExists:true});
    }

    changePage = (page) => {
        console.log("llego esta mierda: ", page);
        this.props.clientesActions.loadClientes(page);
    };


    render() {
        console.log(this.state.clientes);

        const {propsExists} = this.state;
        const currentPageList = this.state.clientes.pages[this.state.clientes.currentPage];
        const {items} = this.state.clientes;
        console.log("los items: ",items);
        console.log("la lista de indices: ",currentPageList);

        return (
            <div>
                {propsExists?<div>
                    <h1>Lista paginada</h1>
                    <h5>test: </h5>
                    <ul>
                        {currentPageList.items.map((indice, i)=>{
                            return <li key={i}>{items[indice].asesor.username}</li>
                        })}
                    </ul>

                        <BlissNumbers
                            currentPage={this.state.clientes.currentPage}
                            numberOfPages={this.state.clientes.numberOfPages}
                            onClick={this.changePage}/>

                </div>:
                <h1>Cargando...</h1>}

                {currentPageList.previous &&<button
                    onClick={()=>this.changePage(this.state.clientes.currentPage - 1)}
                >
                    Anterior
                </button>}
                {currentPageList.next && <button
                    onClick={()=>this.changePage(this.state.clientes.currentPage + 1)}
                >
                    Siguiente
                </button>}



            </div>
        );
    }
}

//PaginationPage.propTypes = {
// myProp: PropTypes.string.isRequired
//};

function mapStateToProps(state, ownProps) {
    return {
        clientes: state.clientes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clientesActions: bindActionCreators(clientesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationPage);