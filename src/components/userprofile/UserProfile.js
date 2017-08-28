import React, { Component } from 'react';
import './UserProfile.css';
import Nav from '../nav/Nav';
import FontAwesome from 'react-fontawesome';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Card,CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import Footer from '../footer/Footer';
import api from '../../Api/Django';
import toastr from 'toastr';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import {GridList, GridTile} from 'material-ui/GridList';
import 'moment/locale/es';
import moment from 'moment';


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
      open:false,
      cliente:false,
      datos:{},
      slideIndex: 0,
        user:{
          profile:'',
          usuario:''
        },
        mispolizas:[{
          apertura:'',
          cliente:'',
        }],
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

            api.getMisPolizas().then(r=>{
              this.setState({mispolizas:r})
              console.log(this.state.mispolizas)
            }).catch(e=>{
              toastr.error('no tienes')
            })
        }

    }



  updateClienteInfo=()=>{
    //update user info
    let cliente = this.state.datos
    cliente['tipo'] = 'cliente'
    api.updateTipo(this.state.user.profile.id, cliente).then(r=>{

    }).catch(e=>{
      toastr.error('naaa')
      console.log(e)
    })
    //match user client
    api.matchClient(this.state.datos).then(r=>{
      toastr.success('Tus polizas en seguida')
      console.log(r)
    }).catch(e=>{
      toastr.error('Ese no es tu Id de Cliente')
    })
    this.componentWillMount()
  }
  updateAsesorInfo=()=>{
    //update user info
    let asesor = this.state.datos
    asesor['tipo'] = 'asesor'
    api.updateTipo(this.state.user.profile.id, asesor).then(r=>{
      toastr.success('Gracias por completar, Espera tu aprobación')
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
  //for modal
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

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
              {this.state.user.profile.aprobado?
                <Tab
                  label="Portafolio"
                  value={2}  style={{backgroundColor:'white', color:'#57658E', borderBottom:'solid 1px #57658E' }}/>:''}
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
		            {this.state.user.profile.clienteId===this.state.user.usuario.idcliente?
                  '':
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
                   <div className='tip' style={this.state.user.profile.clienteId===this.state.user.usuario.idcliente?{display:'block'}:{display:'none'}}>
                       {this.state.mispolizas.map(poliza=>{
                         return(
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
                                <div>
                                  <GridList cols={4} cellHeight='auto'>
                                    <GridTile style={{padding:'1.5%'}} cols={2}>
                                      <TextField
                                        onChange={this.handleText}
                                        name="cliente"
                                        floatingLabelText="Cliente"
                                        value={poliza.cliente.pnombre+' '+poliza.cliente.amaterno}
                                        disabled={true}/>

                                    </GridTile>
                                    <GridTile style={{padding:'3%'}}>

                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="ID"
                                        value={poliza.idpoliza}
                                        name="idpoliza"
                                        disabled={true}/><br />
                                    </GridTile>
                                    <GridTile style={{padding:'3%'}}>

                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="CIS"
                                        name="cis"
                                        value={poliza.cis}
                                        disabled={true}/><br />
                                    </GridTile>
                                  </GridList>
                                  <GridList cols={3} cellHeight='auto'>
                                    <GridTile cols={1}>

                                    <TextField
                                      onChange={this.handleText}
                                      floatingLabelText="Domicilio"
                                      name="newaddress"
                                      disabled={true}
                                      value={poliza.addaddress?poliza.cliente.calle+' '+poliza.cliente.noext+' '+poliza.cliente.colonia:poliza.newaddress}
                                      multiLine={true}
                                      rows={2}

                                      /><br />
                                    </GridTile>
                                    <GridTile cols={1}>

                                       <TextField
                                         onChange={this.handleText}
                                         floatingLabelText="Fecha"
                                         name="apertura"
                                         value={moment(poliza.apertura).format('LL')}
                                         disabled={true}/>
                                    </GridTile>
                                    <GridTile cols={1}>
                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="Agrupación"
                                        name="agrupacion"
                                        value={poliza.agrupacion}
                                        disabled={true}/>
                                    </GridTile>
                                  </GridList>
                                  <GridList cols={4} cellHeight='auto'>
                                    <GridTile cols={1}>

                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="Tipo de Apago"
                                        name="pago"
                                        value={poliza.pago}
                                        disabled={true}/>

                                    </GridTile>
                                    <GridTile cols={1}>
                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="Prima"
                                        name="prima"
                                        value={poliza.prima}
                                        disabled={true}/>
                                    </GridTile>
                                    <GridTile cols={1}>
                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="Financiamiento"
                                        name="financiamiento"
                                        value={poliza.financiamiento}
                                        disabled={true}/>
                                    </GridTile>
                                    <GridTile cols={1}>
                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="Importe"
                                        name="importe"
                                        value={poliza.importe}
                                        disabled={true}/>
                                    </GridTile>
                                  </GridList>
                                  <GridList cols={4} cellHeight='auto'>
                                    <GridTile cols={1}>

                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="Empresa"
                                        name="empresa"
                                        value={poliza.empresa}
                                        disabled={true}/>

                                    </GridTile>
                                    <GridTile cols={1}>
                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="Sector"
                                        name="sector"
                                        value={poliza.sector}
                                        disabled={true}/>
                                    </GridTile>
                                    <GridTile cols={1}>
                                      <TextField
                                        onChange={this.handleText}
                                        floatingLabelText="Tipo de Seguro"
                                        name="next"
                                        value={poliza.next}
                                        disabled={true}/>
                                    </GridTile>
                                    <GridTile cols={1}>
                                      <TextField
                                        floatingLabelText="Tipo"
                                        onChange={this.handleText}

                                        name={poliza.next==='Daños'?'daños':'last'}
                                        value={poliza.next==='Daños'?poliza.daños:poliza.last}
                                        disabled={true}/>
                                    </GridTile>
                                  </GridList>
                                </div>

                            </CardText>
                          </Card>
                         )
                       })}
                   </div>
		          </div>
              <div>
                <div>
                  <div className='text_intro'>
                    <h4>OLVIDATE DE LOS EMPLEOS TRADICIONALES, DIPRA TE
                    OFRECE UN EMPLEO EN DONDE GANAS LO QUE TU DESEAS GANAR,
                     SIN HORARIOS FIJOS</h4>
                     <p>
                       Convviertete en el mejor asesor de tu zona, y obten el reconocimiento y los bonos que mereces.
                     </p>
                     <br />
                   <iframe width="660" height="415" src="https://www.youtube.com/embed/z9BPMjL44Aw" frameborder="0" allowfullscreen title="Video"></iframe>
                     <div>
                      <br />
                        <div className='flex'>
                          <div className='text_box'>
                          <p>
                           El Asesor Financiero es el profesional que ayuda a descubrir las necesidades financieras,
                           analizando circunstancias pasadas, presentes y futuras de su cliente, teniendo en cuenta
                            la edad, su patrimonio disponible, su tipo impositivo, su situación profesional y familiar,
                            y el resto de inversiones que pueda disponer. Una vez analizado su perfil de riesgo y sus
                            necesidades, el asesor llevará a cabo sus recomendaciones de inversión, asesorándole según
                            sus circunstancias y necesidades vayan cambiando y adaptándolas al momento actual.
                          </p>
                          </div>
                          <div className='image_box'>
                            <img  src='https://cdn1.iconfinder.com/data/icons/business-and-finance-20/200/vector_65_05-512.png' alt='tip'/>
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
              </div>
		        </SwipeableViews>
		        </div>

		        <div className='btn_float'>
		         	<FloatingActionButton style={{backgroundColor:'#'}} backgroundColor={'#57658E'} >
				        <FontAwesome name='download' />
				      </FloatingActionButton>
				    </div>
            {this.state.user.profile.aprobado?
              <div className='btn_float2'>
                <Link to="/polizas">
                  <FloatingActionButton
                    style={{backgroundColor:'#'}} backgroundColor={'#57658E'} >
                    <FontAwesome name='user' />
                  </FloatingActionButton>
                </Link>
              </div>:
              <div className='btn_float2'>
                <Dialog
                  title="¿Eres Asesor?"
                  contentStyle={{width:'35%'}}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                >
                <div>
                  <h3>Ingresa tu Id para darte mas Info</h3>

                    <TextField
                      onChange={this.handleText}
                      name="asesorId"
                      hintText="Número de Asesor"
                    /><br />
                  <FlatButton fullWidth={true} label="Enviar" primary={true} onTouchTap={this.updateAsesorInfo}/>
                </div>
                </Dialog>
  		         	<FloatingActionButton
                  onTouchTap={this.handleOpen}
                  style={{backgroundColor:'#'}} backgroundColor={'#57658E'} >
  				        <FontAwesome name='user' />
  				      </FloatingActionButton>
  				    </div>}
				<Footer />
            </div>
        );
    }
}

export default UserProfile;
