import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {GridList, GridTile, Tabs, Tab, List, ListItem, RaisedButton, Dialog, TextField, FloatingActionButton,SelectField,MenuItem, DatePicker, Toggle} from 'material-ui';
import Mail from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';
import Port from 'material-ui/svg-icons/action/work';
import Ev from 'material-ui/svg-icons/action/event';
import Fing from 'material-ui/svg-icons/action/fingerprint';
import Loc from 'material-ui/svg-icons/communication/location-on';
import moment from 'moment';
import User from 'material-ui/svg-icons/action/account-circle';



class CandidatoDetail extends Component {

    state = {
      candidato:{},
        openAsesor:false,
    };

    componentWillReceiveProps(nextProps){
        const candidato = Object.assign({}, nextProps.candidato);
        this.setState({candidato, candidatos:nextProps.candidatos});
    }

    openEditForm = () => {
      this.props.setCandidato(this.state.candidato);
    };
    //make asesor
    handleOpenAsesor = () => {
        this.setState({openAsesor: true});
    };

    handleCloseAsesor = () => {
        this.setState({openAsesor: false});
    };
    handleTexto=(e)=>{
        let field = e.target.name;
        let candidato = this.state.candidato;
        candidato[field] = e.target.value;
        this.setState({candidato})
    };
    convertirAsesor=()=>{
        if(window.confirm("Una vez que asignes estos datos, no podras cambiarlos")){
            let asesor = Object.assign({}, this.state.candidato);
            asesor['candidato'] = false;
            this.props.saveCandidato(asesor);
            this.handleCloseAsesor();
        }

    };

    render() {
        const {candidato, candidatos} = this.state;
        return (
            <div style={{paddingTop:74}} className="candidato-tabla">
                <GridList cols={3} cellHeight='auto'>
                    <GridTile cols={1} className="candidato-datos">
                        {candidato.candidato?<RaisedButton label="Convertir en Asesor" fullWidth={true} onTouchTap={this.handleOpenAsesor }/>:''}
                        <Dialog
                            title="Completa para acreditar como Asesor"
                            modal={false}
                            open={this.state.openAsesor}
                            onRequestClose={this.handleCloseAsesor}>


                            <GridList cellHeight={'auto'} cols={3}>
                                <GridTile cols={1}>
                                    <TextField
                                        value={candidato.id_asesor}
                                        hintText="Clave de Asesor"
                                        floatingLabelText="Clave de Asesor"
                                        name={"id_asesor"}
                                        onChange={this.handleTexto}/>

                                </GridTile>
                                <GridTile cols={1}>
                                    <TextField
                                        value={candidato.tipo}
                                        hintText="Tipo de Asesor"
                                        floatingLabelText="Tipo de Asesor"
                                        name={"tipo"}
                                        onChange={this.handleTexto}/>

                                </GridTile>
                                <GridTile cols={1}>
                                    <TextField
                                        value={candidato.oficina}
                                        hintText="Oficina"
                                        floatingLabelText="Oficina"
                                        name={"oficina"}
                                        onChange={this.handleTexto}/>
                                </GridTile>

                                <RaisedButton label="Guardar" fullWidth={true} onTouchTap={this.convertirAsesor}/>
                            </GridList>
                        </Dialog>

                        <List style={{textAlign:'left'}}>
                            <ListItem disabled primaryText={candidato.nombre} leftIcon={<User/>} />
                            <ListItem disabled primaryText={candidato.correo} leftIcon={<Mail/>} />
                            <ListItem disabled primaryText={candidato.telefono} leftIcon={<Phone/>} />
                            <ListItem disabled primaryText={moment(candidato.fecha_reclutamiento).format('LL')} leftIcon={<Ev/>} />
                            <ListItem disabled primaryText={candidato.candidato?'Candidato':'Asesor'} leftIcon={<Port/>} />
                            {candidato.candidato?'':
                                <div>
                                    <ListItem disabled primaryText={candidato.oficina} leftIcon={<Loc/>} />
                                    <ListItem disabled primaryText={candidato.tipo} leftIcon={<Fing/>} />
                                </div>}
                        </List>
                        <RaisedButton
                            fullWidth={true}
                            onClick={this.openEditForm}
                            label='Editar'
                        />

                    </GridTile>
                    <GridTile cols={2}>

                    </GridTile>
                </GridList>


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