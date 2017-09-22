import React, {Component} from 'react';
import api from '../../Api/Django';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card,CardHeader, CardText} from 'material-ui/Card';
import toastr from 'toastr';
import {GridList, GridTile} from 'material-ui';
import moment from 'moment';
import {Paper,Toolbar,ToolbarTitle,TextField,
  Divider,RadioButton,RadioButtonGroup} from 'material-ui';


class ClientDetail extends Component{
  constructor(){
    super()
    this.state={
      open:false,
      user:{},
      value:'a',
      newPolicy:{tipo:'',valor:''},
      polizas:[
        {id:1,
        tipo:'auto',
        valor:50000},


      ],
      cliente:{
        poliza_cliente:[],
        asesor:{
          username:''
        }
      }
    }
  }
  componentWillMount(){

    api.getProfile().then(r=>{
      this.setState({user:r})
      console.log(r)
    })

    api.getClient(this.props.match.params.clientId).then(r=>{
      console.log(r)
      this.setState({cliente:r})
      console.log(this.state.user.id+'=>'+this.state.cliente.asesor.id)
      if(!this.state.user.is_staff){
        if(this.state.user.id!==this.state.cliente.asesor.id){
          toastr.warning('Tu no eres asesor de este cliente')
          this.props.history.push('/polizas/clientes')
        }
      }
    })
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

addPolicy=()=>{
  this.state.polizas.push(this.state.newPolicy)
  this.setState({open:false})
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


          <Tabs
            inkBarStyle={{backgroundColor:'#f0f0f0'}}
            tabItemContainerStyle={{backgroundColor:'#57658e'}}
            value={this.state.value}
            onChange={this.handleChange}

          >
            <Tab label="Info del Cliente" value="a">
              <div>

                  <Paper style={styles.margenes}>

                      {/*1st razon social y tipo de persona*/}
                      <GridList
                        cellHeight='auto'
                        cols={12}
                        style={{padding:'1%'}}>
                        <GridTile cols={3}>
                          ID de Cliente
                        </GridTile>
                        <GridTile cols={2}>
                          Tipo de persona
                        </GridTile>
                        <GridTile cols={7}>
                          Razón Social
                        </GridTile>

                        <GridTile cols={3}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.idcliente}

                            name="idcliente"

                            fullWidth={true}
                          />
                      </GridTile>
                        <GridTile cols={2}>

                          <RadioButtonGroup defaultSelected={this.state.cliente.tpersona==="fisica"?'fisica':'moral'}  name="tpersona"  >
                           <RadioButton
                             disabled={true}
                             value="fisica"
                             label="Física"
                             style={styles.radioButton}
                           />
                           <RadioButton
                            disabled={true}

                            value="moral"
                             label="Moral"
                             style={styles.radioButton}
                           />

                         </RadioButtonGroup>
                        </GridTile>


                        <GridTile cols={7}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.rsocial}

                            name="rsocial"

                            fullWidth={true}
                          />
                        </GridTile>
                      </GridList>
                      {/*2nd Apellidos */}
                      <GridList
                        cellHeight='auto'
                        cols={12}
                        style={{padding:'1%'}}>
                        <GridTile cols={5}>
                          Apellido Paterno
                        </GridTile>
                        <GridTile cols={5}>
                          Apellido Materno
                        </GridTile>
                        <GridTile cols={2}>
                          Estado Civil
                        </GridTile>


