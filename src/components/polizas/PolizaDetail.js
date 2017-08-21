import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {GridList, GridTile} from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import api from '../../Api/Django';
import toastr from 'toastr';
import VehiculosForm from './VehiculosForm';
import 'moment/locale/es';
import moment from 'moment';

class PolizaDetail extends Component{

  constructor(){
    super()
    this.state={
      modal:false,
      idRecibo:'',
      elrecibo:{
        pagado:true,
      },
      open:false,
      openModal:false,
      poliza:{
        cliente:{},
        asesor:{},
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
    api.getPolicy(this.props.match.params.polizaId).then(r=>{
      this.setState({poliza:r})
      console.log("req",this.state.poliza)
    })

    api.getVehicles(this.props.match.params.polizaId).then(r=>{
      this.setState({vehiculos:r})

    }).catch(e=>{

    })

    api.getPolicy(this.props.match.params.polizaId).then(r=>{
      this.setState({poliza:r})
    }).catch(e=>{

    })

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
    }).catch(e=>{
      toastr.error('Sorrys')
    })
    this.setState({modal:false})
  }


  //datePicker data
  handleDates =(e,val)=>{
    let field = this.state.lafecha
    let elrecibo = this.state.elrecibo;
    elrecibo[field] = val
    this.setState({elrecibo,mientras:val});

  }
  testing=(e)=>{
    this.setState({lafecha:e.target.name})
    //console.log(e.target.name,e.target.value)
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
              text={'Asesor: '+this.state.poliza.asesor.first_name}
          />

        </Toolbar>

        <div style={{padding:'1%'}}>
          <GridList cols={4} cellHeight='auto'>
            <GridTile style={{padding:'1.5%'}} cols={2}>
              <TextField
                value={'Cliente: '+this.state.poliza.cliente.pnombre+' '+this.state.poliza.cliente.amaterno}
                disabled={true}/>

            </GridTile>
            <GridTile style={{padding:'3%'}}>

              <TextField
                value={'ID: '+this.state.poliza.idpoliza}
                disabled={true}/><br />
            </GridTile>
            <GridTile style={{padding:'3%'}}>

              <TextField
                value={'CIS: '+this.state.poliza.cis}
                disabled={true}/><br />
            </GridTile>
          </GridList>
          <GridList cols={3} cellHeight='auto'>
            <GridTile cols={1}>

            <TextField
              disabled={true}
              value={this.state.poliza.addaddress?this.state.poliza.newaddress:this.state.poliza.cliente.calle+' '+this.state.poliza.cliente.noext+' '+this.state.poliza.cliente.colonia}
              multiLine={true}
              rows={2}

              /><br />
            </GridTile>
            <GridTile cols={1}>

               <TextField
                 value={'Fecha: '+moment(this.state.poliza.apertura).format('LL')}
                 disabled={true}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                value={'Agrupación: '+this.state.poliza.agrupacion}
                disabled={true}/>
            </GridTile>
          </GridList>
          <GridList cols={4} cellHeight='auto'>
            <GridTile cols={1}>

              <TextField
                value={'Tipo de pago: '+this.state.poliza.pago}
                disabled={true}/>

            </GridTile>
            <GridTile cols={1}>
              <TextField
                value={'Apertura: '+this.state.poliza.prima}
                disabled={true}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                value={this.state.poliza.financiamiento}
                disabled={true}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                value={'Importe: '+this.state.poliza.importe}
                disabled={true}/>
            </GridTile>
          </GridList>
          <GridList cols={4} cellHeight='auto'>
            <GridTile cols={1}>

              <TextField
                value={'Empresa: '+this.state.poliza.empresa}
                disabled={true}/>

            </GridTile>
            <GridTile cols={1}>
              <TextField
                value={'Sector: '+this.state.poliza.sector}
                disabled={true}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                value={'Tipo de Seguro: '+this.state.poliza.next}
                disabled={true}/>
            </GridTile>
            <GridTile cols={1}>
              <TextField
                value={this.state.poliza.next==='Accidentes'?'Tipo: '+this.state.poliza.daños:'Tipo: '+this.state.poliza.last}
                disabled={true}/>
            </GridTile>
          </GridList>

          {this.state.poliza.daños==='Autos y Camiones'?

            <div style={{padding:'1%'}}>
              <GridList cols={2} cellHeight='auto'>
                <GridTile>
                  <TextField
                    value={'Subrama: '+this.state.poliza.subrama}
                    disabled={true}/>
                </GridTile>
                <GridTile>
                  <TextField
                    value={'Modalidad: '+this.state.poliza.modalidad}
                    disabled={true}/>
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
                              value={'Servicio: '+v.servicio}
                              disabled={true}
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Alta: '+v.alta}
                              disabled={true}
                              name="alta"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Placa: '+v.placa}
                              disabled={true}

                            />
                          </GridTile>
                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              value={'Clave Tarifa: '+v.clavet}
                              disabled={true}


                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Origen: '+v.origen}
                              disabled={true}
                              name="origen"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Modelo: '+v.modelo}
                              disabled={true}
                              name="modelo"
                            />
                          </GridTile>
                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              value={'Color: '+v.color}
                              disabled={true}
                              name="color"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Puertas: '+v.puertas}
                              disabled={true}
                              name="puertas"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Ocupantes: '+v.ocupantes}
                              disabled={true}
                              name="ocupantes"
                            />
                          </GridTile>
                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              value={'Uso: '+v.Uso}
                              disabled={true}
                              name="placa"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Serie: '+v.serie}
                              disabled={true}
                              name="serie"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Motor: '+v.motor}
                              disabled={true}
                              name="motor"
                            />
                          </GridTile>
                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              value={'Status: '+v.status}
                              disabled={true}
                              name="status"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Repuve: '+v.repuve}
                              disabled={true}
                              name="repuve"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Conductor: '+v.conductor}
                              disabled={true}
                              name="conductor"
                            />
                          </GridTile>
                        </GridList>

                        <GridList>

                        </GridList>
                        <GridList cellHeight="auto" cols={3}>
                          <GridTile cols={1}>
                            <TextField
                              value={'Prima Neta: '+v.prima_neta}
                              disabled={true}
                              name="prima_neta"
                            />
                          </GridTile>

                          <GridTile cols={1}>
                            <TextField
                              value={'Prima Total: '+v.prima_total}
                              disabled={true}
                              name="prima_total"
                            />
                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              value={'Adaptaciones: '+v.adaptaciones}
                              disabled={true}
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
                            floatingLabelText="Derechos"
                            name="derechos"
                            onChange={this.handleRecibo}/>

                        </GridTile>
                        <GridTile cols={1}>
                          <TextField
                            floatingLabelText="IVA"
                            name="iva"
                            onChange={this.handleRecibo}/>

                        </GridTile>
                      </GridList>
                        <GridList cols={4} cellHeight='auto'>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelText="Prima Neta"
                              name="prima_neta"
                              onChange={this.handleRecibo}/>

                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelText="Prima Total"
                              name="prima_total"
                              onChange={this.handleRecibo}/>

                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
                              floatingLabelText="Descuento"
                              name="descuento"
                              onChange={this.handleRecibo}/>

                          </GridTile>
                          <GridTile cols={1}>
                            <TextField
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
