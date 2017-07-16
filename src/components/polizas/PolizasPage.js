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
import Description from 'material-ui/svg-icons/action/description';
import List from 'material-ui/svg-icons/action/list';

import PolizaSections from './PolizaSections';


class PolizasPage extends Component {
  componentWillMount(){
    console.log(this.props)
  }
  state={open:true}

   handleToggle = () => this.setState({open: !this.state.open});
    render(){
        return(
          <div>
      <AppBar
          style={{position:'fixed'}}
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
                          to="/userprofile/wall">
                          <MenuItem primaryText="Tu perfil" />
                      </Link>
                      <MenuItem primaryText="Tus proyectos" />
                  </IconMenu>

              </ToolbarGroup>

          }
      />
    <div style={this.state.open?{padding:'5.4% 0 0 18%', transition:'all .5s ease' }:{paddingTop:'5.4%', transition:'all .5s ease'}}>
        <PolizaSections/>
      </div>
      <Drawer
          width={200}
          open={this.state.open}
          containerStyle={{marginTop:'5.4%'}}

          onRequestChange={this.props.handleToggle}

          >
          <Subheader>Menú</Subheader>
              <NavLink to="/polizas/" style={{textDecoration:'none'}}>
                <MenuItem leftIcon={<List/>}>
                    Polizas
                </MenuItem>
              </NavLink>

              <NavLink to="/polizas/new/" style={{textDecoration:'none'}}>
                <MenuItem leftIcon={<Description/>}>
                  Nueva Poliza
                </MenuItem>
              </NavLink>

              <NavLink to="/polizas/agentes/" style={{textDecoration:'none'}}>
                <MenuItem leftIcon={<Personitas/>}>
                    Asesores
                </MenuItem>
              </NavLink>

      </Drawer>
    </div>
        );
    }
}

PolizasPage.propTypes = {
  data: PropTypes.func
};

export default PolizasPage;
