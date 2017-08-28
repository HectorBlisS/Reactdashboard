import React from 'react'
import api from '../../Api/Django';
import {GridList, GridTile, Dialog, RaisedButton, TextField} from 'material-ui';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import toastr from 'toastr';
import MainLoader from '../common/MainLoader';




const CustomColumn = ({value}) => <p>{value}</p>
const griddleStyles={
  styles:{
    Table:{width:'100%'},
    SettingsWrapper:{display:'none'},
    Filter:{
      padding:'1% 3%',
      width:'50%',
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

class Prospectos extends React.Component {

  constructor(){
    super()
    this.state={
      loading:true,
      prospectos:[],
      open:false,
      prospect:{},
    }
  }

  componentWillMount(){
    api.getProspects().then(r=>{
      this.setState({prospectos:r, loading:false})
    }).catch(e=>{
      console.log(e)

    })
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
    let prospect = this.state.prospect;
    prospect[field] = event.target.value
    this.setState({prospect});
    console.log(this.state.prospect)
  }
  addProspect=()=>{
    api.newProspect(this.state.prospect).then(r=>{
      this.state.prospectos.push(this.state.prospect)
      toastr.success('Prospecto Agregado')
      this.setState({open: false});
    }).catch(e=>{
      toastr.error('Hubo un error, Intenta mas tarde')
    })
  }



  render () {
    return(
      <div style={{padding:'1% 4%', position:'relative'}}>
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
                     <TextField
                       floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                       underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                       hintText="Producto1"
                       floatingLabelText="Producto1"
                       name="prod1"
                       onChange={this.handleText}
                       fullWidth={true}/>
                   </GridTile>
                   <GridTile cols={1}>
                     <TextField
                       floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                       underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                       hintText="Producto2"
                       floatingLabelText="Producto2"
                       name="prod2"
                       onChange={this.handleText}
                       fullWidth={true}/>
                   </GridTile>
                 </GridList>
                 <GridList cols={1} cellHeight="auto">
                   <GridTile cols={1}>
                     <TextField
                       floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                       underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                       hintText="Comentarios"
                       floatingLabelText="Comentarios"
                       name="comentarios"
                       onChange={this.handleText}
                       multiLine={true}
                       fullWidth={true}/>
                       <RaisedButton
                         backgroundColor="rgb(87, 101, 142)"
                         label="Agregar"
                         fullWidth={true}
                         labelColor="#FFF"
                         onTouchTap={this.addProspect}/>
                   </GridTile>
                 </GridList>
               </Dialog>
            </div>
            <Griddle
              data={this.state.prospectos.reverse()}
              plugins={[plugins.LocalPlugin]}
              styleConfig={griddleStyles}>
              <RowDefinition>
                <ColumnDefinition title="Nombre" id="nombre" customComponent={CustomColumn}/>
                <ColumnDefinition title="Teléfono" id="telefono" customComponent={CustomColumn}/>
                <ColumnDefinition title="Producto 1" id="prod1" customComponent={CustomColumn}/>
                <ColumnDefinition title="Producto 2" id="prod2" customComponent={CustomColumn}/>
                <ColumnDefinition title="Comentarios" id="comentarios" customComponent={CustomColumn}/>

              </RowDefinition>
            </Griddle>


      </div>
    )
  }
}

export default Prospectos;
