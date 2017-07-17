import React, {Component} from 'react';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

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

    }).then(r=>{this.dates()})
  }


  dates=()=>{
    moment.locale('es')
    for (let p in this.state.polizas){
      let fecha = this.state.polizas[p].fecha_poliza
      fecha=moment(fecha).format('LL')
      let polizas = this.state.polizas;
      polizas[p]['fecha_poliza'] = fecha
      this.setState({polizas});
    }
  }
  render(){


    return(
      <div>
      <Table>
        <TableHeader>
          <TableRow >
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Asesor</TableHeaderColumn>
            <TableHeaderColumn>Tipo de Poliza</TableHeaderColumn>
            <TableHeaderColumn>Fecha de Creación</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.polizas.map(poliza=>{
            return(
              <TableRow key={poliza.id}>
                <TableRowColumn>{poliza.id}</TableRowColumn>
                <TableRowColumn>{poliza.asesor.username}</TableRowColumn>
                <TableRowColumn>Poliza de Auto</TableRowColumn>
                <TableRowColumn>
                  {poliza.fecha_poliza}
                </TableRowColumn>
              </TableRow>
            );
          })}

        </TableBody>
      </Table>
      </div>
    );
  }
}
export default PolizaList;
