import React from 'react';
import HomePage from './components/home/HomePage';
import {
  Switch,
  Route
} from 'react-router-dom';
import PolizasPage from './components/polizas/PolizasPage';
// <Route path='/roster' component={Roster}/>


const Routes = () => (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/polizas' component={PolizasPage}/>
    </Switch>
);

export default Routes;