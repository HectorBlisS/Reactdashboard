import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CandidatoLista from './CandidatoLista';
import CandidatoNav from './CandidatoNav';
import CandidatoForm from './CandidatoForm';
import CandidatoDetail from './CandidatoDetail';
import {Route} from 'react-router-dom';
import './candidato.css';


class ReclutadorPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            candidatoLista:[],
            candidato:{},
            newCandidato:{}

        }
    }


    listaAndForm =()=>{
        return(
            <div style={{paddingTop:'74px'}}>
                <CandidatoLista
                    lista={this.state.candidatoLista}/>

            </div>
        )
    };
    candidatoDetail =()=>{
        return(
            <CandidatoDetail/>
        )
    };

    render() {
        return (
            <div>
                <CandidatoNav/>

                <Route path={`${this.props.match.url}`} render={this.listaAndForm}/>
                <Route path={`${this.props.match.url}/:candidatoId`} render={this.candidatoDetail}/>




            </div>
        );
    }
}



function mapStateToProps(state, ownProps) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(actions, dispatch)
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(ReclutadorPage);
export default ReclutadorPage
