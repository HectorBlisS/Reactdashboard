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
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import api from '../../Api/Django';
import toastr from 'toastr';
import VehiculosForm from './VehiculosForm';

class PolizaDetail extends Component{

  constructor(){
    super()
    this.state={
      open:false,
      openModal:false,
      poliza:{
        asesor:{}
      },
      clientesobj:[
        {id:1,
        pnombre:'oswaldo'},

      ],
      vehiculos:[
        {placa:'123',
        marca:'tesla'},

      ],
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
  pasala=(a)=>{
     this.state.vehiculos.push(a)
   }

  //modal
  handleOpen = () => {
   this.setState({openModal: true});
 };

 handleClose = () => {
   this.setState({openModal: false});
 };

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
        {this.state.poliza.daños==='Autos y Camiones'?
          <div>
            <GridList cols={1} cellHeight='auto' style={{padding:'1%'}}>
              <GridTile>
                <RaisedButton
                  primary={true}
                  label="Registro de Vehículos"
                  fullWidth={true}
                  onTouchTap={this.handleOpen}/>
                  <Dialog
                   title="Registro de Vehículos"
                   autoScrollBodyContent={true}
                   modal={false}
                   open={this.state.openModal}
                   onRequestClose={this.handleClose}
                 >
                   <VehiculosForm id={this.state.poliza.id} pasala={this.pasala}/>
                 </Dialog>
              </GridTile>
            </GridList>
            <div style={{padding:'1%'}}>
              <h3>Vehículos Registrados</h3>
              {this.state.vehiculos.map(v=>{
                return(
                  <Card>
                    <CardHeader
                      title={v.marca}
                      subtitle={v.placa}
                      actAsExpander={true}
                      showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                  </Card>
                );
              }).reverse()}
            </div>
          </div>:''}
        </Paper>
      </div>
    );
  }
}
export default PolizaDetail;
