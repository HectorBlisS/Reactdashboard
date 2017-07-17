import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NewPolizaPage from './NewPolizaPage';
import PolizaList from './PolizaList';
import AsesoresList from './AsesoresList';
import PolizaDetail from './PolizaDetail';


class PolizaSections extends Component{


  render(){
    return(
      <div>
        <Route path={`${this.props.match.url}/list`} component={PolizaList}/>

        <Route path={`${this.props.match.url}/new`} component={NewPolizaPage}/>
        <Route path={`${this.props.match.url}/asesores`} component={AsesoresList}/>
        <Route path={`${this.props.match.url}/detail/:polizaId`} component={PolizaDetail}/>

      </div>
    );
  }
}
export default PolizaSections;
