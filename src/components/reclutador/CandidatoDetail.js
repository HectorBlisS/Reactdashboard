import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class CandidatoDetail extends Component {

    state = {
      candidato:{}
    };

    componentWillReceiveProps(nextProps){
        const candidato = Object.assign({}, nextProps.candidato);
        this.setState({candidato, candidatos:nextProps.candidatos});
    }

    openEditForm = () => {
      this.props.setCandidato(this.state.candidato);
    };

    render() {
        const {candidato, candidatos} = this.state;
        return (
            <div style={{paddingTop:274}}>
                <a
                    onClick={this.openEditForm}
                    href="#!">
                    {candidato.nombre}
                </a>


                <br/>
                {candidato.telefono}
                <br/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    if (ownProps.match){
        const id = ownProps.match.params.candidatoId;
        return {
            candidatos:state.candidatos,
            candidato:state.candidatos.filter(c=> c.id == id )[0]
        }
    }

}

function mapDispatchToProps(actions, dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidatoDetail);