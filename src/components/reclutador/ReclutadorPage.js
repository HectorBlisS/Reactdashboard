import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CandidatoLista from './CandidatoLista';
import CandidatoNav from './CandidatoNav';
import CandidatoForm from './CandidatoForm';
import CandidatoDetail from './CandidatoDetail';
import {Route} from 'react-router-dom';
import * as candidatosActions from '../../actions/candidatosActions';
import './candidato.css';
import toastr from 'toastr';


class ReclutadorPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            candidatos:[],
            candidato:{},
            newCandidato:{},
            openForm:false

        }
    }


    componentWillReceiveProps(nextProps){
        this.setState({candidatos:nextProps.candidatos});
    }

    //Form Functions
    handleOpenForm=()=>{
      this.setState({openForm:true})
    };
    handleCloseForm=()=>{
        this.setState({
            openForm:false
        })
    };
    saveCandidato=(c)=>{
        this.props.actions.saveCandidato(c)
            .then(()=>toastr.success('Se ha Guardado :)'));
            this.handleCloseForm()
    };


    listaAndForm =()=>{
        return(
            <div style={{paddingTop:'74px'}}>
                <CandidatoLista
                    lista={this.state.candidatos}/>
                <CandidatoForm
                    open={this.state.openForm}
                    handleOpen={this.handleOpenForm}
                    handleClose={this.handleCloseForm}
                    saveCandidato={this.saveCandidato}/>

            </div>
        )
    };
    candidatoDetail =()=>{
        return(
            <CandidatoDetail/>
        )
    };

    render() {
        console.log(this.state.candidatos);
        //console.log(this.state.candidatos);
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
        candidatos: state.candidatos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(candidatosActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReclutadorPage);
//export default ReclutadorPage
