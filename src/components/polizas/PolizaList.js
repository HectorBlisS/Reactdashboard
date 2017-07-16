import React, {Component} from 'react';
import api from '../../Api/Django';
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
    })
  }
  render(){
    return(
      <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.polizas.map(poliza=>{
            return(
              <TableRow>
                <TableRowColumn>{poliza.id}</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
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