                        <GridTile cols={5}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.apaterno}

                            name="apaterno"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={5}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.amaterno}

                            name="amaterno"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={2}>
                          <RadioButtonGroup defaultSelected={this.state.cliente.ecivil==='casado'?'casado':'soltero'}  name="ecivil"  >
                           <RadioButton
                             disabled={true}
                             value="casado"
                             label="Casado"
                             style={styles.radioButton}
                           />
                           <RadioButton
                             disabled={true}
                             value="soltero"
                             label="Soltero"
                             style={styles.radioButton}
                           />

                         </RadioButtonGroup>

                        </GridTile>

                      </GridList>
                      {/*3rd Name*/}
                      <GridList
                        cellHeight='auto'
                        cols={12}
                        style={{padding:'1%'}}>
                        <GridTile cols={5}>
                          Primer Nombre
                        </GridTile>
                        <GridTile cols={5}>
                          Segundo Nombre
                        </GridTile>
                        <GridTile cols={2}>
                          Género
                        </GridTile>


                        <GridTile cols={5}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.pnombre}

                            name="pnombre"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={5}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.snombre}

                            name="snombre"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={2}>
                          <RadioButtonGroup defaultSelected={this.state.cliente.genero==="masculino"?'masculino':'femenino'}  name="genero"  >
                           <RadioButton
                             disabled={true}
                             value="masculino"
                             label="Masculino"
                             style={styles.radioButton}
                           />
                           <RadioButton
                             disabled={true}
                             value="femenino"
                             label="Femenino"
                             style={styles.radioButton}
                           />

                         </RadioButtonGroup>

                        </GridTile>

                      </GridList>
                      {/*4th rfc cuurp  edad birth*/}
                      <GridList
                        cellHeight='auto'
                        cols={12}
                        style={{padding:'1%'}}>
                        <GridTile cols={4}>
                          R.F.C.
                        </GridTile>
                        <GridTile cols={4}>
                          CURP
                        </GridTile>

                        <GridTile cols={1}>
                          Edad
                        </GridTile>
                        <GridTile cols={3}>
                          Fecha Nacimiento
                        </GridTile>

                        <GridTile cols={4}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.rfc}

                            name="rfc"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={4}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.curp}

                            name="curp"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={1}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.edad}

                            name="edad"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={3}>
                          <TextField
                            value={moment(this.state.cliente.fnacimiento).format('LL')}
                            disabled={true}/>

                        </GridTile>


                      </GridList>
                      {/*5th identificacion*/}
                      <GridList
                        cellHeight='auto'
                        cols={12}
                        style={{padding:'1%'}}>
                        <GridTile cols={4}>
                          Tipo de Identificación
                        </GridTile>
                        <GridTile cols={4}>
                          Número de Identificación
                        </GridTile>
                        <GridTile cols={4}>
                          Firma Electrónica Avanzada
                        </GridTile>


                        <GridTile cols={4}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.tipoid}

                            name="tipoid"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={4}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.numid}

                            name="numid"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={4}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.fiel}

                            name="fiel"

                            fullWidth={true}
                          />
                        </GridTile>
                      </GridList>
                      {/*6th Nacionalidad*/}
                      <GridList
                        cellHeight='auto'
                        cols={12}
                        style={{padding:'1%'}}>
                        <GridTile cols={4}>
                          Estado de Nacimiento
                        </GridTile>
                        <GridTile cols={4}>
                          País de Nacimiento
                        </GridTile>
                        <GridTile cols={4}>
                          Nacionalidad
                        </GridTile>


                        <GridTile cols={4}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.estado}

                            name="estado"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={4}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.pais}

                            name="pais"

                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={4}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.nacionalidad}

                            name="nacionalidad"

                            fullWidth={true}
                          />
                        </GridTile>
                      </GridList>
                      {/*7th If Extranjero*/}
                      <GridList
                        cellHeight='auto'
                        cols={16}
                        style={{padding:'1%'}}>
                        <GridTile cols={16}>
                          Si es extranjero indique su Calidad Migratoria, en términos de la Ley de Migración
                        </GridTile>

                        <GridTile cols={5}>
                          <RadioButtonGroup defaultSelected={this.state.cliente.rtemporal}  name="rtemp"  >
                           <RadioButton
                             disabled={true}
                             value="rtemporal"
                             label="Residente Temporal"
                             style={styles.radioButton}
                           />


                         </RadioButtonGroup>
                        </GridTile>
                        <GridTile cols={5}>
                          <RadioButtonGroup defaultSelected={this.state.cliente.rpermanente}  name="rperm"  >
                           <RadioButton
                             disabled={true}
                             value="rpermanente"
                             label="Residente Permanente"
                             style={styles.radioButton}
                           />


                         </RadioButtonGroup>
                        </GridTile>
                        <GridTile cols={2}>
                          <RadioButtonGroup defaultSelected={this.state.cliente.otro}  name="resotro"  >
                           <RadioButton
                             disabled={true}
                             value="otro"
                             label="Otro"
                             style={styles.radioButton}
                           />


                         </RadioButtonGroup>
                        </GridTile>
                        <GridTile cols={4}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.otroext}
                            name="otroext"


                            fullWidth={true}
                          />
                        </GridTile>
                      </GridList>
                      {/*8th Domicilio*/}
                      <GridList
                        cellHeight='auto'
                        cols={12}
                        style={{padding:'1%'}}>
                        <GridTile cols={5}>
                          Domicilio Calle
                        </GridTile>
                        <GridTile cols={3}>
                          Edificio
                        </GridTile>
                        <GridTile cols={1}>
                          #Ext
                        </GridTile>
                        <GridTile cols={1}>
                          #Int
                        </GridTile>
                        <GridTile cols={2}>
                          CP
                        </GridTile>


                        <GridTile cols={5}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.calle}
                            name="calle"


                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={3}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              disabled={true}
                              value={this.state.cliente.edificio}
                              name="edificio"


                              fullWidth={true}
                            />
                          </GridTile>
                          <GridTile cols={1}>
                              <TextField
                                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                disabled={true}
                                value={this.state.cliente.noext}
                                name="noext"


                                fullWidth={true}
                              />
                            </GridTile>
                            <GridTile cols={1}>
                                <TextField
                                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                  disabled={true}
                                  value={this.state.cliente.noint}
                                  name="noint"


                                  fullWidth={true}
                                />
                          </GridTile>
                          <GridTile cols={2}>
                              <TextField
                                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                disabled={true}
                                value={this.state.cliente.cp}
                                name="cp"


                                fullWidth={true}
                              />
                          </GridTile>
                      </GridList>
                      {/*9th Domicilio*/}
                      <GridList
                        cellHeight='auto'
                        cols={12}
                        style={{padding:'1%'}}>

                        <GridTile cols={3}>
                          Colonia
                        </GridTile>
                        <GridTile cols={3}>
                          Municipio
                        </GridTile>
                        <GridTile cols={3}>
                          Ciudad
                        </GridTile>
                        <GridTile cols={3}>
                          Estado
                        </GridTile>



                        <GridTile cols={3}>
                          <TextField
                            floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                            underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                            disabled={true}
                            value={this.state.cliente.colonia}
                            name="colonia"


                            fullWidth={true}
                          />
                        </GridTile>
                        <GridTile cols={3}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              disabled={true}
                              value={this.state.cliente.municipio}
                              name="municipio"


                              fullWidth={true}
                            />
                          </GridTile>
                          <GridTile cols={3}>
                              <TextField
                                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                disabled={true}
                                value={this.state.cliente.ciudad}
                                name="ciudad"


                                fullWidth={true}
                              />
                            </GridTile>
                            <GridTile cols={3}>
                                <TextField
                                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                  disabled={true}
                                  value={this.state.cliente.estado}
                                  name="estado"


                                  fullWidth={true}
                                />
                        </GridTile>
                      </GridList>
                      {/*10th email*/}
                      <GridList
                        cellHeight='auto'
                        cols={12}
                        style={{padding:'1%'}}>

                        <GridTile cols={3}>
                          Telefono
                        </GridTile>
                        <GridTile cols={5}>
                          Correo
                        </GridTile>
                        <GridTile cols={4}>
                        Folio Mercantil
                        </GridTile>


                        <GridTile cols={3}>
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              disabled={true}
                              value={this.state.cliente.telefono}
                              name="telefono"


                              fullWidth={true}
                            />
                          </GridTile>
                          <GridTile cols={5}>
                              <TextField
                                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                disabled={true}
                                value={this.state.cliente.correo}
                                name="correo"


                                fullWidth={true}
                              />
                            </GridTile>
                            <GridTile cols={4}>
                                <TextField
                                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                  disabled={true}
                                  value={this.state.cliente.fmercantil}
                                  name="fmercantil"


                                  fullWidth={true}
                                />
                        </GridTile>
                      </GridList>
                  {/*Acaba los datos generales*/}

                    <Toolbar>
                            <ToolbarTitle
                                text="Ocupación o Actividad"
                            />

                          </Toolbar>
                          <GridList
                            cellHeight='auto'
                            cols={12}
                            style={{padding:'1%'}}>

                          </GridList>

                          <GridList
                            cellHeight='auto'
                            cols={12}
                            style={{padding:'1%'}}>



                            <GridTile cols={4}>
                              Ocupación
                            </GridTile>

                            <GridTile cols={4}>
                              Por Honorarios
                            </GridTile>
                            <GridTile cols={4}>
                              Actividad Empresarial
                            </GridTile>

                            <GridTile cols={4}
                              >

                              <TextField
                                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                disabled={true}
                                value={this.state.cliente.ocupacion?this.state.cliente.otraoc:this.state.cliente.ocupacion}
                                name="otraoc"
                                fullWidth={true}
                              />

                            </GridTile>

                            <GridTile cols={4}
                              >
                              <RadioButtonGroup defaultSelected="not_light"  name="bhonorarios"  >
                               <RadioButton
                                 disabled={true}
                                 value="si"
                                 label="Si"
                                 style={styles.radioButton}
                               />
                               <RadioButton
                                 disabled={true}
                                 value="no"
                                 label="No"
                                 style={styles.radioButton}
                               />

                             </RadioButtonGroup>
                             <br/>
                             Indique
                              <TextField
                                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                disabled={true}
                                value={this.state.cliente.honorarios}
                                name="honorarios"


                                fullWidth={true}

                              />

                            </GridTile>

                            <GridTile cols={4}>
                              <RadioButtonGroup defaultSelected="not_light"  name="actempresarial"  >
                               <RadioButton
                                 disabled={true}
                                 value="Empresario"
                                 label="Empresario"
                                 style={styles.radioButton}
                               />
                               <RadioButton
                                 disabled={true}
                                 value="Comerciante"
                                 label="Comerciante"
                                 style={styles.radioButton}
                               />
                               <RadioButton
                                 disabled={true}
                                 value="Comisionista"
                                 label="Comisionista"
                                 style={styles.radioButton}
                               />


                             </RadioButtonGroup>
                            <br/>
                            Indique
                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                              disabled={true}
                              value={this.state.cliente.aempresarial}
                              name="aempresarial"


                              fullWidth={true}
                            />

                            </GridTile>


                          </GridList>
                          <Divider style={{width:'100%'}}/>
                          <GridList cols={1}>
                            <GridTile cols={1} style={{padding:'2%'}}>
                              <TextField
                                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                                disabled={true}
                                value={this.state.cliente.observaciones}
                                multiLine={true}
                                floatingLabelText="Observaciones"
                                rows={2}
                                style={{paddingRight:'6%'}}
                                name="observaciones"


                                fullWidth={true}
                              />
                            </GridTile>
                          </GridList>
                  </Paper>
              </div>
            </Tab>
            <Tab label="Polizas" value="b">
              <div style={{position:'relative'}}>

                {this.state.cliente.poliza_cliente.map((poliza,key)=>{
                  return(
                    <Card key={key}>
                     <CardHeader
                       title={'Poliza '+poliza.idpoliza}
                       actAsExpander={true}
                       showExpandableButton={true}
                     />




                     <CardText expandable={true}>
                       <GridList cols={4} cellHeight='auto'>
                         <GridTile style={{padding:'1.5%'}} cols={2}>
                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             name="cliente"
                             floatingLabelText="Cliente"
                             value={this.state.cliente.rsocial?this.state.cliente.rsocial:this.state.cliente.pnombre+' '+this.state.cliente.apaterno}
                             disabled={true}/>

                         </GridTile>
                         <GridTile style={{padding:'3%'}}>

                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             floatingLabelText="ID"
                             value={poliza.idpoliza}
                             name="idpoliza"
                             disabled={true}/><br />
                         </GridTile>
                         <GridTile style={{padding:'3%'}}>

                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             floatingLabelText="CIS"
                             name="cis"
                             value={poliza.cis}
                             disabled={true}/><br />
                         </GridTile>
                       </GridList>
                       <GridList cols={3} cellHeight='auto'>
                         <GridTile cols={1}>

                         <TextField
                           floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                           underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                           floatingLabelText="Domicilio"
                           name="newaddress"
                           disabled={true}
                           value={poliza.addaddress?this.state.cliente.calle+' '+this.state.cliente.noext+' '+this.state.cliente.colonia:poliza.newaddress}
                           multiLine={true}
                           rows={2}

                           /><br />
                         </GridTile>
                         <GridTile cols={1}>

                            <TextField
                              floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                              underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                              floatingLabelText="Fecha"
                              name="apertura"
                              value={moment(poliza.apertura).format('LL')}
                              disabled={true}/>
                         </GridTile>
                         <GridTile cols={1}>
                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             floatingLabelText="Agrupación"
                             name="agrupacion"
                             value={poliza.agrupacion}
                             disabled={true}/>
                         </GridTile>
                       </GridList>
                       <GridList cols={4} cellHeight='auto'>
                         <GridTile cols={1}>

                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             floatingLabelText="Tipo de Apago"
                             name="pago"
                             value={poliza.pago}
                             disabled={true}/>

                         </GridTile>
                         <GridTile cols={1}>
                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             floatingLabelText="Prima"
                             name="prima"
                             value={poliza.prima}
                             disabled={true}/>
                         </GridTile>
                         <GridTile cols={1}>
                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             floatingLabelText="Financiamiento"
                             name="financiamiento"
                             value={poliza.financiamiento}
                             disabled={true}/>
                         </GridTile>
                         <GridTile cols={1}>
                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             floatingLabelText="Importe"
                             name="importe"
                             value={poliza.importe}
                             disabled={true}/>
                         </GridTile>
                       </GridList>
                       <GridList cols={4} cellHeight='auto'>
                         <GridTile cols={1}>

                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             floatingLabelText="Empresa"
                             name="empresa"
                             value={poliza.empresa}
                             disabled={true}/>

                         </GridTile>
                         <GridTile cols={1}>
                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}

                             floatingLabelText="Sector"
                             name="sector"
                             value={poliza.sector}
                             disabled={true}/>
                         </GridTile>
                         <GridTile cols={1}>
                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                             floatingLabelText="Tipo de Seguro"
                             name="next"
                             value={poliza.next}
                             disabled={true}/>
                         </GridTile>
                         <GridTile cols={1}>
                           <TextField
                             floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                             underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                             floatingLabelText="Tipo"
                             name={poliza.next==='Daños'?'danhos':'last'}
                             value={poliza.next==='Daños'?poliza.danhos:poliza.last}
                             disabled={true}/>
                         </GridTile>
                       </GridList>
                     </CardText>
                   </Card>
                  )
                })}
              </div>
            </Tab>
          </Tabs>
        </Paper>

      </div>
    );
  }
}
export default ClientDetail;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
