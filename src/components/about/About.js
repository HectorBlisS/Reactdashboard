import React, { Component } from 'react';
import './About.css';
import Logo_dipra from '../../assets/logo.png';
import FontIcon from 'material-ui/FontIcon';
import FontAwesome from 'react-fontawesome';

class About extends Component{
	render (){
		return(

			<div className='back_about'>
				<div className='box_about'>
					<div className='logo'>
						<img className='img_logo' src={Logo_dipra} />
					</div>
					<div className='nosotros'>
						<p>Somos AFORE una empresa con más de 20 años 
						de experiencia en el sector financiero en México,
						 experta en brindar asesoría financiera de forma
						 profesional a personas físicas y morales, 
						 dedicada principalmente al reclutamiento, 
						 capacitación y desarrollo de Asesores 
						 financieros para nuestro principal cliente, Grupo Financiero Inbursa.</p>
					</div>
				</div>
				<div className='space'>
					<h2>Nuestra Experiencia</h2>

	                <div className='contenedor'>
	                    <div className='content'>
	                        <div className='circle_process'>
	                            <FontAwesome name='briefcase' className='icon_about' size='2x'/>
                           
	                        </div> 
	                        <div className='paso'>
	                            <h3>AFORE</h3>
	                            <hr />
	                            <p>
	                               Te ayudamos en todo el proceso de AFORE,
	                               brindándote asesoría para proteger
	                                tu retiro y planificar la mejor 
	                                estrategia para potenciar tu AFORE.
	                            </p>
	                        </div>
	                    </div> 
	                    <div className='content'> 
	                         <div className='circle_process'>
	                             <FontAwesome name='line-chart' className='icon_about' size='2x'/>
	                        </div> 
	                         <div className='paso'>
	                            <h3>BANCO</h3>
	                            <hr />
	                            <p>
	                               ¿Cuál es el mejor vehículo de inversión para tu crecimiento 
	                               o el de tu empresa? Generamos para ti la mejor estrategia en el 
	                               mercado para adquirir los mejores beneficios.
	                            </p>
	                        </div>
	                    </div> 
	                     <div className='content'>               
	                         <div className='circle_process'>
	                             <FontAwesome name='gavel' className='icon_about' size='2x'/>
	                        </div> 
	                        <div className='paso'>
	                            <h3>FIANZAS</h3>
	                            <hr />
	                            <p>
	                               Fianza de Fidelidad, Fianza Judicial,
	                                Fianza de Crédito, Fianza Administrativa. 
									Nosotros entregamos el valor que tu requieras.
	                            </p>
	                        </div>
	                    </div>
	                     <div className='content'>   
	                         <div className='circle_process'>
	                             <FontAwesome name='car' className='icon_about' size='2x'/>
	                        </div> 
	                        <div className='paso'>
	                            <h3>SEGUROS</h3>
	                            <hr />
	                            <p>
	                               Te asesoramos para protegerte a ti y 
	                               a tus bienes contando con amplias coberturas 
	                               que te brindan tranquilidad cuando más lo necesites.
	                            </p>
	                        </div>
	                    </div>
	               </div>
	               </div>      
                 
			</div>

		);
	}
}

export default About;