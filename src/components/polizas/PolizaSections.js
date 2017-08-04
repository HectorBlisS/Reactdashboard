import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NewPolizaPage from './NewPolizaPage';
import ClienteList from './ClienteList';
import AsesoresList from './AsesoresList';
import PolizaDetail from './PolizaDetail';
import NewPoliza from './NewPoliza';
import PolizaList from './PolizaList';


class PolizaSections extends Component{


  render(){
    return(
      <div>
        <Route path={`${this.props.match.url}/clientes`} component={ClienteList}/>
        <Route exact path={`${this.props.match.url}`} component={PolizaList}/>
        <Route path={`${this.props.match.url}/new-policy`} component={NewPoliza}/>
        <Route path={`${this.props.match.url}/new-client`} component={NewPolizaPage}/>
        <Route path={`${this.props.match.url}/asesores`} component={AsesoresList}/>
        <Route path={`${this.props.match.url}/detail/:polizaId`} component={PolizaDetail}/>

      </div>
    );
  }
}
export default PolizaSections;
