/*Formulario de Nuevo Cliente*/
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {GridList, GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import {Paper,Toolbar,ToolbarTitle,ToolbarGroup,RaisedButton,TextField,
  Divider,RadioButton,RadioButtonGroup,Toggle} from 'material-ui';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import api from '../../Api/Django';
import toastr from 'toastr';

const style = {
  check:{
    paddingTop:'5%', fontSize:'.8rem'
  }

}


class ClienteForm extends React.Component{



  constructor(){
    super();
    this.state={
      value:'',
      poliza:{

      }
    }
  }

  handleText = (event, index) => {
     let field = event.target.name
     let poliza = this.state.poliza;
     poliza[field] = event.target.value
     this.setState({poliza});
   }
   guardar=()=>{
     console.log(this.state.poliza)
   }
   enviarPoliza=()=>{
     api.newClient(this.state.poliza).then(r=>{
       toastr.success('Tu Cliente se ha registrado con éxito')
       console.log(r)
     }).catch(e=>{
       toastr.error('Hubo un problema, Intenta más tarde')
       console.log(e)
     })
   }
   handleDates =(e,val)=>{
     let field = this.state.lafecha
     let poliza = this.state.poliza;
     poliza[field] = val
     console.log(this.state.lafecha,val)
   }
  testing=(e)=>{
    this.setState({lafecha:e.target.name})
    //console.log(e.target.name,e.target.value)
  }
  handleChange = (event, index, value) => {
    let field = 'ocupacion'
    let poliza = this.state.poliza;
    poliza[field] = value

    this.setState({value,poliza});
  }
  render(){
    return (
        <Paper style={styles.margenes}>
            <Toolbar>
              <ToolbarTitle
                  text="Datos Generales del Contratante"
              />
            <div style={{paddingTop:'1%'}}>
              <RaisedButton  onTouchTap={this.guardar} label="Guardar" />
            </div>
            </Toolbar>
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
                  onChange={this.handleText}
                  name="idcliente"
                  hintText="12345678"
                  fullWidth={true}
                />
            </GridTile>
              <GridTile cols={2}>

                <RadioButtonGroup onChange={this.handleText} name="tpersona"  >
                 <RadioButton
                   value="fisica"
                   label="Física"
                   style={styles.radioButton}
                 />
                 <RadioButton
                   value="moral"
                   label="Moral"
                   style={styles.radioButton}
                 />

               </RadioButtonGroup>
              </GridTile>


              <GridTile cols={7}>
                <TextField
                  onChange={this.handleText}
                  name="rsocial"
                  hintText="Empresa S.A. de C.V."
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
                  onChange={this.handleText}
                  name="apaterno"
                  hintText="López"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={5}>
                <TextField
                  onChange={this.handleText}
                  name="amaterno"
                  hintText="Hernández"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={2}>
                <RadioButtonGroup onChange={this.handleText} name="ecivil"  >
                 <RadioButton
                   value="casado"
                   label="Casado"
                   style={styles.radioButton}
                 />
                 <RadioButton
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
                  onChange={this.handleText}
                  name="pnombre"
                  hintText="Maria"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={5}>
                <TextField
                  onChange={this.handleText}
                  name="snombre"
                  hintText="José"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={2}>
                <RadioButtonGroup onChange={this.handleText} name="genero"  >
                 <RadioButton
                   value="masculino"
                   label="Masculino"
                   style={styles.radioButton}
                 />
                 <RadioButton
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
                  onChange={this.handleText}
                  name="rfc"
                  hintText="AAA555AAA555"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  onChange={this.handleText}
                  name="curp"
                  hintText="AABB554433CCBBAA55"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  name="edad"
                  hintText="20"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={3}>
                <DatePicker
                  locale="en-US"
                  onChange={this.handleDates}
                  onTouchTap={this.testing}
                  autoOk={true}
                  hintText="01/01/2017"
                  name="fnacimiento"/>
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
                  onChange={this.handleText}
                  name="tipoid"
                  hintText="INE"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  onChange={this.handleText}
                  name="numid"
                  hintText="AABBCC44556677A444"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  onChange={this.handleText}
                  name="fiel"
                  hintText="FIEL"
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
                  onChange={this.handleText}
                  name="estado"
                  hintText="Hidalgo"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  onChange={this.handleText}
                  name="pais"
                  hintText="México"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  onChange={this.handleText}
                  name="Mexicana"
                  hintText="lol"
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
                <RadioButtonGroup onChange={this.handleText} name="rtemp"  >
                 <RadioButton
                   value="rtemporal"
                   label="Residente Temporal"
                   style={styles.radioButton}
                 />


               </RadioButtonGroup>
              </GridTile>
              <GridTile cols={5}>
                <RadioButtonGroup onChange={this.handleText} name="rperm"  >
                 <RadioButton
                   value="rpermanente"
                   label="Residente Permanente"
                   style={styles.radioButton}
                 />


               </RadioButtonGroup>
              </GridTile>
              <GridTile cols={2}>
                <RadioButtonGroup onChange={this.handleText} name="resotro"  >
                 <RadioButton
                   value="otro"
                   label="Otro"
                   style={styles.radioButton}
                 />


               </RadioButtonGroup>
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  name="otroext"
                  onChange={this.handleText}
                  hintText=""
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
                  name="calle"
                  onChange={this.handleText}
                  hintText="Calle"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={3}>
                  <TextField
                    name="edificio"
                    onChange={this.handleText}
                    hintText="A"
                    fullWidth={true}
                  />
                </GridTile>
                <GridTile cols={1}>
                    <TextField
                      name="noext"
                      onChange={this.handleText}
                      hintText="111"
                      fullWidth={true}
                    />
                  </GridTile>
                  <GridTile cols={1}>
                      <TextField
                        name="noint"
                        onChange={this.handleText}
                        hintText="222"
                        fullWidth={true}
                      />
                </GridTile>
                <GridTile cols={2}>
                    <TextField
                      name="cp"
                      onChange={this.handleText}
                      hintText="42090"
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
                  name="colonia"
                  onChange={this.handleText}
                  hintText="Piracantos"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={3}>
                  <TextField
                    name="municipio"
                    onChange={this.handleText}
                    hintText="Pachuca de Soto"
                    fullWidth={true}
                  />
                </GridTile>
                <GridTile cols={3}>
                    <TextField
                      name="ciudad"
                      onChange={this.handleText}
                      hintText="Pachuca"
                      fullWidth={true}
                    />
                  </GridTile>
                  <GridTile cols={3}>
                      <TextField
                        name="estado"
                        onChange={this.handleText}
                        hintText="Hidalgo"
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
                    name="telefono"
                    onChange={this.handleText}
                    hintText="7777777777"
                    fullWidth={true}
                  />
                </GridTile>
                <GridTile cols={5}>
                    <TextField
                      name="correo"
                      onChange={this.handleText}
                      hintText="correo@dominio"
                      fullWidth={true}
                    />
                  </GridTile>
                  <GridTile cols={4}>
                      <TextField
                        name="fmercantil"
                        onChange={this.handleText}
                        hintText="Folio Mercantil"
                        fullWidth={true}
                      />
              </GridTile>
            </GridList>
        {/*Acaba los datos generales*/}
          { /* // <Toolbar>
            //   <ToolbarTitle
            //       text="Información Adicional Para Personas Físicas"
            //   />
            //   <div style={{paddingTop:'1%'}}>
            //     <RaisedButton  onTouchTap={this.guardar} label="Guardar" />
            //   </div>
            // </Toolbar>
            // <GridList
            //   cellHeight='auto'
            //   cols={12}
            //   style={{padding:'1%'}}>
            //
            //   <GridTile cols={12}>
            //   ¿Desempeña o ha desempeñado alguna función pública en México o el Extranjero?
            //   </GridTile>
            //
            //   <GridTile cols={2}>
            //
            //   </GridTile>
            //   <GridTile cols={6}>
            //   ¿Qué Cargo?
            //   </GridTile>
            //   <GridTile cols={4}>
            //     Fecha en que lo dejó
            //   </GridTile>
            //
            //
            //
            //
            //     <GridTile cols={2}>
            //       <RadioButtonGroup onChange={this.handleText}  name="fpublico"  >
            //        <RadioButton
            //          value="si"
            //          label="Si"
            //          style={styles.radioButton}
            //        />
            //        <RadioButton
            //          value="no"
            //          label="No"
            //          style={styles.radioButton}
            //        />
            //
            //      </RadioButtonGroup>
            //       </GridTile>
            //       <GridTile cols={6}>
            //           <TextField
            //             name="micargo"
            //             onChange={this.handleText}
            //             hintText="lol"
            //             fullWidth={true}
            //           />
            //   </GridTile>
            //   <GridTile cols={4}>
            //     <DatePicker
            //       onChange={this.handleDates}
            //       onTouchTap={this.testing}
            //       autoOk={true}
            //       hintText="Portrait Dialog"
            //       name="fcargo"/>
            //   </GridTile>
            // </GridList>
            // <Divider/>
            // <GridList
            //   cellHeight='auto'
            //   cols={12}
            //   style={{padding:'1%'}}>
            //
            //   <GridTile cols={12}>
            //   ¿Es familiar de alguien que desempeña alguna función pública en México o el Extranjero?
            //   </GridTile>
            //
            //   <GridTile cols={2}>
            //   </GridTile>
            //   <GridTile cols={6}>
            //   ¿Qué Cargo?
            //   </GridTile>
            //   <GridTile cols={4}>
            //     Fecha en que lo dejó
            //   </GridTile>
            //
            //   <GridTile cols={2}>
            //     <RadioButtonGroup onChange={this.handleText} name="parpublico"  >
            //      <RadioButton
            //        value="si"
            //        label="Si"
            //        style={styles.radioButton}
            //      />
            //      <RadioButton
            //        value="no"
            //        label="No"
            //        style={styles.radioButton}
            //      />
            //
            //    </RadioButtonGroup>
            //     </GridTile>
            //
            //       <GridTile cols={6}>
            //           <TextField
            //             name="sucargo"
            //             onChange={this.handleText}
            //             hintText="lol"
            //             fullWidth={true}
            //           />
            //   </GridTile>
            //   <GridTile cols={4}>
            //     <DatePicker
            //       onChange={this.handleDates}
            //       onTouchTap={this.testing}
            //       autoOk={true}
            //       hintText="Portrait Dialog"
            //       name="fsucargo"/>
            //   </GridTile>
            //
            //
            //   <GridTile cols={2}>
            //       Parentesco
            //   </GridTile>
            //   <GridTile cols={3}>
            //       <TextField
            //         name="parentesco"
            //         onChange={this.handleText}
            //         hintText="lol"
            //         fullWidth={true}
            //       />
            //   </GridTile>
            //   <GridTile cols={2}>
            //       Nombre Completo
            //   </GridTile>
            //   <GridTile cols={5}>
            //       <TextField
            //         name="familiar"
            //         onChange={this.handleText}
            //         hintText="lol"
            //         fullWidth={true}
            //       />
            //   </GridTile>
            // </GridList>*/}
            {/*Acaba los datos de p fisica*/}
          <Toolbar>
                  <ToolbarTitle
                      text="Ocupación o Actividad (Obligatorio)"
                  />
                  <div style={{paddingTop:'1%'}}>
                    <RaisedButton  onTouchTap={this.guardar} label="Guardar" />
                  </div>
                </Toolbar>
                <GridList
                  cellHeight='auto'
                  cols={12}
                  style={{padding:'1%'}}>
                  <GridTile cols={12}>
                    Indique su principal ocupación relacionada con su actividad económica
                  </GridTile>
                </GridList>
                <Divider style={{width:'100%'}}/>
                <GridList
                  cellHeight='auto'
                  cols={12}
                  style={{padding:'1%'}}>



                  <GridTile cols={4}>
                    Asalariado
                  </GridTile>

                  <GridTile cols={4}>
                    Por Honorarios
                  </GridTile>
                  <GridTile cols={4}>
                    Actividad Empresarial
                  </GridTile>

                  <GridTile cols={4}
                    >
                    <SelectField
                      name='ocupacion'
                      floatingLabelText="Actividad"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <MenuItem value="Militar" primaryText="Militar" />
                      <MenuItem value="Piloto/Sobrecargo" primaryText="Piloto/Sobrecargo" />
                      <MenuItem value="Profesor" primaryText="Profesor" />
                      <MenuItem value="Notario" primaryText="Notario" />
                      <MenuItem value="Ministro Religioso" primaryText="Ministro Religioso" />
                      <MenuItem value="Agricultor" primaryText="Agricultor" />
                      <MenuItem value="Médico" primaryText="Médico" />
                      <MenuItem value="Empleado Privado" primaryText="Empleado Privado" />
                      <MenuItem value="Empleado Público" primaryText="Empleado Público" />
                      <MenuItem value="Otro" primaryText="Otro" />
                    </SelectField>
                    <TextField
                      name="otraoc"
                      disabled={this.state.value=='Otro'?false:true}
                      onChange={this.handleText}
                      hintText="Ocupación"
                      fullWidth={true}
                    />

                  </GridTile>

                  <GridTile cols={4}
                    >
                    <RadioButtonGroup onChange={this.handleText} name="bhonorarios"  >
                     <RadioButton
                       value="si"
                       label="Si"
                       style={styles.radioButton}
                     />
                     <RadioButton
                       value="no"
                       label="No"
                       style={styles.radioButton}
                     />

                   </RadioButtonGroup>
                   <br/>
                   Indique
                    <TextField
                      name="honorarios"
                      onChange={this.handleText}
                      hintText="Actividad"
                      fullWidth={true}

                    />

                  </GridTile>

                  <GridTile cols={4}>
                    <RadioButtonGroup onChange={this.handleText} name="actempresarial"  >
                     <RadioButton
                       value="Empresario"
                       label="Empresario"
                       style={styles.radioButton}
                     />
                     <RadioButton
                       value="Comerciante"
                       label="Comerciante"
                       style={styles.radioButton}
                     />
                     <RadioButton
                       value="Comisionista"
                       label="Comisionista"
                       style={styles.radioButton}
                     />


                   </RadioButtonGroup>
                  <br/>
                  Indique
                  <TextField
                    name="aempresarial"
                    onChange={this.handleText}
                    hintText="Actividad"
                    fullWidth={true}
                  />

                  </GridTile>


                </GridList>
                <Divider style={{width:'100%'}}/>
                <GridList cols={1}>
                  <GridTile cols={1} style={{padding:'2%'}}>
                    <TextField
                      multiLine={true}
                      floatingLabelText="Observaciones"
                      rows={2}
                      style={{paddingRight:'6%'}}
                      name="observaciones"
                      onChange={this.handleText}
                      hintText="Observaciones"
                      fullWidth={true}
                    />
                  </GridTile>
                </GridList>


                <Toolbar>
                  <RaisedButton
                    style={{margin:'2% 0 '}}
                    label='Guardar'
                    fullWidth={true}
                    onTouchTap={this.enviarPoliza}/>

                </Toolbar>



        </Paper>
    );
  }
}

const styles = {
  margenes: {
      maxWidth:'80%' ,
      margin:'0 auto',
      marginTop:30,
      textAlign:'left',
      marginBottom: 25,

  },
    formGroup: {
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    p: {
      paddingLeft: 25,
        paddingRight:25
    },
    block: {
        maxWidth: 250,
        paddingLeft:25,
        paddingTop:25
    },
};



export default ClienteForm;
