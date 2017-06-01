import React from 'react';
import AppBar from 'material-ui/AppBar';
import './NavBar.css';
import logo from '../../assets/logodipra.png';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';



const NavBar = (props) => {
    const { handleToggle, active } = props;
    return(
         <AppBar
            style={{backgroundColor:'#607D8B'}}
            onTouchTap={handleToggle}
            iconElementLeft={
                active ? 
                <IconButton><NavigationClose /></IconButton> : ''
            }
            title={
                
                    <img 
                    alt="Logo"
                    className="logo-img" src={logo} />
                
            }
             >
             
        </AppBar>
    );
};

export default NavBar;