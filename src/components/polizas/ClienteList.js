import React, {Component} from 'react';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';
import {Link} from 'react-router-dom';
import Popover from 'material-ui/Popover';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';


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
    Filter:{width:'80%',
            marginTop:'2%',
            borderRadius:'5px',
            borderColor:'#9e9e9e',
            borderWidth:'1px',
            height:'5vh'}

  }
}
class ClienteList extends Component{

  constructor(){
    super()
    this.state={

      clientes:[]
    }
  }

  componentWillMount(){
    api.getClients().then(r=>{
      this.setState({clientes:r})
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
        data={this.state.clientes}
        plugins={[plugins.LocalPlugin]}
        styleConfig={griddleStyles}>
        <RowDefinition>
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
