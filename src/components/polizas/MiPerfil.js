import React from 'react';
import api from '../../Api/Django';
import toastr from 'toastr';

import {GridList, GridTile, Tabs, Tab, List, ListItem, RaisedButton, Dialog, TextField, FloatingActionButton} from 'material-ui';

import 'moment/locale/es';
import moment from 'moment';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionInfo from 'material-ui/svg-icons/action/open-in-new';
import Mail from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';
import Port from 'material-ui/svg-icons/action/work';
import Ev from 'material-ui/svg-icons/action/event';
import Fing from 'material-ui/svg-icons/action/fingerprint';
import Loc from 'material-ui/svg-icons/communication/location-on';
import Papel from 'material-ui/svg-icons/action/description';
import Carta from 'material-ui/svg-icons/action/book';
import ContentAdd from 'material-ui/svg-icons/content/add';




class MiPerfil extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            asesor:{},
            archivos:[],
            open:false,
        }
    }
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('userToken'));


        if(!user){
            this.props.history.push('/login');
        }else{
            api.getProfile()
                .then(r=>{
                    this.setState({user:r,asesor:r.asesor_user});
                    api.getAsesorArchivos(r.asesor_user.id).then(r=>{
                        this.setState({archivos:r})
                        console.log(this.state.archivos)
                    })
                    if(!r.profile.aprobado){
                        this.props.history.push('/perfil');
                        toastr.warning('Aún no te han aprobado')
                    }
                    console.log(r);
                })
                .catch(e=>toastr.error("algo falló"));
        }


    }

    render(){
        const candidato = this.state.asesor
        return(
            <div style={{padding:'1% 3%'}}>
                <div>
                    <GridList cellHeight="auto" cols={5}>
                        <GridTile cols={2} style={{padding:'0 1%'}}>
                            <h2>{candidato.nombre}</h2>
                            {candidato.candidato?<RaisedButton label="Completar Info" fullWidth={true} onTouchTap={this.handleOpen}/>:''}
                            <Dialog
                                title="Completa para acreditar como Asesor"
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}>

                                <GridList cellHeight={'auto'} cols={3}>
                                    <GridTile cols={1}>
                                        <TextField

                                            hintText="Clave de Asesor"
                                            floatingLabelText="Clave de Asesor"
                                            name={"id_asesor"}
                                            onChange={this.handleTexto}/>

                                    </GridTile>
                                    <GridTile cols={1}>
                                        <TextField
                                            hintText="Tipo de Asesor"
                                            floatingLabelText="Tipo de Asesor"
                                            name={"tipo"}
                                            onChange={this.handleTexto}/>

                                    </GridTile>
                                    <GridTile cols={1}>
                                        <TextField
                                            hintText="Oficina"
                                            floatingLabelText="Oficina"
                                            name={"oficina"}
                                            onChange={this.handleTexto}/>
                                    </GridTile>
                                    <RaisedButton label="Guardar" fullWidth={true} onTouchTap={this.editarAsesor}/>
                                </GridList>


                            </Dialog>

                            <List style={{textAlign:'left'}}>

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
                        </GridTile>
                        <GridTile cols={3} style={{padding:'0 1%'}}>
                            {candidato.candidato?
                                <Tabs
                                    inkBarStyle={{backgroundColor:'#57658e'}}
                                    tabItemContainerStyle={{backgroundColor:'white'}}

                                    value={this.state.value}
                                    onChange={this.handleChange}>


                                    <Tab
                                        style={{color:'#57658e'}}
                                        label="Cita" value="a">
                                        Cita
                                    </Tab>

                                    <Tab
                                        style={{color:'#57658e'}}
                                        label="Cursos" value="c">Cursos</Tab>




                                </Tabs>:
                                <Tabs
                                    inkBarStyle={{backgroundColor:'#57658e'}}
                                    tabItemContainerStyle={{backgroundColor:'white'}}
                                    value={this.state.value}
                                    onChange={this.handleChange}>
                                    <Tab
                                        style={{color:'#57658e', position:'relative'}}
                                        label="Archivos" value="a">

                                        <List>
                                            {this.state.archivos.map((archivo,key)=>{
                                                return(
                                                    <ListItem
                                                        key={key}
                                                        primaryText={archivo.nombre}
                                                        secondaryText={archivo.tipo}
                                                        leftIcon={archivo.tipo==='buzon'?<ContentInbox />:
                                                            archivo.tipo==='documento'? <Papel />:
                                                                archivo.tipo==='carta'?<Carta />:''}

                                                        rightIcon={<a href={archivo.archivo} target="_blank"><ActionInfo /></a>}/>



                                                )
                                            })}


                                        </List>
                                    </Tab>
                                    <Tab
                                        style={{color:'#57658e'}}
                                        label="Metas" value="b">Metas</Tab>
                                    <Tab
                                        style={{color:'#57658e'}}
                                        label="Clave" value="c">Clave</Tab>




                                </Tabs>}

                        </GridTile>
                    </GridList>
                </div>

            </div>
        )
    }
}

export default MiPerfil;