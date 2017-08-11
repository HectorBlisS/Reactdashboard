import React, { Component } from 'react';
import './UserProfile.css';
import Nav from '../nav/Nav';
import FontAwesome from 'react-fontawesome';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Footer from '../footer/Footer';
import api from '../../Api/Django';
import toastr from 'toastr';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },


  slide: {
    padding: 10,
  },
};

class UserProfile extends Component {
     constructor(props) {
    super(props);
    this.state = {
      datos:{},
      slideIndex: 0,
        user:{profile:''}
    };
  }


    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('userToken'));
        if (!user){
            this.props.history.push('/login');
        } else {
            api.getProfile()
            .then(r=>{
                this.setState({user:r});
                console.log(r);
            })
            .catch(e=>toastr.error("algo falló"));
        }
    }

  updateClienteInfo=()=>{
    //update user info
    api.updateTipo(this.state.user.profile.id, this.state.datos).then(r=>{
      toastr.success('Gracias por completar')
    }).catch(e=>{
      toastr.error('naaa')
      console.log(e)
    })
    //match user client
    api.matchClient(this.state.datos).then(r=>{
      toastr.success('matched')
      console.log(r)
    }).catch(e=>{
      toastr.error('nel')
    })
  }
  updateAsesorInfo=()=>{
    //update user info
    api.updateTipo(this.state.user.profile.id, this.state.datos).then(r=>{
      toastr.success('Gracias por completar')
    }).catch(e=>{
      toastr.error('naaa')
      console.log(e)
    })
    //match user client
    // api.matchClient(this.state.datos).then(r=>{
    //   toastr.success('matched')
    //   console.log(r)
    // }).catch(e=>{
    //   toastr.error('nel')
    // })
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };


  //textfields data
  handleText = (event, index) => {
     let field = event.target.name
     let datos = this.state.datos;
     datos[field] = event.target.value
     this.setState({datos});
     console.log(this.state.datos)
   }

    render(){
        const {user} = this.state;
        return(
            <div className='back_perfil'>
          		<div className='barra'>
					     <Nav history={this.props.history} />
				      </div>
          		<div className='datos_user'>
          			<div className='photo_user'>
          				<img className='photo_user' src={user.profile.photo} alt='user'/>
          			</div>
          			<div className='data_user'>
          				<h4>{user.first_name}</h4>
          				<p>{user.email}</p>
          				<div>
          				     <FontAwesome name='car' className='minicon_service' size='2x'/>
          				     <FontAwesome name='car' className='minicon_service' size='2x'/>
          				     <FontAwesome name='car' className='minicon_service' size='2x'/>
          				</div>
          			</div>
          		</div>

          		<div className='tabs'>
          		 <Tabs
		          onChange={this.handleChange}
		          value={this.state.slideIndex}

		        >
		          <Tab label="Tips" value={0} style={{backgroundColor:'white', color:'#57658E', borderBottom:'solid 1px #57658E'}} />
		          <Tab
                label="Mis Productos"
                value={1}  style={{backgroundColor:'white', color:'#57658E', borderBottom:'solid 1px #57658E' }}/>
                <Tab
                  label="Asesor"
                  value={2}  style={{backgroundColor:'white', color:'#57658E', borderBottom:'solid 1px #57658E' }}/>
		        </Tabs>
		        <SwipeableViews
		          index={this.state.slideIndex}
		          onChangeIndex={this.handleChange}
		        >
		          <div>
                <div className='text_intro'>
                  <h4>CUALQUIER PERSONA PUEDE MEJORAR SU
                  SITUACIÓN FINANCIERA. APRENDE A ADMINISTRAR
                   TUS INGRESOS PARA QUE SIEMPRE TE ALCANCE
                   SIN IMPORTAR CUÁNTO GANAS.</h4>
                   <p>
                     Imagínate poder ahorrar para un imprevisto,
                      para los estudios de tus hijos o para hacer
                      se viaje con el que llevas tiempo soñando.
                      Llegar a fin de mes es más fácil de lo que
                      parece y vamos a demostrártelo. Únete a
                      nuestra comunidad y descubre los pasos
                      definitivos para ser financieramente libre.
                   </p>
                   <br />
                   <div className='box_informativa'>
                   </div>
                   <div>
                      <h4>DÉJAME DECIRTE QUE GANAR MÁS DINERO NO ES LA
                      SOLUCIÓN A TUS PROBLEMAS FINANCIEROS</h4>
                      <div className='flex'>
                        <div className='text_box'>
                        <p>
                          Sé mejor que nadie lo difícil que es verlo porque
                          yo también pasé por esa etapa.
                          <br />
                          Pensaba que si ganaba el doble, cubriría todos esos
                           gastos que me ahogaban a fin de mes y que por fin
                           empezaría a sobrarme algo de dinero. No te voy a
                           engañar, también hubo un tiempo en el que fantaseaba
                          con la idea de ganar la lotería y arreglar la
                          escasez en la que vivía sumergida.
                        </p>
                        </div>
                        <div className='img_box'>
                          <img src='https://www.blogylana.com/wp-content/uploads/2016/07/money.png' alt='tip'/>
                        </div>
                      </div>
                   </div>
                </div>
		            <div className='box_square'>
                  <div className='square'>
                      <div className='sq_img'>
                        <img src='https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='tip'/>
                      </div>
                      <div className='square_text'>
                        <h5>3 casos de deudas terroríficas</h5>
                        <p>Antes era “el que nada debe nada teme”, pero ahora se ha
                        convertido en “el que nada debe nada tiene”; y es que ahora
                        muchos creen que el crédito es una extensión de los ingresos
                        y lo pagan cada que se acuerdan… en el mejor de estos casos
                         de deudas terroríficas...</p>
                      </div>
                  </div>
                  <div className='square'>
                      <div className='sq_img'>
                        <img src='https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='tip'/>
                      </div>
                      <div className='square_text'>
                        <h5>3 casos de deudas terroríficas</h5>
                        <p>Antes era “el que nada debe nada teme”, pero ahora se ha
                        convertido en “el que nada debe nada tiene”; y es que ahora
                        muchos creen que el crédito es una extensión de los ingresos
                        y lo pagan cada que se acuerdan… en el mejor de estos casos
                         de deudas terroríficas...</p>
                      </div>
                  </div>
                  <div className='square'>
                      <div className='sq_img'>
                        <img src='https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='tip'/>
                      </div>
                      <div className='square_text'>
                        <h5>3 casos de deudas terroríficas</h5>
                        <p>Antes era “el que nada debe nada teme”, pero ahora se ha
                        convertido en “el que nada debe nada tiene”; y es que ahora
                        muchos creen que el crédito es una extensión de los ingresos
                        y lo pagan cada que se acuerdan… en el mejor de estos casos
                         de deudas terroríficas...</p>
                      </div>
                  </div>
                  <div className='square'>
                      <div className='sq_img'>
                        <img src='https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='tip'/>
                      </div>
                      <div className='square_text'>
                        <h5>3 casos de deudas terroríficas</h5>
                        <p>Antes era “el que nada debe nada teme”, pero ahora se ha
                        convertido en “el que nada debe nada tiene”; y es que ahora
                        muchos creen que el crédito es una extensión de los ingresos
                        y lo pagan cada que se acuerdan… en el mejor de estos casos
                         de deudas terroríficas...</p>
                      </div>
                  </div>

                </div>
		          </div>
		          <div style={styles.slide}>
		            {this.state.user.profile.clienteId?'':
                  <div>
                    <h3>Para recibir información de tus productos completa tus datos:</h3>
                  <div>
                    <TextField
                      onChange={this.handleText}
                      name="clienteId"
                      hintText="Número de Cliente"
                    /><br />

                  </div>
                     <FlatButton label="Enviar" primary={true} onTouchTap={this.updateClienteInfo}
                       />
                   </div>}
                <div className='tip'>
                     <Card>
                      <CardHeader

                        actAsExpander={true}
                        showExpandableButton={true}
                      />
                      <CardText>
                        <div className='flex_cien'>
                          <div className='box_tip'>
                            <FontAwesome name='car' className='icon_service' size='5x'/>
                          </div>
                          <div className='data_tip'>
                            <h3>Seguro de Auto </h3>

                            <p className='fechas'>Fecha de contratación: 6 de Septiembre</p>
                            <p className='fechas'>Cobertura: Amplia</p>

                          </div>
                          <div className='status'>
                          <h3>Status</h3>
                            <p className='fechas'>Activo</p>
                          </div>
                        </div>
                      </CardText>

                      <CardText expandable={true}>
                          <h3>Seguro de Vida </h3>
                          <p>
                            Un estudio realizado por MasterCard encontró
                            que tener un negocio propio es el sueño de al
                            menos 53 por ciento de los jóvenes entre 18 y
                            34 años en América Latina. Sin embargo,
                            la empresa de crédito reconoció que no basta
                            con desear ser dueño de una empresa y recopiló
                            cuatro consejos para las personas que deseen o
                            estén por iniciar un emprendimiento.
                          </p>

                      </CardText>
                    </Card>


                </div>
		          </div>
              {this.state.user.profile.asesorId?'':
                <div>
                  <h3>Eres Asesor?, Ingresa tu ID</h3>
                <div>
                    <TextField
                      onChange={this.handleText}
                      name="asesorId"
                      hintText="Número de Asesor"
                    /><br />

                </div>
                   <FlatButton label="Enviar" primary={true} onTouchTap={this.updateAsesorInfo}
                     />
                 </div>}
		        </SwipeableViews>
		        </div>

		        <div className='btn_float'>
		         	<FloatingActionButton style={{backgroundColor:'#'}} backgroundColor={'#57658E'} >
				        <FontAwesome name='download' />

				    </FloatingActionButton>
				</div>
				<Footer />
            </div>
        );
    }
}

export default UserProfile;
