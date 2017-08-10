import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NewPolizaPage from './NewPolizaPage';
import ClienteList from './ClienteList';
import AsesoresList from './AsesoresList';
import ClientDetail from './ClientDetail';
import NewPoliza from './NewPoliza';
import PolizaList from './PolizaList';
import PolizaDetail from './PolizaDetail';
import UsersList from './UsersList';


class PolizaSections extends Component{

  detail=()=>{
    return(<PolizaDetail location={this.props.location} match={this.props.match} />)
  }
  render(){
    return(
      <div>
        <Route exct path={`${this.props.match.url}/clientes`} component={ClienteList}/>
        <Route exact path={`${this.props.match.url}`} component={PolizaList}/>
        <Route path={`${this.props.match.url}/nueva`} component={NewPoliza}/>
        <Route path={`${this.props.match.url}/detalle/:polizaId`} component={PolizaDetail}/>
        <Route path={`${this.props.match.url}/nuevo-cliente`} component={NewPolizaPage}/>
        <Route path={`${this.props.match.url}/asesores`} component={AsesoresList}/>
        <Route path={`${this.props.match.url}/usuarios`} component={UsersList}/>
        <Route path={`${this.props.match.url}/cliente/:clientId`} component={ClientDetail}/>

      </div>
    );
  }
}
export default PolizaSections;
