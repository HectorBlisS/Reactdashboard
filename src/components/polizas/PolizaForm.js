/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {GridList, GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import {
    Paper,
    Toolbar,
    ToolbarTitle,
    ToolbarGroup,
    RaisedButton,
    TextField,
    Divider,
    RadioButton,
    RadioButtonGroup,
    Toggle
} from 'material-ui';

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


const style = {
  check:{
    paddingTop:'5%', fontSize:'.8rem'
  }

}

const PolizaForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <Paper style={styles.margenes}>
            <Toolbar>
              <ToolbarTitle
                  text="Datos Generales del Contratante"
              />
            </Toolbar>
            {/*1st razon social y tipo de persona*/}
            <GridList
              cellHeight='auto'
              cols={12}
              style={{padding:'1%'}}>
              <GridTile cols={4}>
                Tipo de persona
              </GridTile>
              <GridTile cols={8}>
                Razón Social
              </GridTile>
              <GridTile cols={2}>

                <Checkbox
                  label="Fisica"
                  style={{paddingTop:'5%'}}
                />
              </GridTile>

              <GridTile cols={2}>

                <Checkbox
                  label="Moral"
                  style={{paddingTop:'5%'}}
                />
              </GridTile>
              <GridTile cols={8}>
                <TextField
                  hintText="Hint Text"
                  fullWidth={true}
                />
              </GridTile>
            </GridList>
            {/*2nd Apellidos */}
            <GridList
              cellHeight='auto'
              cols={12}
              style={{padding:'1%'}}>
              <GridTile cols={4}>
                Apellido Paterno
              </GridTile>
              <GridTile cols={4}>
                Apellido Materno
              </GridTile>
              <GridTile cols={4}>
                Estado Civil
              </GridTile>


              <GridTile cols={4}>
                <TextField
                  hintText="Hint Text"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  hintText="Hint Text"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={2}>
                <Checkbox
                  label="Soltero"
                  style={{paddingTop:'5%'}}
                />
              </GridTile>
              <GridTile cols={2}>
                <Checkbox
                  label="Casado"
                  style={{paddingTop:'5%'}}
                />
              </GridTile>
            </GridList>
            {/*3rd Name*/}
            <GridList
              cellHeight='auto'
              cols={12}
              style={{padding:'1%'}}>
              <GridTile cols={4}>
                Primer Nombre
              </GridTile>
              <GridTile cols={4}>
                Segundo Nombre
              </GridTile>
              <GridTile cols={4}>
                Género
              </GridTile>


              <GridTile cols={4}>
                <TextField
                  hintText="Hint Text"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  hintText="Hint Text"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={2}>
                <Checkbox
                  label="Masculino"
                  style={{paddingTop:'5%'}}
                />
              </GridTile>
              <GridTile cols={2}>
                <Checkbox
                  label="Femenino"
                  style={{paddingTop:'5%'}}
                />
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
                  hintText="Full width"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  hintText="Full width"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  hintText="20"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={3}>
                <DatePicker hintText="Portrait Dialog" />
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
                  hintText="Full width"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  hintText="Full width"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
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
                  hintText="Full width"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  hintText="Full width"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
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
                Estado de Nacimiento
              </GridTile>

              <GridTile cols={5}>
                <Checkbox
                  label="Residente Temporal"
                  style={{paddingTop:'5%'}}
                />
              </GridTile>
              <GridTile cols={5}>
                <Checkbox
                  label="Residente Permanente"
                  style={{paddingTop:'5%'}}
                />
              </GridTile>
              <GridTile cols={2}>
                <Checkbox
                  label="Otro"
                  style={{paddingTop:'5%'}}
                />
              </GridTile>
              <GridTile cols={4}>
                <TextField
                  hintText="lol"
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
                  hintText="lol"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={3}>
                  <TextField
                    hintText="lol"
                    fullWidth={true}
                  />
                </GridTile>
                <GridTile cols={1}>
                    <TextField
                      hintText="lol"
                      fullWidth={true}
                    />
                  </GridTile>
                  <GridTile cols={1}>
                      <TextField
                        hintText="lol"
                        fullWidth={true}
                      />
                </GridTile>
                <GridTile cols={2}>
                    <TextField
                      hintText="lol"
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
                  hintText="lol"
                  fullWidth={true}
                />
              </GridTile>
              <GridTile cols={3}>
                  <TextField
                    hintText="lol"
                    fullWidth={true}
                  />
                </GridTile>
                <GridTile cols={3}>
                    <TextField
                      hintText="lol"
                      fullWidth={true}
                    />
                  </GridTile>
                  <GridTile cols={3}>
                      <TextField
                        hintText="lol"
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
                    hintText="lol"
                    fullWidth={true}
                  />
                </GridTile>
                <GridTile cols={5}>
                    <TextField
                      hintText="lol"
                      fullWidth={true}
                    />
                  </GridTile>
                  <GridTile cols={4}>
                      <TextField
                        hintText="lol"
                        fullWidth={true}
                      />
              </GridTile>
            </GridList>
        {/*Acaba los datos generales*/}
            <Toolbar>
              <ToolbarTitle
                  text="Información Adicional Para Personas Físicas"
              />
            </Toolbar>
            <GridList
              cellHeight='auto'
              cols={12}
              style={{padding:'1%'}}>

              <GridTile cols={12}>
              ¿Desempeña o ha desempeñado alguna función pública en México o el Extranjero?
              </GridTile>

              <GridTile cols={4}>

              </GridTile>
              <GridTile cols={5}>
              ¿Qué Cargo?
              </GridTile>
              <GridTile cols={3}>
                Fecha en que lo dejó
              </GridTile>


              <GridTile cols={2}>
                <Checkbox
                  label="Si"
                  style={{paddingTop:'5%'}}
                />
                </GridTile>
                <GridTile cols={2}>
                  <Checkbox
                    label="No"
                    style={{paddingTop:'5%'}}
                  />
                  </GridTile>
                  <GridTile cols={5}>
                      <TextField
                        hintText="lol"
                        fullWidth={true}
                      />
              </GridTile>
              <GridTile cols={3}>
                  <TextField
                    hintText="lol"
                    fullWidth={true}
                  />
              </GridTile>
            </GridList>
            <Divider/>
            <GridList
              cellHeight='auto'
              cols={12}
              style={{padding:'1%'}}>

              <GridTile cols={12}>
              ¿Es familiar de alguien que desempeña alguna función pública en México o el Extranjero?
              </GridTile>

              <GridTile cols={4}>
              </GridTile>
              <GridTile cols={5}>
              ¿Qué Cargo?
              </GridTile>
              <GridTile cols={3}>
                Fecha en que lo dejó
              </GridTile>

              <GridTile cols={2}>
                <Checkbox
                  label="Si"
                  style={{paddingTop:'5%'}}
                />
                </GridTile>
                <GridTile cols={2}>
                  <Checkbox
                    label="No"
                    style={{paddingTop:'5%'}}
                  />
                  </GridTile>
                  <GridTile cols={5}>
                      <TextField
                        hintText="lol"
                        fullWidth={true}
                      />
              </GridTile>
              <GridTile cols={3}>
                  <TextField
                    hintText="lol"
                    fullWidth={true}
                  />
              </GridTile>


              <GridTile cols={2}>
                  Parentesco
              </GridTile>
              <GridTile cols={3}>
                  <TextField
                    hintText="lol"
                    fullWidth={true}
                  />
              </GridTile>
              <GridTile cols={2}>
                  Nombre Completo
              </GridTile>
              <GridTile cols={5}>
                  <TextField
                    hintText="lol"
                    fullWidth={true}
                  />
              </GridTile>
            </GridList>
            {/*Acaba los datos de p fisica*/}
                <Toolbar>
                  <ToolbarTitle
                      text="Ocupación o Actividad (Obligatorio)"
                  />
                </Toolbar>
                <GridList
                  cellHeight='auto'
                  cols={12}
                  style={{padding:'1%'}}>
                  <GridTile cols={12}>
                    Indique su principal ocupación relacionada con su actividad económica
                  </GridTile>
                </GridList>
                <Divider/>
                <GridList
                  cellHeight='auto'
                  cols={12}
                  style={{padding:'1%'}}>



                  <GridTile cols={3}>
                    Asalariado
                  </GridTile>
                  <GridTile cols={3}>
                  </GridTile>
                  <GridTile cols={3}>
                    Por Honorarios
                  </GridTile>
                  <GridTile cols={3}>
                    Actividad Empresarial
                  </GridTile>

                  <GridTile cols={3}>
                    <Checkbox
                      label="Militar"
                      style={style.check}
                    />
                    <Checkbox
                      label="Piloto"
                      style={style.check}
                    />
                    <Checkbox
                      label="Profesor"
                      style={style.check}
                    />
                    <Checkbox
                      label="Notario"
                      style={style.check}
                    />
                    <Checkbox
                      label="Ministro Religioso"
                      style={style.check}
                    />
                  <br/>

                  Especifique Institución
                  </GridTile>

                  <GridTile cols={3}
                    >
                    <Checkbox
                      label="Agricultor"
                      style={style.check}
                    />
                    <Checkbox
                      label="Médico"
                      style={style.check}
                    />
                    <Checkbox
                      label="Empleado Privado"
                      style={style.check}
                    />
                    <Checkbox
                      label="Empleado Público"
                      style={style.check}
                    />
                    <Checkbox
                      label="Otro"
                      style={style.check}
                    />
                    <TextField
                      hintText="lol"
                      fullWidth={true}
                    />

                  </GridTile>

                  <GridTile cols={3}
                    >
                    <Checkbox
                      label="Empresario"
                      style={style.check}
                    />
                    <TextField
                      hintText="lol"
                      fullWidth={true}

                    />

                  </GridTile>

                  <GridTile cols={3}>
                    <Checkbox
                      label="Empresario"
                      style={style.check}
                    />
                    <Checkbox
                      label="Comerciante"
                      style={style.check}
                    />
                    <Checkbox
                      label="Comisionista"
                      style={style.check}
                    />
                  <br/>
                  Indique
                  <TextField
                    hintText="lol"
                    fullWidth={true}
                  />

                  </GridTile>


                </GridList>






        </Paper>
    );
};

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



export default PolizaForm;
