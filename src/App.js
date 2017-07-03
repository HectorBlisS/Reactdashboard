import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import RaisedButton from 'material-ui/RaisedButton';
import MainMenu from './components/mainMenu/MainMenu';
import Routes from './routes';
import NavBar from './components/navigation/NavBar';


class App extends Component {
    constructor(){
        super();
        
        this.state = {
            activeMenu: true
        }
        
    }
    
    handleToggle = () => {
        this.setState({
            activeMenu: !this.state.activeMenu
        });
    }
    
  render() {
    return (
      <div className="App">
       
            <Routes />
   
              
      </div>
    );
  }
}

export default App;
