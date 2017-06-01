import React, { Component } from 'react';
import PropTypes from 'prop-types'; // PorpTypes
import {AppBar} from 'material-ui';
import Drawer from 'material-ui/Drawer';
//import RaisedButton from 'material-ui/RaisedButton';
//import { pinkA200 } from 'material-ui/styles/colors';

//imagenes
import avatar from '../../assets/guy-6.jpg';
import Avatar from 'material-ui/Avatar';


import Divider from 'material-ui/Divider';


import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import Subheader from 'material-ui/Subheader';

//routas
import { NavLink, Link } from 'react-router-dom';

//Estilos
//import {blue300, indigo900} from 'material-ui/styles/colors';

import './MainMenu.css';


const styles = {
    blanco: {
        color: 'white'
    }
}

class MainMenu extends Component {
    
    state = {
        open: false,
    };
    
    handleNestedListToggle = (item) => {
        this.setState({
          open: item.state.open,
        });
      };

    componentDidMount(){
        const polizas = new RegExp('polizas')
        console.log(polizas.test(window.location.pathname));
    }
    
    render(){
        const polizas = new RegExp('polizas');

        return(
        <div >
            <Drawer
            open={this.props.active}
            style={{textAlign:'left'}}>
            
                <AppBar
                    style={{backgroundColor:'#607D8B'}}
                    iconStyleLeft={{color: 'red'}}
                    onTouchTap={this.props.handleToggle}
                    titleStyle={{color:'white'}}
                    title="Admin"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                  />

               
               
              <List >
               
                <ListItem
                    primaryText="Héctor BlisS"
                    leftAvatar={<Avatar src={avatar}/>}
                    rightIcon={<CommunicationChatBubble />}
                  />
                  
                  
                <Subheader>Atajos Rápidos</Subheader>
                    <ListItem
                        containerElement={<NavLink activeStyle={{color:'black'}} className="no-link" to="/polizas/new" />}
                        primaryText="Capturar Poliza"
                        style={this.state.active ? styles.blanco: {color:'grey'}}
                        leftIcon={<ContentSend />}

                    />
                <ListItem
                    containerElement={<NavLink activeStyle={{color:'black'}} className="no-link" to="/reportes" />}
                    primaryText="Reportes"
                   style={{color:'grey'}} 
                   leftIcon={<ContentDrafts />} />
                    <Divider />

                    <Subheader>Secciones</Subheader>
                <ListItem
                    containerElement={<NavLink activeStyle={{color:'black'}} className="no-link" to="/polizas" />}
                    style={{backgroundColor:'grey', color:'lightgrey'}}
                      primaryText="Polizas"
                      leftIcon={<ContentInbox />}
                      initiallyOpen={polizas.test(window.location.pathname)}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                            <ListItem
                              containerElement={
                                          <Link to="/polizas" />
                                      }
                              key={1}
                              primaryText="Alertas"
                              leftIcon={<ActionGrade />}
                            />,
                    <ListItem
                     
                      key={2}
                      primaryText="Marcadas"
                      leftIcon={<ContentSend />}
                      disabled={true}
                      nestedItems={[
                        <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                      ]}
                    />,
                    <ListItem
                      key={3}
                      primaryText="Pendientes"
                      leftIcon={<ContentInbox />}
                      open={this.state.open}
                      onNestedListToggle={this.handleNestedListToggle}
                      nestedItems={[
                        <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                      ]}
                    />,
                  ]}
                />

                    <Divider />
                <ListItem
                  style={{backgroundColor:'grey', color:'lightgrey'}}
                  primaryText="Asesores"
                  leftIcon={<ContentInbox />}
                  initiallyOpen={false}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem
                      key={1}
                      primaryText="Alertas"
                      leftIcon={<ActionGrade />}
                    />,
                    <ListItem
                      key={2}
                      primaryText="Marcadas"
                      leftIcon={<ContentSend />}
                      disabled={false}
                      nestedItems={[
                        <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                      ]}
                    />,
                    <ListItem
                      key={3}
                      primaryText="Pendientes"
                      leftIcon={<ContentInbox />}
                      open={this.state.open}
                      onNestedListToggle={this.handleNestedListToggle}
                      nestedItems={[
                        <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                      ]}
                    />,
                  ]}
                />

                    <Divider />
                <ListItem 
                   primaryText="Clientes"           leftIcon={<ContentInbox />}
                   style={{backgroundColor:'grey', color:'lightgrey'}}
                    />


              </List>
               
               
            </Drawer>
            
          </div>
        );
    }
}

MainMenu.propTypes = {
    active: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default MainMenu;