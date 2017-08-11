import React, {Component} from 'react';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';
import {Link} from 'react-router-dom';
import Popover from 'material-ui/Popover';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


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
      width:'80%',
      marginTop:'2%',
      borderRadius:'5px',
      borderColor:'#9e9e9e',
      borderWidth:'1px',
      height:'5vh'},


  }
}

class PolizaList extends Component{

  constructor(){
    super()
    this.state={

      polizas:[]
    }
  }

  componentWillMount(){
    api.getPolicys().then(r=>{
      this.setState({polizas:r})
      console.log(this.state.polizas)

    })//.then(r=>{this.dates()})
  }


  dates=()=>{
    moment.locale('es')
    for (let p in this.state.polizas){
      let fecha = this.state.polizas[p].apertura
      let fecha2=moment(fecha).startOf().fromNow();
      fecha=moment(fecha).format('LL')

      let polizas = this.state.polizas;
      polizas[p]['fecha_poliza'] = fecha
      polizas[p]['fecha_poliza2'] = fecha2
      this.setState({polizas});
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
              <TableHeaderColumn>Pago</TableHeaderColumn>
              <TableHeaderColumn>Fecha de Apertura</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.polizas.map(poliza=>{
              return(
                <TableRow key={poliza.id}>
                  <TableRowColumn>
                    <Link
                      style={{textDecoration:'none', color:'black'}}
                      to={"/polizas/detalle/"+poliza.id}>{poliza.idpoliza}</Link>
                  </TableRowColumn>
                  <TableRowColumn>{poliza.asesor.first_name?poliza.asesor.first_name:poliza.asesor.username}</TableRowColumn>
                  <TableRowColumn>
                    {poliza.cliente.rsocial?poliza.cliente.rsocial:poliza.cliente.snombre?poliza.cliente.pnombre + ' ' + poliza.cliente.snombre+' ' + poliza.cliente.apaterno:poliza.cliente.pnombre + ' ' + poliza.cliente.apaterno}
                  </TableRowColumn>
                  <TableRowColumn>
                    {poliza.pago}
                  </TableRowColumn>
                  <TableRowColumn onMouseOver={this.handlePop}>
                    {poliza.fecha_poliza}<br/>
                  <span  style={{color:'#9e9e9e'}}>{poliza.fecha_poliza2}</span>

                  </TableRowColumn>
                </TableRow>
              );
            }).reverse()}

          </TableBody>
        </Table>*/}

        <Griddle
          data={this.state.polizas}
          plugins={[plugins.LocalPlugin]}
          styleConfig={griddleStyles}>
          <RowDefinition>
            <ColumnDefinition id="idpoliza" title="ID" customComponent={CustomColumn} />
            <ColumnDefinition id={"asesor.first_name"} title="Asesor" customComponent={CustomColumn}/>
            <ColumnDefinition id={"cliente.pnombre"} title="Cliente" customComponent={CustomColumn}/>
            <ColumnDefinition id={"apertura"}  title="Fecha de registro" customComponent={CustomColumn2}/>
          </RowDefinition>
        </Griddle>
      </div>
    );
  }
}

export default PolizaList;
