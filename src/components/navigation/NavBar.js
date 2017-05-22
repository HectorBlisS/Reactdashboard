import React from 'react';
import AppBar from 'material-ui/AppBar';
import './NavBar.css';
import logo from '../../assets/logodipra.png';

const NavBar = (props) => {
    const { handleToggle } = props;
    return(
         <AppBar
            style={{backgroundColor:'#607D8B'}}
            onTouchTap={handleToggle}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
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