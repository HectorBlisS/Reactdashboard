import React, {Component} from 'react';
import api from '../../Api/Django';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Link} from 'react-router-dom';
import 'moment/locale/es';
import moment from 'moment';




const CustomColumn = ({value}) => <p>{value}</p>
const CustomClientes = ({value}) => {
  let v =value.size
  console.log('lol',value.size)
  return(<p>{v}</p>)}
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
    PageDropdown:{color:'red'},
    Filter:{width:'50%',

            marginTop:'2%',
            borderRadius:'5px',
            borderColor:'#9e9e9e',
            borderWidth:'1px',
            height:'5vh'}

  }
}

class AsesoresList extends Component{


  constructor(){
    super()
    this.state={
      asesores:[]
    }
  }
  componentWillMount(){
    api.getAsesores().then(r=>{
      this.setState({asesores:r})
      console.log(this.state.asesores)
    })//.then(r=>{this.dates()})
  }
  dates=()=>{
    moment.locale('es')
    for (let p in this.state.asesores){
      let fecha = this.state.asesores[p].date_joined
      let fecha2=moment(fecha).startOf().fromNow();
      fecha=moment(fecha).format('LL')

      let asesores = this.state.asesores;
      asesores[p]['date_joined'] = fecha
      asesores[p]['date_joined2'] = fecha2
      this.setState({asesores});
    }
  }
  render(){
    return(
      <div>
        {/*<Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Usuario</TableHeaderColumn>
              <TableHeaderColumn>Tipo</TableHeaderColumn>
              <TableHeaderColumn>Fecha de Registro</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.asesores.map(user=>{
              return(
                <TableRow key={user.id}>
                  <TableRowColumn>{user.id}</TableRowColumn>
                  <TableRowColumn>{user.first_name?user.first_name:user.username}</TableRowColumn>
                  <TableRowColumn>{user.profile.tipo}</TableRowColumn>
                  <TableRowColumn>
                    {user.date_joined}<br/>
                    <span style={{color:'#9e9e9e'}}>{user.date_joined2}</span>
                  </TableRowColumn>
                </TableRow>
              );
            }).reverse()}

          </TableBody>
        </Table>*/}
        <Griddle
          data={this.state.asesores}
          plugins={[plugins.LocalPlugin]}
          styleConfig={griddleStyles}>
          <RowDefinition>
            <ColumnDefinition id="asesorid" title="ID" customComponent={CustomColumn} />
            <ColumnDefinition id={"username"} title="Asesor" customComponent={CustomColumn}/>
            <ColumnDefinition id="cliente_asesor" title="Clientes" customComponent={CustomClientes}/>
            <ColumnDefinition id={"date_joined"}  title="Fecha de registro" customComponent={CustomColumn2}/>
          </RowDefinition>
        </Griddle>


      </div>
    );
  }
}

export default AsesoresList;
