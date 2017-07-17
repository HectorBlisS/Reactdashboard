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
      <Table>
        <TableHeader>
          <TableRow>
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
                <TableRowColumn>
                  <Link
                    style={{textDecoration:'none', color:'black'}}
                    to={"/polizas/detail/"+poliza.id}>{poliza.id}</Link>
                </TableRowColumn>
                <TableRowColumn>{poliza.asesor.username}</TableRowColumn>
                <TableRowColumn>Poliza de Auto</TableRowColumn>
                <TableRowColumn onMouseOver={this.handlePop}>
                  {poliza.fecha_poliza}<br/>
                <span  style={{color:'#9e9e9e'}}>{poliza.fecha_poliza2}</span>

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
