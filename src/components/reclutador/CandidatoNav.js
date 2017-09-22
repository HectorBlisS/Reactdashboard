import React, {Component, PropTypes} from 'react';
import {AppBar, ToolbarGroup, IconMenu, MenuItem, IconButton} from 'material-ui';
import {Link} from 'react-router-dom';

import Hamb from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-drop-down';


const CandidatoNav = ({props}) => {
    return (
        <AppBar

            style={{position:'fixed', backgroundColor:'#57658E'}}
            title={<Link style={{textDecoration:'none',color:'white'}} to="/">Administración de Polizas</Link>}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementLeft={
                <ToolbarGroup>
                    <IconButton touch={true}>

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
    )
};
CandidatoNav.PropTypes = {};
export default CandidatoNav;