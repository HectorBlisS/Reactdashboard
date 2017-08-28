import React, {Component} from 'react';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
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

const Detalle = ({value}) => <Link style={{color:'#000', textDecoration:'none'}}
 to={'/polizas/detalle/'+value}><RaisedButton>Detalle</RaisedButton></Link>
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

class PolizaList extends Component{

  constructor(){
    super()
    this.state={
      loading:true,
      polizas:[]
    }
  }

  componentWillMount(){
    api.getPolicys().then(r=>{
      this.setState({polizas:r,loading:false})
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
        {this.state.loading && <MainLoader/>}
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
          data={this.state.polizas.reverse()}
          plugins={[plugins.LocalPlugin]}
          styleConfig={griddleStyles}>
          <RowDefinition>
            <ColumnDefinition id="id" title=" " customComponent={Detalle} />
            <ColumnDefinition id="idpoliza" title="ID de Poliza" customComponent={CustomColumn} />
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
