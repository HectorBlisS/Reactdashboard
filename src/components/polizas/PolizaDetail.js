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
      elrecibo:{},
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
      console.log(this.state.poliza)
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

  pagado=(id,r)=>{

    let field = 'pagado'
    let elrecibo = this.state.elrecibo;
    elrecibo[field] = !r
    this.setState({elrecibo});
    console.log(this.state.elrecibo)
    api.updateRecibo(id, this.state.elrecibo).then(r=>{
      toastr.success('Recibo Pagados')
    }).catch(e=>{
      toastr.error('Sorrys')
    })
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
                 value={'ID: '+this.state.poliza.apertura}
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
            <div>

              <Card>
                <CardHeader
                  title={<h3>No. de recibos: {this.state.poliza.recibo_poliza.length}</h3>}
                  actAsExpander={true}
                  showExpandableButton={true}
                />
              <CardText expandable={true}>
                {this.state.poliza.recibo_poliza.map(recibo=>{
                  return(
                    <div>
                      <GridList cols={3} cellHeight="auto">
                        <GridTile cols={1}>
                          <div>
                            Recibo #{recibo.numero}
                          </div>
                        </GridTile>
                        <GridTile cols={1}>
                            {recibo.fecha?<div>{moment(recibo.fecha).format('LL')}</div>:

                            <DatePicker

                              name='fecha'
                              onChange={this.handleDates}
                              onTouchTap={this.testing}
                              autoOk={true}
                              hintText="Fecha de Pago"
                              />}

                        </GridTile>
                        <GridTile cols={1}>
                          <Toggle
                             label={recibo.pagado?"Pagado":"No Pagado"}
                             defaultToggled={recibo.pagado}
                             onToggle={()=>this.pagado(recibo.id, recibo.pagado)}
                           />
                        </GridTile>
                      </GridList>
                    </div>
                  )
                })}
              </CardText>
              </Card>
            </div>

        </div>

        </Paper>
      </div>
    );
  }
}
export default PolizaDetail;
