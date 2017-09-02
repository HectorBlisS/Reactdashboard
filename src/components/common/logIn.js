import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './logIn.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {FontIcon, Avatar} from 'material-ui';
import Drawer from 'material-ui/Drawer';
import Close from 'material-ui/svg-icons/content/clear';
import api from '../../Api/Django';
import toastr from 'toastr';
import firebase from '../../Api/firebase';


const style = {
  height: '100%',
  width: '60%',
  textAlign: 'center',
  display: 'inline-block',
  padding:'3% 3% 3% 3%',
  style2:{
//    height: '120%',
    width: '60%',
    textAlign: 'center',
    display: 'inline-block',
    padding:'3% 3% 3% 3%',
  }
};
class LogIn extends Component{
  constructor(props) {
   super(props);
   this.state = {
       open: false,
       register:false,
       auth: {},
       nuevo:{username:null,email:'',pass1:'',pass2:'', photo:'https://cdn2.iconfinder.com/data/icons/electronics/512/Professional_Camera-512.png'},
       passwordError:null,
       id:null
   };
 }
    
    componentWillMount(){
        if(localStorage.getItem('userToken')){
            this.props.history.push("/perfil")
        }
    }
    
 handleToggle = () => this.setState({open: !this.state.open});
    
checkPasswords = (e) => {
    const field = e.target.name;
    let nuevo = this.state.nuevo;
    nuevo[field] = e.target.value;
    this.setState({nuevo});
    if(this.state.nuevo.pass1 !== this.state.nuevo.pass2){
        this.setState({passwordError:"Las contraseñas no coinciden"});
    } else{
        this.setState({passwordError:null});
    }
};

    onChange = (e) => {
        const field = e.target.name;
        let auth = this.state.auth;
        auth[field] = e.target.value;
        this.setState({auth});
    }
    
    importFirebase = (prov) => {
        if (prov === "google"){

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result)=>{
//          var token = result.credential.accessToken;
          var user = result.user;
            let nuevo = this.state.nuevo;
            nuevo.email = user.email;
            nuevo.username = user.displayName;
            nuevo.photo = user.photoURL;
            this.setState({nuevo});
        })
            .catch((error)=>{

        });
            
        }
    };
    
    createAccount = (e) => {
        e.preventDefault();
        if (this.state.passwordError){
            return false;
        }
        console.log(this.state.nuevo);
        let nuevo = this.state.nuevo;
        if(this.state.nuevo.username){
            nuevo['first_name'] = this.state.nuevo.username;
        }
        nuevo['username'] = this.state.nuevo.email;
        nuevo['password'] = this.state.nuevo.pass2;
        nuevo['profile'] = {photo:this.state.nuevo.photo};
        api.createUser(nuevo)
        .then(r=>{
            this.setState({register:false});
            toastr.success("Cuenta creada con éxito.");
            localStorage.setItem('userInfo', JSON.stringify(r));
            console.log(r);
            this.setState({id:r.id})
            // Pedimos el token
            api.tokenLogin(nuevo)
            .then(r=>{
                localStorage.setItem('userToken', JSON.stringify(r.token));
                console.log(this.state.id);
                api.updateProfile( {photo:this.state.nuevo.photo})
                .then(r=>{
                    toastr.success("Perfil actualizado");
                    this.props.history.push('/perfil');
                })
                .catch(e=>{
                    console.log(e);
                    toastr.error("error");
                });
                
            })
            .catch();
//            api.updateUser(r.id, {profile:{photo:this.state.nuevo.photo}})
        })
        .catch(e=>{
            toastr.error("No se pudo crear.");
//            console.log(e.response);
            for (const k in e.response.data){
                toastr.error(e.response.data[k]);
            }
        });
    };

    login = () => {
        console.log(this.state.auth);
        api.tokenLogin(this.state.auth)
        .then(r=>{
            console.log(r);
            localStorage.setItem('userToken', JSON.stringify(r.token));
            toastr.success("Sesión Iniciada");
            this.props.history.push('/perfil');
        })
        .catch(e=>{
            console.log(e.response);
            console.log(typeof e.data)
            if (e.data !== undefined ){
                toastr.error(e.data.non_field_errors);
            } else {
                toastr.error("No se pudo iniciar sesión, intenta de nuevo")
            }
        })
    };

  render(){
    return(
      <div className="logInBack">
        <div className="logIn">
          <Paper zDepth={1} style={style}>
            <h1>Inicia Sesión</h1>
            <TextField
             name="username"
              type="email"
              hintText="micorrreo@miempresa.com"
              floatingLabelText="Correo"
              fullWidth={true}
              onChange={this.onChange}
            /><br />
            <TextField
             name="password"
              type="password"
              hintText="********"
              floatingLabelText="Contraseña"
              fullWidth={true}
              onChange={this.onChange}
            /><br /><br />
          <RaisedButton 
            label="Entrar" 
            fullWidth={true}
            backgroundColor='#607D8B'
            labelColor='#fff'
            onTouchTap={this.login}
            />
          <br/><br/>
          <a href="#" className="linkPass" 
            onClick={this.handleToggle}>¿Olvidaste la Contraseña?</a>
            <br/>
            <a href="#" className="linkPass" 
            onClick={()=>this.setState({register:true})}>¿No tienes cuenta?</a>

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
                style={{cursor:'pointer',position:'absolute',top:-20,right:-20}}/>
          </div>
          </Paper>
        </div>
        
        
         <div className="recPass" style={this.state.register ? {display:'block'}:{display:'none'}}>

          <Paper zDepth={1} style={style.style2}>
            <div style={{position:'relative'}}>
            <h1>Crea Tu cuenta</h1>
            <p>Puedes importar tu información desde redes sociales.</p>
<form onSubmit={this.createAccount}>
    <Avatar src={this.state.nuevo.photo}/>  
    <h3>{this.state.nuevo.username}</h3>
           
            <TextField
            name="email"
             required
              type="email"
              hintText="micorrreo@miempresa.com"
              floatingLabelText="Correo"
              fullWidth={true}
              onChange={this.checkPasswords}
              value={this.state.nuevo.email}
            />
            <TextField
            required
             name="pass1"
              type="password"
              hintText="Escribe una contraseña"
              floatingLabelText="Contraseña"
              fullWidth={true}
              onChange={this.checkPasswords}
              
            />
            <TextField
            required
             name="pass2"
              type="password"
              hintText="Repite tu contraseña"
              floatingLabelText="Confirmar contraseña"
              fullWidth={true}
              errorText={this.state.passwordError}
              onChange={this.checkPasswords}
            />
            
            <br /><br />
          <RaisedButton 
          type="submit"
           label="Crear cuenta" 
           fullWidth={true}
            backgroundColor='#607D8B'
            labelColor='#fff'
            />
</form>
          <br/>
             <RaisedButton
              disabled={true}
               id="facebook"
                onTouchTap={()=>this.importFirebase("facebook")}
              label="Importar desde Facebook"
              primary={true}
              style={styles.button}
              icon={<FontIcon className="fa fa-facebook-square" />}
            />
            <RaisedButton
                name="google"
                 onTouchTap={()=>this.importFirebase("google")}
              label="Importar desde Google"
              secondary={true}
              style={styles.button}
              icon={<FontIcon className="fa fa-google" />}
            />
            <br/>

            <Close  onClick={()=>this.setState({register:false})}
                style={{cursor:'pointer',position:'absolute',top:-20,right:-20}}/>
          </div>
          </Paper>
        </div>
        
      </div>
    );
  }
}


const styles = {
  button: {
    marginTop: 10,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
export default LogIn;
