import React, {Component} from 'react';
import api from '../../Api/Django';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import MainLoader from '../common/MainLoader';

// import {
//   Table,
//   TableBody,
//   TableHeader,
//   TableHeaderColumn,
//   TableRow,
//   TableRowColumn,
// } from 'material-ui/Table';
import 'moment/locale/es';
import moment from 'moment';
import Aprobar from './Aprobar';



const Detalle = ({value}) => {
  return(
    <Aprobar id={value}/>
  )
}

const CustomColumn = ({value}) => <p>{value}</p>
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

class UsersList extends Component{


  constructor(){
    super()
    this.state={
      loading:true,
      usuarios:[]
    }
  }
  componentWillMount(){
    api.getUsers().then(r=>{
      this.setState({usuarios:r,loading:false})
      console.log(this.state.usuarios)
    })//.then(r=>{this.dates()})
  }
  dates=()=>{
    moment.locale('es')
    for (let p in this.state.usuarios){
      let fecha = this.state.usuarios[p].date_joined
      let fecha2=moment(fecha).startOf().fromNow();
      fecha=moment(fecha).format('LL')

      let usuarios = this.state.usuarios;
      usuarios[p]['date_joined'] = fecha
      usuarios[p]['date_joined2'] = fecha2
      this.setState({usuarios});
    }
  }
  render(){
    return(
      <div>
        {this.state.loading && <MainLoader/>}
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
            {this.state.usuarios.map(user=>{
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
          data={this.state.usuarios.reverse()}
          plugins={[plugins.LocalPlugin]}
          styleConfig={griddleStyles}>
          <RowDefinition>
            <ColumnDefinition id="id" title="Aprobar" customComponent={Detalle} />

            <ColumnDefinition id={"first_name"} title="Usuario" customComponent={CustomColumn}/>
            <ColumnDefinition id="profile.tipo" title="Tipo" customComponent={CustomColumn}/>
            <ColumnDefinition id={"date_joined"}  title="Fecha de registro" customComponent={CustomColumn2}/>
          </RowDefinition>
        </Griddle>


      </div>
    );
  }
}

export default UsersList;
