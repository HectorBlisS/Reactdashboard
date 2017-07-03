import React from 'react';
import HomePage from './components/home/HomePage';
import LogIn from './components/common/logIn';
import Slide from './components/slide/Slide';
import Seguros from './components/seguros/Seguros';
import Afore from './components/afore/Afore';
import Banco from './components/banco/Banco';
import Creditos from './components/creditos/Creditos';
import Salud from './components/salud/Salud';
import Extras from './components/extras/Extras';
import Contacto from './components/contacto/Contacto';
import All from './components/all/All';
import FormContacto from './components/formcontacto/FormContacto';
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
      <Route path='/logIn' component={LogIn}/>
      <Route path='/slide' component={Slide}/>
      <Route path='/servicios' component={All}/>
      <Route path='/seguros' component={Seguros}/>
      <Route path='/afore' component={Afore}/>
      <Route path='/banco' component={Banco}/>
      <Route path='/credito' component={Creditos}/>
      <Route path='/gastos' component={Salud}/>
      <Route path='/extras' component={Extras}/>
      <Route path='/contacto' component={Contacto}/>
      <Route path='/form' component={FormContacto}/>
    </Switch>
);

export default Routes;
