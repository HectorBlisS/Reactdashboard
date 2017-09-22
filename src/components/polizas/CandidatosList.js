import React from 'react'
import api from '../../Api/Django';
import {GridList, GridTile, Dialog, RaisedButton, TextField, DatePicker} from 'material-ui';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import {Link} from 'react-router-dom';
import {SelectField, MenuItem} from 'material-ui';
import toastr from 'toastr';
import MainLoader from '../common/MainLoader';
import 'moment/locale/es';
import moment from 'moment';




const CustomColumn = ({value}) => <p>{value}</p>
const Status = ({value}) =>{
  return(
    <div>
      {!value?<p>Asesor</p>:<p>Candidato</p>}
    </div>
  )
}
const Cita = ({value}) => {

  return(
    <div>
      <Link to={"/polizas/candidato/"+value}>
        <RaisedButton label='Revisar'/>
      </Link>
    </div>
  )
}

const CustomColumn2 = ({value}) => {
  moment.locale('es')
  let fecha = value
  let fecha2=moment(fecha).startOf().fromNow();
  fecha=moment(fecha).format('LL')
  return(<p>{fecha}<br/><span style={{color:'#9e9e9e'}}>{fecha2}</span></p>)
}
const griddleStyles={
  styles:{
    Table:{width:'100%'},
    SettingsWrapper:{display:'none'},
    Filter:{
        position:'absolute',
        top:5,
        left:5,
      padding:'1% 3%',
      width:'30%',
      margin:'2% 0',
      borderRadius:'5px',
      borderColor:'rgb(224, 224, 224)',
      borderWidth:'1px',
      height:'1vh',
      fontSize:'1rem',
      color:'#9e9e9e'},

    Row:{
      boxShadow:'0 1px 0 0 rgb(224, 224, 224)',
    },
    PageDropdown:{
      margin:'1%',
      width:'5%'
    },
     Pagination:{
      margin:'2% 0'
     }


  }
}

class CandidatosList extends React.Component {

  constructor(){
    super()
    this.state={
        search:'',
      loading:true,
      candidatos:[],
      open:false,
      candidato:{},
    }
  }

  componentWillMount(){
    api.getCandidatos().then(r=>{
      this.setState({candidatos:r.reverse(), loading:false})
      console.log(r)
    }).catch(e=>{
      console.log(e)

    })
  }

  handleDates =(e,val)=>{
    let field = this.state.lafecha
    let candidato = this.state.candidato;
    candidato[field] = val
    this.setState({candidato});

  }
  testing=(e)=>{
    this.setState({lafecha:e.target.name})
    //console.log(e.target.name,e.target.value)
  }

  handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };

 //textfields data
 handleText = (event, index) => {
    let field = event.target.name
    let candidato = this.state.candidato;
    candidato[field] = event.target.value
    this.setState({candidato});
    console.log(this.state.candidato)
  }
  addCandidato=()=>{
    console.log('1',this.state.candidatos)
    api.newCandidato(this.state.candidato)
      .then(r=>{
        console.log(r);
        let candidatos = this.state.candidatos;
        candidatos.push(r);
        this.setState({open: false, candidatos});
        toastr.success('Tu candidato se agregó');

    }).catch(e=>{
      toastr.error('Hubo un error, Intenta mas tarde')
    })
  }

    onChange=(event, index, value)=>{
        this.setState({search:value})
    }


  render () {
     let candidatos = this.state.candidatos.filter(candidato=>{
         if(this.state.search===''){
             return candidato
         }else{
             return (
                 candidato.candidato===this.state.search
             )
         }


     })

    return(
      <div style={{padding:'10% 4%', position:'relative'}}>
          <div style={{position:'absolute', right:200, top:10, textAlign:'left'}}>
              <SelectField


                  value={this.state.search}
                  onChange={this.onChange}
              >

                  <MenuItem value='' primaryText="Todos" />
                  <MenuItem value={false} primaryText="Asesor" />
                  <MenuItem value={true} primaryText="Candidato" />


              </SelectField>
          </div>
            {this.state.loading && <MainLoader/>}
            <div style={{position:'absolute', top:20, right:50}}>
              <RaisedButton
                backgroundColor="rgb(87, 101, 142)"
                label="Agregar"
                labelColor="#FFF"
                onTouchTap={this.handleOpen}/>
                <Dialog
                 title="Agrega un Prospecto"
                 modal={false}
                 open={this.state.open}
                 onRequestClose={this.handleClose}
               >
                 <GridList cols={2} cellHeight="auto">
                   <GridTile cols={1}>
                     <TextField
                       floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                       underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                       hintText="Nombre"
                       floatingLabelText="Nombre"
                       name="nombre"
                       onChange={this.handleText}
                       fullWidth={true}/>
                   </GridTile>
                   <GridTile cols={1}>
                     <TextField
                       floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                       underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
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
                         floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                         underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                           name='fecha_reclutamiento'
                           onChange={this.handleDates}
                           onTouchTap={this.testing}
                          autoOk={true}
                          floatingLabelText="Fecha de Reclutamiento"/>
                   </GridTile>
                   <GridTile cols={1}>
                     <TextField
                       floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                       underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                       hintText="Correo"
                       floatingLabelText="Correo"
                       name="correo"
                       onChange={this.handleText}
                       fullWidth={true}/>

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
            <Griddle
              data={candidatos}
              plugins={[plugins.LocalPlugin]}
              styleConfig={griddleStyles}>
              <RowDefinition>
                <ColumnDefinition title="Nombre" id="nombre" customComponent={CustomColumn}/>
                <ColumnDefinition title="Teléfono" id="telefono" customComponent={CustomColumn}/>
                <ColumnDefinition title="Correo" id="correo" customComponent={CustomColumn}/>
                <ColumnDefinition title="Se Reclutó" id="fecha_reclutamiento" customComponent={CustomColumn2}/>
                <ColumnDefinition title="Status" id="candidato" customComponent={Status}/>
                <ColumnDefinition title="Cita" id="id" customComponent={Cita}/>


              </RowDefinition>
            </Griddle>


      </div>
    )
  }
}

export default CandidatosList;
