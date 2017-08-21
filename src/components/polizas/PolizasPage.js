import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import {Link, NavLink} from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import { ToolbarGroup } from 'material-ui';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Hamb from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-drop-down';
import Personitas from 'material-ui/svg-icons/action/supervisor-account';
import Personitas2 from 'material-ui/svg-icons/social/group';
import Description from 'material-ui/svg-icons/action/description';
import List from 'material-ui/svg-icons/action/list';
import AddPolicy from 'material-ui/svg-icons/action/note-add';
import AddUser from 'material-ui/svg-icons/social/person-add';
import Port from 'material-ui/svg-icons/action/work';
import api from '../../Api/Django';
import toastr from 'toastr';


import PolizaSections from './PolizaSections';


class PolizasPage extends Component {

  constructor(){
    super()
    this.state={
      user:{},
      open:true
    }
  }
  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('userToken'));
    if(!user){
      this.props.history.push('/login');
    }else{
      api.getProfile()
      .then(r=>{
          this.setState({user:r});
          console.log(r);
      })
      .catch(e=>toastr.error("algo falló"));
    }
    console.log(this.props)

  }


   handleToggle = () => this.setState({open: !this.state.open});
    render(){
        return(
          <div>
      <AppBar

          style={{position:'fixed', backgroundColor:'#57658E'}}
          title={<Link style={{textDecoration:'none',color:'white'}} to="/">Administración de Polizas</Link>}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementLeft={
            <ToolbarGroup>
              <IconButton touch={true}>
                  {this.state.open?<Close color="white" />:<Hamb color="white" />}
              </IconButton>
            </ToolbarGroup>
          }
          iconElementRight={
              <ToolbarGroup firstChild={true}>
                  <IconMenu
                      iconButtonElement={
                          <IconButton touch={true}>
                              <DownArrow color="white" />
                          </IconButton>
                      }
                  >
                      <Link
                          style={{textDecoration:'none'}}
                          to="/perfil">
                          <MenuItem primaryText="Perfil" />
                      </Link>
                      <Link
                          style={{textDecoration:'none'}}
                          to="/">
                          <MenuItem primaryText="Inicio" />
                      </Link>


                  </IconMenu>

              </ToolbarGroup>

          }
      />
    <div style={this.state.open?{padding:'5.4% 0 0 18%', transition:'all .5s ease' }:{paddingTop:'5.4%', transition:'all .5s ease'}}>
        <PolizaSections match={this.props.match} location={this.props.location}/>
    </div>
      <Drawer
          width={200}
          open={this.state.open}
          containerStyle={{marginTop:'64px'}}

          onRequestChange={this.props.handleToggle}

          >
          <Subheader>Menú</Subheader>

            <NavLink to="/polizas/nueva" style={{textDecoration:'none'}}>
              <MenuItem leftIcon={<AddPolicy color={this.props.location.pathname=="/polizas/nueva"?'#fff':''}/>} style={this.props.location.pathname=="/polizas/nueva"?{backgroundColor:'rgb(87, 101, 142)', color:'#fff'}:''}>
                  Nueva Poliza
              </MenuItem>
            </NavLink>
            <NavLink to="/polizas" style={{textDecoration:'none'}}>
              <MenuItem leftIcon={<List color={this.props.location.pathname=="/polizas"?'#fff':''}/>} style={this.props.location.pathname=="/polizas"?{backgroundColor:'rgb(87, 101, 142)', color:'#fff'}:''}>
                  Polizas
              </MenuItem>
            </NavLink>

            <NavLink to="/polizas/nuevo-cliente" style={{textDecoration:'none'}}>
              <MenuItem leftIcon={<AddUser color={this.props.location.pathname=="/polizas/nuevo-cliente"?'#fff':''}/>}  style={this.props.location.pathname=="/polizas/nuevo-cliente"?{backgroundColor:'rgb(87, 101, 142)', color:'#fff'}:''}>
                Nuevo Cliente
              </MenuItem>
            </NavLink>
            <NavLink to="/polizas/clientes" style={{textDecoration:'none'}}>
              <MenuItem leftIcon={<Personitas2 color={this.props.location.pathname=="/polizas/clientes"?'#fff':''}/>}style={this.props.location.pathname=="/polizas/clientes"?{backgroundColor:'rgb(87, 101, 142)', color:'#fff'}:''}>
                  Clientes
              </MenuItem>
            </NavLink>
          {this.state.user.is_staff?
              <div>

              <NavLink to="/polizas/asesores" style={{textDecoration:'none'}}>
                <MenuItem leftIcon={<Port color={this.props.location.pathname=="/polizas/asesores"?'#fff':''}/>}style={this.props.location.pathname=="/polizas/asesores"?{backgroundColor:'rgb(87, 101, 142)', color:'#fff'}:''}>
                    Asesores
                </MenuItem>
              </NavLink>
              <NavLink to="/polizas/usuarios" style={{textDecoration:'none'}}>
                <MenuItem leftIcon={<Personitas color={this.props.location.pathname=="/polizas/usuarios"?'#fff':''}/>}style={this.props.location.pathname=="/polizas/usuarios"?{backgroundColor:'rgb(87, 101, 142)', color:'#fff'}:''}>
                    Usuarios
                </MenuItem>
              </NavLink>
              </div>:''}


      </Drawer>
    </div>
        );
    }
}

PolizasPage.propTypes = {
  data: PropTypes.func
};

export default PolizasPage;
