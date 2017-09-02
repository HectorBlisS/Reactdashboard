import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {GridList, GridTile} from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import api from '../../Api/Django';
import toastr from 'toastr';
import 'moment/locale/es';
import moment from 'moment';


class PolizaDetail extends Component{

  constructor(){
    super()
    this.state={
      user:{},
      updates:{},
      editar:true,
      modal:false,
      idRecibo:'',
      elrecibo:{
        pagado:true,
      },
      open:false,
      openModal:false,
      poliza:{
        cliente:{},
        asesor:{
          profile:{}
        },
        recibo_poliza:[],
      },
      clientesobj:[
        {id:1,
        pnombre:'oswaldo'},

      ],
      vehiculos:[],
    }
  }

  componentWillMount(){

    api.getProfile().then(r=>{
      this.setState({user:r})
      console.log()
    })

    api.getPolicy(this.props.match.params.polizaId).then(r=>{
      this.setState({poliza:r})
      console.log(this.state.user.id+'=>'+this.state.poliza.asesor.id)

    })


    api.getVehicles(this.props.match.params.polizaId).then(r=>{
      this.setState({vehiculos:r})

    }).catch(e=>{
      console.log(e)
    })


  }
    handleDates =(e,val)=>{
        let field = this.state.lafecha;
        let poliza = this.state.poliza;
        poliza[field] = val;
        this.setState({poliza});

    };
    testing=(e)=>{
        this.setState({lafecha:e.target.name});
        //console.log(e.target.name,e.target.value)
    };
  componentDidMount(){
    if(!this.state.user.is_staff){
      if(this.state.user.id!==this.state.poliza.asesor.id){
        toastr.warning('Tu no eres asesor de esta poliza')
        this.props.history.push('/polizas')
      }
    }
  }



  handleOpen = () => {
     this.setState({modal: true});
   };

   handleClose = () => {
     this.setState({modal: false});
   };
   handleIDrecibo = (event, index, value) => this.setState({idRecibo:value});


  handleRecibo=(e)=>{
    let field = e.target.name
    let elrecibo = this.state.elrecibo;
    elrecibo[field] = e.target.value
    this.setState({elrecibo});
    console.log(this.state.elrecibo)
  }
  pagado=()=>{

    api.updateRecibo(this.state.idRecibo, this.state.elrecibo).then(r=>{
      toastr.success('Recibo Pagados')
      this.componentWillMount()


    }).catch(e=>{
      toastr.error('Sorrys')
    })
    this.setState({modal:false})
  }


  //datePicker data
  handleDates =(e,val)=>{
    let field = this.state.lafecha;
    let updates = this.state.updates;
    updates[field] = val
    this.setState({updates,mientras:val});

  }
  testing=(e)=>{
    this.setState({lafecha:e.target.name})
    //console.log(e.target.name,e.target.value)
  }
  editar=()=>{
    this.setState({editar:false})
  }

  handleText=(e)=>{

    let field=e.target.name
    let updates = this.state.updates
    let poliza = this.state.poliza
    poliza[field] = e.target.value
    updates[field]=e.target.value
    this.setState({updates, poliza})
    console.log(this.state.updates)
  }
  updatePoliza=()=>{
    api.updatePolicy(this.state.poliza.id, this.state.updates).then(r=>{
      toastr.success('Editada con éxito')

      this.setState({editar:true})
    })
  }


