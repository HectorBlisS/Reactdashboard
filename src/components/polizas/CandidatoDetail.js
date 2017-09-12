import React from 'react';
import {GridList, GridTile, Tabs, Tab, List, ListItem, RaisedButton, Dialog, TextField, FloatingActionButton,SelectField,MenuItem, DatePicker} from 'material-ui';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';
import toastr from 'toastr';
import Mail from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';
import Port from 'material-ui/svg-icons/action/work';
import Ev from 'material-ui/svg-icons/action/event';
import Fing from 'material-ui/svg-icons/action/fingerprint';
import Loc from 'material-ui/svg-icons/communication/location-on';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionInfo from 'material-ui/svg-icons/action/open-in-new';
import Papel from 'material-ui/svg-icons/action/description';
import Carta from 'material-ui/svg-icons/action/book';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ElFile from 'material-ui/svg-icons/editor/attach-file';




class CandidatoDetail extends React.Component {

  constructor(){
    super()
    this.state={

        claves:[],
      open:false,
        newArchivo:false,
        newClave:false,
        newCita:false,
        newCurso:false,
        archivo:{},
        clave:{},
        curso:{},
        cita:{},
      value:'a',
        tipoDoc:'',
        tipoClave:'',
        tipoCurso:'',
      candidato:{
          id:''
      },
        archivos:[],
        citas:[],
        cursos:[],
      asesor:{
        candidato:false,
      },
    }
  }
  componentWillMount(){
    console.log(this.props.match.params.candidatoId)
    api.getCandidato(this.props.match.params.candidatoId).then(r=>{
        console.log(r)
        let archivo = this.state.archivo
        archivo['asesor'] = r.id
        let clave = this.state.clave
        clave['asesor'] = r.id
        let cita = this.state.cita
        cita['asesor'] = r.id
        let curso = this.state.curso
        curso['asesor'] = r.id
      this.setState({candidato:r,archivo,clave,cita,curso, archivos:r.archivos_asesor, claves:r.clave_asesor, citas:r.cita_asesor, cursos:r.curso_asesor})


    })

  }
//Archivo Form
    handleOpenArchivo = () => {
        this.setState({newArchivo: true});
    };
    handleCloseArchivo = () => {
        this.setState({newArchivo: false});
    };
     handleArchivo=(e)=>{
        let archivo = this.state.archivo
         console.log(e.target.files)
        archivo['archivo'] = e.target.files[0]
        this.setState({archivo})

    }
    selectArchivo=(event, index, value) => {
         let archivo = this.state.archivo
        archivo['tipo'] = value
         this.setState({tipoDoc:value,archivo});

     }
     archivoText=(e)=>{
         let archivo = this.state.archivo
         archivo['nombre'] = e.target.value
         this.setState({archivo});


     }
     newArchivo=()=>{
         api.newArchivo(this.state.archivo).then(r=>{
             let archivos = this.state.archivos
             archivos.push(r)
             this.setState({archivos, newArchivo:false})
         }).catch(e=>{
             console.log(e)
         })
     }

    //Curso Form
    handleOpenCurso = () => {
        this.setState({newCurso: true});
    };
    selectCurso=(event, index, value) => {
        let curso = this.state.curso
        curso['tipo'] = value
        this.setState({tipoCurso:value,curso});

    }
    handleCloseCurso = () => {
        this.setState({newCurso: false});
    };
    cursoText=(e)=>{
        let field=e.target.name
        let curso = this.state.curso
        curso[field] = e.target.value
        this.setState({curso});
        console.log(this.state.curso)
    }
    handleDateI =(e,val)=>{
        let field = 'fechaI';
        let curso = this.state.curso
        let editada = Date.parse(val)
        editada = editada.toString()
        curso[field] = editada;
        this.setState({curso});
    };
    handleDateF =(e,val)=>{
        let field = 'fechaF';
        let curso = this.state.curso
        let editada = Date.parse(val)
        editada = editada.toString()
        curso[field] = editada;
        this.setState({curso});
    };
    newCurso=()=>{
        api.newCurso(this.state.curso).then(r=>{
            let cursos = this.state.cursos
            cursos.push(r)
            this.setState({cursos, newCurso:false})
        }).catch(e=>{
            console.log(e)
        })
    }
     //Clave Form
    handleOpenClave = () => {
        this.setState({newClave: true});
    };
    selectClave=(event, index, value) => {
        let clave = this.state.clave
        clave['status'] = value
        this.setState({tipoClave:value,clave});

    }
    handleCloseClave = () => {
        this.setState({newClave: false});
    };
    claveText=(e)=>{
        let field=e.target.name
        let clave = this.state.clave
        clave[field] = e.target.value
        this.setState({clave});
        console.log(this.state.clave)
    }
    handleDates =(e,val)=>{
        let field = 'fecha_inicio';
        let clave = this.state.clave
        let editada = Date.parse(val)
        editada = editada.toString()
        clave[field] = editada;
        this.setState({clave});
    };
    newClave=()=>{
        api.newClave(this.state.clave).then(r=>{
            let claves = this.state.claves
            claves.push(r)
            this.setState({claves, newClave:false})
        }).catch(e=>{
            console.log(e)
        })
    }
    //Citas Form
    handleOpenCita = () => {
        this.setState({newCita: true});
    };

