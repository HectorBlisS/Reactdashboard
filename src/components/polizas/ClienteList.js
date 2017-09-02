import React, {Component} from 'react';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MainLoader from '../common/MainLoader';
// import {
//   Table,
//   TableBody,
//   TableHeader,
//   TableHeaderColumn,
//   TableRow,
//   TableRowColumn,
// } from 'material-ui/Table';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';

const Detalle = ({value}) => <Link style={{color:'#000', textDecoration:'none'}}
 to={'/polizas/cliente/'+value}><RaisedButton>Detalle</RaisedButton></Link>
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
class ClienteList extends Component{

  constructor(){
    super()
    this.state={
      loading:true,
      clientes:[]
    }
  }

  componentWillMount(){
    api.getClients().then(r=>{
      this.setState({clientes:r, loading:false})
      console.log(this.state.clientes)

    }).then(r=>{this.dates()})
  }


  dates=()=>{
    moment.locale('es')
    for (let p in this.state.clientes){
      let fecha = this.state.clientes[p].fecha_poliza
      let fecha2=moment(fecha).startOf().fromNow();
      fecha=moment(fecha).format('LL')

      let clientes = this.state.clientes;
      clientes[p]['fecha_cliente'] = fecha
      clientes[p]['fecha_cliente2'] = fecha2
      this.setState({clientes});
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
            <TableHeaderColumn>Asesor</TableHeaderColumn>
            <TableHeaderColumn>Cliente</TableHeaderColumn>
            <TableHeaderColumn>Fecha de Registro</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.clientes.map(cliente=>{
            return(
              <TableRow key={cliente.id}>
                <TableRowColumn>
                  {cliente.idcliente}
                </TableRowColumn>
                <TableRowColumn>{cliente.asesor.first_name?cliente.asesor.first_name:cliente.asesor.username}</TableRowColumn>
                <TableRowColumn>
                  <Link
                    style={{textDecoration:'none', color:'black'}}
                    to={"/polizas/cliente/"+cliente.id}>
                  {cliente.rsocial?cliente.rsocial:cliente.snombre?cliente.pnombre + ' ' + cliente.snombre+' ' + cliente.apaterno:cliente.pnombre + ' ' + cliente.apaterno}
                  </Link>
                </TableRowColumn>
                <TableRowColumn onMouseOver={this.handlePop}>
                  {cliente.fecha_cliente}<br/>
                <span  style={{color:'#9e9e9e'}}>{cliente.fecha_cliente2}</span>

                </TableRowColumn>
              </TableRow>
            );
          }).reverse()}

        </TableBody>
      </Table>*/}
      <Griddle
        data={this.state.clientes.reverse()}
        plugins={[plugins.LocalPlugin]}
        styleConfig={griddleStyles}>
        <RowDefinition>
          <ColumnDefinition id="id" title=" " customComponent={Detalle} />
          <ColumnDefinition id="idcliente" title="ID" customComponent={CustomColumn} />
          <ColumnDefinition id={"asesor.username"} title="Asesor" customComponent={CustomColumn}/>
          <ColumnDefinition id="pnombre" title="Cliente" customComponent={CustomColumn}/>
          <ColumnDefinition id={"fecha_poliza"}  title="Fecha de registro" customComponent={CustomColumn2}/>
        </RowDefinition>
      </Griddle>
      </div>
    );
  }
}
export default ClienteList;
