import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import api from '../../Api/Django';
import toastr from 'toastr';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import DatePicker from 'material-ui/DatePicker';

class VehiculosForm extends Component{

  constructor(){
    super()
    this.state={
      vehicle:{

      }
    }
  }
  componentWillMount(){

    let field = 'poliza'
    let vehicle = this.state.vehicle;
    vehicle[field] = this.props.id
    this.setState({vehicle});
    console.log(this.state.vehicle)
  }
  newVehicle=()=>{
    api.postVehicles(this.state.vehicle).then(r=>{
      toastr.success('Se añadió un vehículo a la poliza')
    }).catch(e=>{
      toastr.error('No se añadió, intenta de nuevo')
    })
    this.props.pasala(this.state.vehicle)
  }
  //datePicker data
  handleDates =(e,val)=>{
    let field = this.state.lafecha
    let vehicle = this.state.vehicle;
    vehicle[field] = val
    console.log(this.state.lafecha,val)
  }
  testing=(e)=>{
    this.setState({lafecha:e.target.name})
    //console.log(e.target.name,e.target.value)
  }
  handleText=(event)=>{
     let field = event.target.name
     let vehicle = this.state.vehicle;
     vehicle[field] = event.target.value
     this.setState({vehicle});
     console.log(this.state.vehicle)
  }
  render(){
    return(
      <div>
        <Paper style={{maxWidth:'100%' ,
        margin:'0 auto',
        marginTop:30,
        textAlign:'center',
        marginBottom: 25,
      }}>
        <Toolbar>
          <ToolbarTitle
              text="Datos Básicos"
          />

        </Toolbar>
          <div style={{padding:'1%'}}>
            <GridList cellHeight="auto" cols={3}>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  name="origen"
                  hintText="Origen"
                  floatingLabelText="Origen"

                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Uso"
                  floatingLabelText="Uso"
                  name="uso"
                />
              </GridTile>
              <GridTile cols={1}>
                <DatePicker hintText="Portrait Dialog"
                  name='alta'
                  onChange={this.handleDates}
                  onTouchTap={this.testing}
                   autoOk={true}
                   floatingLabelText="Alta"/>
              </GridTile>
            </GridList>
            <GridList cellHeight="auto" cols={3}>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  name="clavet"
                  hintText="Clave Tarifa"
                  floatingLabelText="Clave Tarifa"

                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Marca"
                  floatingLabelText="Marca"
                  name="marca"
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Modelo"
                  floatingLabelText="Modelo"
                  name="modelo"
                />
              </GridTile>
            </GridList>
            <GridList cellHeight="auto" cols={3}>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Color"
                  floatingLabelText="Color"
                  name="color"
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Puertas"
                  floatingLabelText="Puertas"
                  name="puertas"
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Ocupantes"
                  floatingLabelText="Ocupantes"
                  name="ocupantes"
                />
              </GridTile>
            </GridList>
            <GridList cellHeight="auto" cols={3}>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Placa"
                  floatingLabelText="Placa"
                  name="placa"
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Serie"
                  floatingLabelText="Serie"
                  name="serie"
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Motor"
                  floatingLabelText="Motor"
                  name="motor"
                />
              </GridTile>
            </GridList>
            <GridList cellHeight="auto" cols={3}>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Status"
                  floatingLabelText="Status"
                  name="status"
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Repuve"
                  floatingLabelText="Repuve"
                  name="repuve"
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Conductor Habitual"
                  floatingLabelText="Conductor Habitual"
                  name="conductor"
                />
              </GridTile>
            </GridList>

            <GridList>

            </GridList>
            <GridList cellHeight="auto" cols={3}>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Prima Neta Anual"
                  floatingLabelText="Prima Neta Anual"
                  name="prima_neta"
                />
              </GridTile>

              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Prima Total Anual"
                  floatingLabelText="Prima Total Anual"
                  name="prima_total"
                />
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  onChange={this.handleText}
                  hintText="Adaptaciones"
                  floatingLabelText="Adaptaciones"
                  name="adaptaciones"
                />
              </GridTile>
            </GridList>
          </div>
          <RaisedButton  onTouchTap={this.newVehicle} label="Guardar" fullWidth={true}/>
      </Paper>
      </div>
    );
  }
}
export default VehiculosForm;