    handleCloseCita = () => {
        this.setState({newCita: false});
    };
    citaText=(e)=>{
        let field=e.target.name
        let cita = this.state.cita
        cita[field] = e.target.value
        this.setState({cita});
        console.log(this.state.cita)
    }
    handleDateCita =(e,val)=>{
        let field = 'fecha';
        let cita = this.state.cita
        let editada = Date.parse(val)
        editada = editada.toString()
        cita[field] = editada;
        this.setState({cita});
    };
    newCita=()=>{
        api.newCita(this.state.cita).then(r=>{
            let citas = this.state.citas
            citas.push(r)
            this.setState({citas, newCita:false})
        }).catch(e=>{
            console.log(e)
        })
    }
    //basic Info
  handleChange = (value) => {
    this.setState({value: value});
  };
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleTexto=(e)=>{
      let field = e.target.name;
      let asesor = this.state.asesor;
      asesor[field] = e.target.value;
      this.setState({asesor});
      console.log(this.state.asesor)
    };
    editarAsesor=()=>{
      api.updateCandidato(this.state.candidato.id, this.state.asesor).then(r=>{
        toastr.success('Se cambió el status con éxito')
         this.setState({candidato:r})
      })
    }

  render () {
    const candidato = this.state.candidato
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
                                 <FloatingActionButton
                                     mini={true}
                                     backgroundColor={'#57658e'}
                                     style={{position:'absolute', top:-20,right:0}}
                                     onTouchTap={this.handleOpenCita}>
                                     <ContentAdd />

                                 </FloatingActionButton>
                                 <Dialog
                                     title="Agenda una Cita"
                                     contentStyle={{width:'30%'}}
                                     modal={false}
                                     open={this.state.newCita}
                                     onRequestClose={this.handleCloseCita}
                                 >
                                     <DatePicker hintText="Fecha " autoOk={true} onChange={this.handleDateCita}/>

                                     <TextField floatingLabelText='Comentarios' name="comentarios" multiLine={true} onChange={this.citaText}/>
                                     <br/>

                                     <RaisedButton fullWidth={true} label={'Guardar'} onTouchTap={this.newCita}/>
                                 </Dialog>
                                 <List>
                                     {this.state.citas.map((cita,key)=>{
                                         return(
                                             <ListItem
                                                 key={key}
                                                 primaryText={moment(parseInt(cita.fecha)).format('LL')}
                                                 secondaryText={cita.status}
                                                 nestedItems={[<p>{cita.comentarios}</p>]}
                                                 />



                                         )
                                     })}


                                 </List>
                             </Tab>

                             <Tab
                                 style={{color:'#57658e'}}
                                 label="Cursos" value="c">
                                 <FloatingActionButton
                                     mini={true}
                                     backgroundColor={'#57658e'}
                                     style={{position:'absolute', top:-20,right:0}}
                                     onTouchTap={this.handleOpenCurso}>
                                     <ContentAdd />

                                 </FloatingActionButton>
                                 <Dialog
                                     title="Agenda una Cita"
                                     contentStyle={{width:'30%'}}
                                     modal={false}
                                     open={this.state.newCurso}
                                     onRequestClose={this.handleCloseCurso}
                                 >
                                     <DatePicker hintText="Fecha Inicial" autoOk={true} onChange={this.handleDateI}/>
                                     <br/>
                                     <DatePicker hintText="Fecha Final" autoOk={true} onChange={this.handleDateF}/>
                                     <TextField floatingLabelText='Nombre' name="nombre" multiLine={true} onChange={this.cursoText}/>
                                     <br/>
                                     <SelectField
                                         floatingLabelText="Tipo"
                                         value={this.state.tipoCurso}
                                         onChange={this.selectCurso}
                                     >
                                         <MenuItem value={'presencial'} primaryText="Presencial" />
                                         <MenuItem value={'virtual'} primaryText="Virtual" />

                                     </SelectField>
                                     <RaisedButton fullWidth={true} label={'Guardar'} onTouchTap={this.newCurso}/>
                                 </Dialog>
                                 <List>
                                     {this.state.cursos.map((curso,key)=>{
                                         return(
                                             <ListItem
                                                 key={key}
                                                 primaryText={curso.nombre}
                                                 secondaryText={curso.tipo}
                                             />



                                         )
                                     })}


                                 </List>
                             </Tab>




                    </Tabs>:
                          <Tabs
                              inkBarStyle={{backgroundColor:'#57658e'}}
                              tabItemContainerStyle={{backgroundColor:'white'}}
                              value={this.state.value}
                              onChange={this.handleChange}>
                              <Tab
                                  style={{color:'#57658e', position:'relative'}}
                                  label="Archivos" value="a">
                                  <FloatingActionButton
                                      mini={true}
                                      backgroundColor={'#57658e'}
                                      style={{position:'absolute', top:-20,right:0}}
                                      onTouchTap={this.handleOpenArchivo}>
                                      <ContentAdd />

                                  </FloatingActionButton>
                                  <Dialog
                                      title="Sube un nuevo archivo"
                                      contentStyle={{width:'30%'}}
                                      modal={false}
                                      open={this.state.newArchivo}
                                      onRequestClose={this.handleCloseArchivo}
                                  >
                                      <RaisedButton
                                          icon={<ElFile/>}
                                          label="El archivo"
                                          containerElement='label'
                                          labelPosition="before">
                                          <input type="file" style={{display:'none'}} onChange={this.handleArchivo}/>
                                      </RaisedButton>
                                      <br/>
                                      <TextField floatingLabelText='Nombre del archivo' onChange={this.archivoText}/>
                                      <br/>
                                      <SelectField
                                          floatingLabelText="Tipo"
                                          value={this.state.tipoDoc}
                                          onChange={this.selectArchivo}
                                      >
                                          <MenuItem value={'documento'} primaryText="Documento" />
                                          <MenuItem value={'buzon'} primaryText="Buzon" />
                                          <MenuItem value={'carta'} primaryText="Carta"/>
                                      </SelectField>
                                      <RaisedButton fullWidth={true} label={'Guardar'} onTouchTap={this.newArchivo}/>
                                  </Dialog>
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
                                label="Clave" value="b">
                                <FloatingActionButton
                                    mini={true}
                                    backgroundColor={'#57658e'}
                                    style={{position:'absolute', top:-20,right:0}}
                                    onTouchTap={this.handleOpenClave}>
                                    <ContentAdd />

                                </FloatingActionButton>
                                <Dialog
                                    title="Nueva Clave"
                                    contentStyle={{width:'30%'}}
                                    modal={false}
                                    open={this.state.newClave}
                                    onRequestClose={this.handleCloseClave}
                                >

                                    <br/>
                                    <TextField floatingLabelText='Clave' name="clave" onChange={this.claveText}/>
                                    <br/>
                                    <TextField floatingLabelText='Nombre' name="nombre" onChange={this.claveText}/>
                                    <br/>
                                    <SelectField
                                        floatingLabelText="Tipo"
                                        value={this.state.tipoClave}
                                        onChange={this.selectClave}
                                    >
                                        <MenuItem value={'provisional'} primaryText="Provisional" />
                                        <MenuItem value={'definitiva'} primaryText="Definitiva" />

                                    </SelectField>

                                    <DatePicker hintText="Fecha de Inicio" autoOk={true} onChange={this.handleDates}/>

                                    <RaisedButton fullWidth={true} label={'Guardar'} onTouchTap={this.newClave} />
                                </Dialog>
                                <List>
                                    {this.state.claves.map((clave,key)=>{
                                        return(
                                            <ListItem
                                                key={key}
                                                primaryText={clave.clave+' '+clave.nombre}
                                                secondaryText={clave.clave_stat?'Valida':'No valida'}
                                                />



                                        )
                                    })}


                                </List>
                            </Tab>




                          </Tabs>}

                  </GridTile>
                </GridList>
            </div>

      </div>
    )
  }
}

export default CandidatoDetail;
