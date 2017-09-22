import React from 'react';
import {GridList, GridTile, Dialog, FloatingActionButton, TextField, DatePicker, RaisedButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';



class CandidatoForm extends React.Component {

    state = {
        candidato:{
            nombre:'',
            telefono:'',
            correo:'',
            fecha_reclutamiento:''
        }
    };

    componentWillReceiveProps(nP){
        this.setState({candidato:nP.candidato});
    }

    handleText=(e)=>{
        let field = e.target.name;
        let candidato = this.state.candidato;
        candidato[field]= e.target.value;
        this.setState({candidato})
        console.log(this.state.candidato)
    };
    handleDates =(e,val)=>{
        let field = 'fecha_reclutamiento';
        let candidato = this.state.candidato;
        candidato[field] = val
        this.setState({candidato});

    };
    addCandidato=()=>{
      this.props.saveCandidato(this.state.candidato)
    };
    render() {
        const {handleOpen, handleClose, open} = this.props;
        const {candidato} = this.state;
        return (
            <div>
                <FloatingActionButton
                    style={{position: 'fixed', bottom: 15, right: 15}}
                    backgroundColor="rgb(87, 101, 142)"
                    label="Agregar"
                    labelColor="#FFF"
                    onTouchTap={handleOpen}>
                    <ContentAdd/>
                </FloatingActionButton>
                <Dialog
                    title="Agrega un Prospecto"
                    modal={false}
                    open={open}
                    onRequestClose={handleClose}
                >
                    <GridList cols={2} cellHeight="auto">
                        <GridTile cols={1}>
                            <TextField
                                value={candidato.nombre}
                                floatingLabelFocusStyle={{color: 'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor: 'rgb(87, 101, 142)'}}
                                hintText="Nombre"
                                floatingLabelText="Nombre"
                                name="nombre"
                                onChange={this.handleText}
                                fullWidth={true}/>
                        </GridTile>
                        <GridTile cols={1}>
                            <TextField
                                value={candidato.telefono}
                                floatingLabelFocusStyle={{color: 'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor: 'rgb(87, 101, 142)'}}
                                hintText="Teléfono"
                                floatingLabelText="Teléfono"
                                name="telefono"
                                onChange={this.handleText}
                                fullWidth={true}/>
                        </GridTile>
                    </GridList>
                    <GridList cols={2} cellHeight="auto">
                        <GridTile cols={1}>

                            <DatePicker hintText="Fecha de Reclutamiento"
                                        floatingLabelFocusStyle={{color: 'rgb(87, 101, 142)'}}
                                        underlineFocusStyle={{borderColor: 'rgb(87, 101, 142)'}}
                                        name='fecha_reclutamiento'
                                        onChange={this.handleDates}
                                        value={new Date(candidato.fecha_reclutamiento)}
                                        autoOk={true}
                                        floatingLabelText="Fecha de Reclutamiento"/>
                        </GridTile>
                        <GridTile cols={1}>
                            <TextField
                                floatingLabelFocusStyle={{color: 'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor: 'rgb(87, 101, 142)'}}
                                hintText="Correo"
                                floatingLabelText="Correo"
                                name="correo"
                                onChange={this.handleText}
                                fullWidth={true}
                                value={candidato.correo}

                            />

                        </GridTile>
                    </GridList>
                    <GridList cols={1} cellHeight="auto">
                        <GridTile cols={1}>

                            <RaisedButton
                                backgroundColor="rgb(87, 101, 142)"
                                label="Agregar"
                                fullWidth={true}
                                labelColor="#FFF"
                                onTouchTap={this.addCandidato}/>
                        </GridTile>
                    </GridList>
                </Dialog>
            </div>
        )
    }
}

export default CandidatoForm;