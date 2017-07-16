import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NewPolizaPage from './NewPolizaPage';
import PolizaList from './PolizaList';


class PolizaSections extends Component{
  render(){
    return(
      <div>
        <Route path="/polizas/:polizaId" component={NewPolizaPage}/>
        <Route path="/polizas/new" component={NewPolizaPage}/>
        <Route path="/polizas/agentes/" component={NewPolizaPage}/>
        <Route exact path="/polizas/" component={PolizaList}/>
      </div>
    );
  }
}
export default PolizaSections;