  render(){
    return(
      <div>
        <Paper style={{maxWidth:'80%' ,
        margin:'0 auto',
        marginTop:30,
        textAlign:'left',
        marginBottom: 25,
      }}>
        <Toolbar>
          <ToolbarTitle
              text={'Poliza de '+this.state.poliza.empresa}
          />
          <ToolbarTitle
              text={'ID '+this.state.poliza.idpoliza}
          />

          <ToolbarTitle
              text={'Asesor: '+this.state.poliza.asesor.profile.asesorId}
          />
        {this.state.user.is_staff?<div style={{paddingTop:'2%'}}>
          <RaisedButton label="Editar" onTouchTap={this.editar}/>
        </div>:''}

        </Toolbar>

        <div style={{padding:'1%'}}>
          <GridList cols={4} cellHeight='auto'>
            <GridTile style={{padding:'1.5%'}} cols={2}>
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                name="cliente"
                floatingLabelText="Cliente"
                value={this.state.poliza.cliente.pnombre+' '+this.state.poliza.cliente.amaterno}
                disabled={this.state.editar}/>

            </GridTile>
            <GridTile style={{padding:'3%'}}>

              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="ID"
                value={this.state.poliza.idpoliza}
                name="idpoliza"
                disabled={this.state.editar}/><br />
            </GridTile>
            <GridTile style={{padding:'3%'}}>

              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="CIS"
                name="cis"
                value={this.state.poliza.cis}
                disabled={this.state.editar}/><br />
            </GridTile>
          </GridList>
          <GridList cols={3} cellHeight='auto'>
            <GridTile cols={1}>

            <TextField
              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
              onChange={this.handleText}
              floatingLabelText="Domicilio"
              name="newaddress"
              disabled={this.state.editar}
              value={this.state.poliza.addaddress?this.state.poliza.cliente.calle+' '+this.state.poliza.cliente.noext+' '+this.state.poliza.cliente.colonia:this.state.poliza.newaddress}

              multiLine={true}
              rows={2}

              /><br />
            </GridTile>
            <GridTile cols={1}>

               <DatePicker
                   onChange={this.handleDates}
                   onTouchTap={this.testing}
                   autoOk={true}
                 floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                 underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                 floatingLabelText="Fecha"
                 name="apertura"

                 disabled={this.state.editar}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="Agrupación"
                name="agrupacion"
                value={this.state.poliza.agrupacion}
                disabled={this.state.editar}/>
            </GridTile>
          </GridList>
          <GridList cols={4} cellHeight='auto'>
            <GridTile cols={1}>

              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="Tipo de Apago"
                name="pago"
                value={this.state.poliza.pago}
                disabled={this.state.editar}/>

            </GridTile>
            <GridTile cols={1}>
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="Prima"
                name="prima"
                value={this.state.poliza.prima}
                disabled={this.state.editar}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="Financiamiento"
                name="financiamiento"
                value={this.state.poliza.financiamiento}
                disabled={this.state.editar}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="Importe"
                name="importe"
                value={this.state.poliza.importe}
                disabled={this.state.editar}/>
            </GridTile>
          </GridList>
          <GridList cols={4} cellHeight='auto'>
            <GridTile cols={1}>

              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="Empresa"
                name="empresa"
                value={this.state.poliza.empresa}
                disabled={this.state.editar}/>

            </GridTile>
            <GridTile cols={1}>
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="Sector"
                name="sector"
                value={this.state.poliza.sector}
                disabled={this.state.editar}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.handleText}
                floatingLabelText="Tipo de Seguro"
                name="next"
                value={this.state.poliza.next}
                disabled={this.state.editar}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                floatingLabelText="Tipo"
                onChange={this.handleText}

                name={this.state.poliza.next==='Daños'?'daños':'last'}
                value={this.state.poliza.next==='Daños'?this.state.poliza.daños:this.state.poliza.last}
                disabled={this.state.editar}/>
            </GridTile>
          </GridList>

          {!this.state.editar?<div style={{padding:'2%'}}>
            <RaisedButton
              backgroundColor='#57658e'
              labelColor={'#fff'}
              fullWidth={true}
              label="Guardar"
              onTouchTap={this.updatePoliza}/>
          </div>:''}

          {this.state.poliza.daños==='Autos y Camiones'?

            <div style={{padding:'1%'}}>
              <GridList cols={2} cellHeight='auto'>
                <GridTile>
                  <TextField
                    floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                    underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                    onChange={this.handleText}
                    floatingLabelText="Subrama"
                    name="subrama"
                    value={this.state.poliza.subrama}
                    disabled={this.state.editar}/>
                </GridTile>
                <GridTile>
                  <TextField
                    floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                    underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                    onChange={this.handleText}
                    floatingLabelText="Modalidad"
                    name="modalidad"
                    value={this.state.poliza.modalidad}
                    disabled={this.state.editar}/>
                </GridTile>
              </GridList>

              <h3>Vehículos Registrados</h3>
              {this.state.vehiculos.map(v=>{
                return(
                  <Card>
                    <CardHeader
                      title={v.marca}
                      subtitle={v.modelo}
                      actAsExpander={true}
                      showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                      <div style={{padding:'1%'}}>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Servicio: '+v.servicio}
                              disabled={this.state.editar}
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Alta: '+moment(v.alta).format('LL')}
                              disabled={this.state.editar}
                              name="alta"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Placa: '+v.placa}
                              disabled={this.state.editar}

                            />
                          </GridTile>
                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Clave Tarifa: '+v.clavet}
                              disabled={this.state.editar}


                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Origen: '+v.origen}
                              disabled={this.state.editar}
                              name="origen"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Modelo: '+v.modelo}
                              disabled={this.state.editar}
                              name="modelo"
                            />
                          </GridTile>
                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Color: '+v.color}
                              disabled={this.state.editar}
                              name="color"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Puertas: '+v.puertas}
                              disabled={this.state.editar}
                              name="puertas"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Ocupantes: '+v.ocupantes}
                              disabled={this.state.editar}
                              name="ocupantes"
                            />
                          </GridTile>
                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Uso: '+v.Uso}
                              disabled={this.state.editar}
                              name="placa"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Serie: '+v.serie}
                              disabled={this.state.editar}
                              name="serie"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Motor: '+v.motor}
                              disabled={this.state.editar}
                              name="motor"
                            />
                          </GridTile>
                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Status: '+v.status}
                              disabled={this.state.editar}
                              name="status"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Repuve: '+v.repuve}
                              disabled={this.state.editar}
                              name="repuve"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Conductor: '+v.conductor}
                              disabled={this.state.editar}
                              name="conductor"
                            />
                          </GridTile>
                        </GridList>

                        <GridList>

                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Prima Neta: '+v.prima_neta}
                              disabled={this.state.editar}
                              name="prima_neta"
                            />
                          </GridTile>

                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Prima Total: '+v.prima_total}
                              disabled={this.state.editar}
                              name="prima_total"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              value={'Adaptaciones: '+v.adaptaciones}
                              disabled={this.state.editar}
                              name="adaptaciones"
                            />
                          </GridTile>
                        </GridList>
                      </div>
                    </CardText>
                  </Card>
                );
              }).reverse()}
            </div>:''}
            <div style={{padding:'0 1%', position:'relative'}}>
              <h3>Recibos ({this.state.poliza.recibo_poliza.length})</h3>
                <RaisedButton
                   label={'Llenar'}
                   labelColor={'#fff'}
                   style={{position:'absolute', right:10, top:-10}}
                   backgroundColor="rgb(87, 101, 142)"
                   onTouchTap={this.handleOpen}/>
                <Dialog
                  title="Completa para marcar el recibo como pagado"
                  modal={false}
                  open={this.state.modal}
                  onRequestClose={this.handleClose}>
                    <div style={{padding:'2%'}}>

                      <GridList cols={4} cellHeight='auto'>
                        <GridTile>
                          <SelectField
                            floatingLabelText="Recibo"
                            value={this.state.idRecibo}
                            onChange={this.handleIDrecibo}
                          >
                            {this.state.poliza.recibo_poliza.map(re=>{
                              return(
                                <MenuItem value={re.id} primaryText={'Recibo '+re.numero} />
                              )
                            })}

                          </SelectField>
                        </GridTile>
                        <GridTile cols={1}>
                          <div style={{marginTop:'24px'}}>
                            <DatePicker
                              name='fecha'
                              onChange={this.handleDates}
                              onTouchTap={this.testing}
                              autoOk={true}
                              hintText="Fecha de Pago"
                              />
                          </div>
                        </GridTile>
                        <GridTile cols={1}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            floatingLabelText="Derechos"
                            name="derechos"
                            onChange={this.handleRecibo}/>

                        </GridTile>
                        <GridTile cols={1}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            floatingLabelText="IVA"
                            name="iva"
                            onChange={this.handleRecibo}/>

                        </GridTile>
                      </GridList>
                        <GridList cols={4} cellHeight='auto'>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              floatingLabelText="Prima Neta"
                              name="prima_neta"
                              onChange={this.handleRecibo}/>

                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              floatingLabelText="Prima Total"
                              name="prima_total"
                              onChange={this.handleRecibo}/>

                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              floatingLabelText="Descuento"
                              name="descuento"
                              onChange={this.handleRecibo}/>

                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              floatingLabelText="Pago Fracc"
                              name="pago_frac"
                              onChange={this.handleRecibo}/>

                          </GridTile>
                        </GridList>
                      <RaisedButton
                        label={'Pagar'}
                        fullWidth={true}
                        labelColor={'#fff'}
                        backgroundColor="rgb(87, 101, 142)"
                        onTouchTap={this.pagado}/>
                    </div>
                </Dialog>
              {this.state.poliza.recibo_poliza.map(recibo=>{
                return(
                  <Card>
                    <CardHeader
                      title={'Recibo #' +recibo.numero}
                      subtitleColor={recibo.pagado?'green':'red'}
                      subtitle={recibo.pagado?'Pagado':'No Pagado'}
                      actAsExpander={true}
                      showExpandableButton={true}
                    />

                    <CardText expandable={true}>
                        <div>
                          <GridList cols={8} cellHeight="auto">

                            <GridTile cols={1}>
                                <h4>Prima Neta:</h4>
                                {recibo.prima_neta}

                            </GridTile>
                            <GridTile cols={1}>
                                <h4>Prima Total:</h4>
                                {recibo.prima_total}
                            </GridTile>
                            <GridTile cols={1}>
                                <h4>Descuento</h4>
                                {recibo.descuento}
                            </GridTile>
                            <GridTile cols={1}>
                                <h4>Pago Fracc</h4>
                                {recibo.pago_frac}
                            </GridTile>
                            <GridTile cols={1}>
                                <h4>Derechos</h4>
                                {recibo.derechos}
                            </GridTile>
                            <GridTile cols={1}>
                                <h4>Iva</h4>
                                {recibo.iva}
                            </GridTile>

                            <GridTile cols={2}>
                                <h4>Fecha:</h4>
                                {recibo.fecha?<div>{moment(recibo.fecha).format('LL')}</div>:''}

                            </GridTile>

                          </GridList>
                        </div>
                  </CardText>
                  </Card>
                )
              })}
            </div>

        </div>

        </Paper>
      </div>
    );
  }
}
export default PolizaDetail;
