import React, { Component } from 'react';
import './AsesorProfile.css';
import Nav from '../nav/Nav';
import FontAwesome from 'react-fontawesome';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Footer from '../footer/Footer';
import api from '../../Api/Django';
import toastr from 'toastr';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';



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

class AsesorProfile extends Component {
     constructor(props) {
    super(props);
    this.state = {
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

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

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
		          <Tab label="Portafolio" value={0} style={{backgroundColor:'white', color:'#57658E', borderBottom:'solid 1px #57658E'}} />
		          <Tab label="Preguntas Frecuentes" value={1}  style={{backgroundColor:'white', color:'#57658E', borderBottom:'solid 1px #57658E' }}/>
		        </Tabs>
		        <SwipeableViews
		          index={this.state.slideIndex}
		          onChangeIndex={this.handleChange}
		        >
		          <div>
                <div className='text_intro'>
                  <h4>OLVIDATE DE LOS EMPLEOS TRADICIONALES, DIPRA TE
                  OFRECE UN EMPLEO EN DONDE GANAS LO QUE TU DESEAS GANAR,
                   SIN HORARIOS FIJOS</h4>
                   <p>
                     Convviertete en el mejor asesor de tu zona, y obten el reconocimiento y los bonos que mereces.
                   </p>
                   <br />
                 <iframe width="660" height="415" src="https://www.youtube.com/embed/z9BPMjL44Aw" frameborder="0" allowfullscreen></iframe>
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



		          <div style={styles.slide}>



                    <div className='tip'>

                     <Card>
                      <CardHeader
                        title="Que necesito para ser un asesor?"
                        className='left'
                        actAsExpander={true}
                        showExpandableButton={true}
                      />


                      <CardText expandable={true} className='left'>

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
		        </SwipeableViews>
		        </div>

		        <div className='btns_float'>
		         	<FloatingActionButton className='btn_icon' style={{backgroundColor:'#'}} backgroundColor={'#57658E'} >
				        <FontAwesome name='plus' />

				    </FloatingActionButton>
            <br />
            <FloatingActionButton className='btn_icon' style={{backgroundColor:'#'}} backgroundColor={'#57658E'} >
                <FontAwesome name='download' />

            </FloatingActionButton>
				</div>
				<Footer />
            </div>
        );
    }
}

export default AsesorProfile;
