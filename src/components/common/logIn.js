import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './logIn.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import Close from 'material-ui/svg-icons/content/clear';


const style = {
  height: '100%',
  width: '60%',
  textAlign: 'center',
  display: 'inline-block',
  padding:'3% 3% 3% 3%',
  style2:{
    height: '100%',
    width: '60%',
    textAlign: 'center',
    display: 'inline-block',
    padding:'3% 3% 3% 3%',
  }
};
class LogIn extends Component{
  constructor(props) {
   super(props);
   this.state = {open: false};
 }
 handleToggle = () => this.setState({open: !this.state.open});
  render(){
    return(
      <div className="logInBack">
        <div className="logIn">
          <Paper zDepth={1} style={style}>
            <h1>Inicia Sesión</h1>
            <TextField
              type="email"
              hintText="micorrreo@miempresa.com"
              floatingLabelText="Correo"
              fullWidth={true}
            /><br />
            <TextField
              type="password"
              hintText="********"
              floatingLabelText="Contraseña"
              fullWidth={true}
            /><br /><br />
          <RaisedButton label="Entrar" fullWidth={true}
            backgroundColor='#607D8B'
            labelColor='#fff'/>
          <br/><br/>
          <a href="#" className="linkPass" 
            onClick={this.handleToggle}>¿Olvidaste la Contraseña?</a>

          </Paper>
        </div>
        <div className="recPass" style={this.state.open ? {display:'block'}:{display:'none'}}>

          <Paper zDepth={1} style={style.style2}>
            <div style={{position:'relative'}}>
            <h1>Recupera tu Contraseña</h1>
            <p>Mandaremos un link para que recuperes tu contraseña.</p>
            <TextField
              type="email"
              hintText="micorrreo@miempresa.com"
              floatingLabelText="Correo"
              fullWidth={true}
            /><br /><br />
          <RaisedButton label="Enviar" fullWidth={true}
            backgroundColor='#607D8B'
            labelColor='#fff'/>
          <br/>

            <Close  onClick={this.handleToggle}
                style={{position:'absolute',top:-20,right:-20}}/>
          </div>
          </Paper>
        </div>
      </div>
    );
  }
}
export default LogIn;
