import React, { Component } from 'react';
import './Extras.css'
import FontAwesome from 'react-fontawesome';
import Intro from '../../intro/Intro';
import {Link} from 'react-router-dom';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

class Extras extends Component{
	render (){
		return(
			<div className='productos'>
				<Nav />
				<Intro text="Extras"/>
		
				<div className='box_product'>
					<div className='lef text_serv'>
						<h3 className='tittle_sv'>Terminal Punto de Venta</h3>
						<p className='text_sv'>Es un dispositivo que te permite realizar
						 cobros por medio de tarjetas bancarias de crédito y/o débito marca Visa,
						  MasterCard y Carnet.</p>
						
						  <p className='text_sv'>
						Óptimo para Personas Morales o Personas Físicas con Actividad Empresarial,
						 entre las que se encuentran: gasolineras, escuelas, spas, médicos, dentistas, 
						 renta de autos, laboratorios médicos, restaurantes, bares, gaseras, mini súper, 
						 notarías, funerarias, cines, boutiques de ropa, farmacias, etc.</p>
						<p className='tema_sv'>Beneficios</p>
						<p className='text_sv'>- Sin facturación mínima requerida</p>
						<p className='text_sv'>- No se requiere fianza.</p>
						<p className='text_sv'>- Depósito de las ventas al siguiente día hábil.</p>
						
						<p className='text_sv'>- Acceso al portal Punto Electrónico</p>
						<p className='text_sv'>- Posibilidad de afiliarse al programa Meses sin Intereses*</p>
						<p className='text_sv'>- Publicidad para su comercio sin costo en la página de Inbursa.</p>

						







						<div >
						<Link to='/form'>
							<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>
						</div>
					</div>
					 <div className='img_serv'>
					  <img className='img_req' src='https://images.pexels.com/photos/508056/pexels-photo-508056.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio'/>
					</div>
				</div>
				<div className='box_product'>
					<div className='img_servi'>
					  <img className='img_req' src='https://images.pexels.com/photos/260367/pexels-photo-260367.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio'/>
					</div>
					<div className='lef text_servi'>
						<h3 className='tittle_sv'>Daños</h3>
						
						<p className='text_sv'>  La industria de seguros en México ofrece coberturas para el riesgo
						 de terremotos, a través del seguro de daños. La contratación del
						 mismo contempla la protección del hogar, y puede amparar tanto 
						 la infraestructura como lo que hay dentro. </p>
						 <p className='text_sv'>La cobertura para edificio, que se refiere a la estructura física
						de la vivienda, incluye techos, ventanas, instalaciones fijas
						sobre el nivel del suelo, servicios de agua, aire acondicionado,
						 drenaje y energía eléctrica. </p> 
						<p className='text_sv'>En cuanto al interior del inmueble, lo cubierto son los bienes
						 muebles como electrodomésticos, comedores, salas, recámaras,
						  cocinas, utensilios, baños, ropa, joyas, objetos de arte, 
						  equipos deportivo y juguetes. 
						</p> 
						<p className='text_sv'>A manera de complemento, es posible incluir en el contrato de 
						este seguro los denominados "gastos extraordinarios", que serían 
						resultado del daño a la propiedad asegurada, tales como la 
						mudanza y/o la renta de una vivienda durante la etapa de reconstrucción. </p> 

						<div >
						<Link to='/form'>
							<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>
						</div>
					</div>
					 
				</div>
				<Footer />
		
			</div>
		);
	}
}

export default Extras;