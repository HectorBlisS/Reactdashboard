import React, { Component } from 'react';
import './Creditos.css'
import FontAwesome from 'react-fontawesome';
import Intro from '../../intro/Intro';
import {Link} from 'react-router-dom';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

class Creditos extends Component{
	render (){
		return(
			<div className='productos'>
				<Nav />
				<Intro text="Crédito"/>
		
				<div className='box_product'>
					<div className='lef text_serv'>
						<h3 className='tittle_sv'>Crédito</h3>
						
						<p className='text_sv'>Si necesitas liquidez para utilizarlo en tus vacaciones, para la compra
						 de un vehículo, para la remodelación de tu vivienda, para saldar alguna deuda o algún otro acontecimiento 
						 imprevisto, no lo dudes mas y recurre a un Crédito Personal, el cual te brinda una solución para todas
						  estas situaciones.  </p>
					
						<p className='tema_sv'>Créditos</p>
						<p className='text_sv'>- Inburcasa</p>
						<p className='text_sv'>- Autoexpress</p>
						<p className='text_sv'>- Crédito de Nómina</p>
						<p className='text_sv'>- Crédito Corporativo</p>
						<p className='text_sv'>- Crédito ExpresPYME</p>
						<p className='text_sv'>- Crédito TELMEX</p>
						<p className='text_sv'>- InburPyme</p>
						<p className='text_sv'>- CT Express y más</p>
						<div >
						<Link to='/form'>
							<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>						
						</div>
					</div>
					 <div className='img_serv'>
					  <img className='img_req' src='https://images.pexels.com/photos/164516/pexels-photo-164516.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio' />
					</div>
				</div>
				<div className='box_product'>
					<div className='img_servi'>
					  <img className='img_req' src='https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio'/>
					</div>
					<div className='lef text_servi'>
						<h3 className='tittle_sv'>Tarjeta de Crédito</h3>
						
						<p className='text_sv'>Agiliza tus pagos, compras y movimientos por medio de una tarjeta de crédito. 
						Utiliza este medio de pago sin la necesidad de traer dinero en efectivo.</p>
						<p className='tema_sv'>Beneficios</p>
						<p className='text_sv'>- Crea un buen historial crediticio</p>
						<p className='text_sv'>- No más efectivo</p>
						<p className='text_sv'>- Mejor control de gastos</p>
						<p className='text_sv'>- Banca por Internet</p>
						<p className='text_sv'>- Puntos y recompensas</p>
						<p className='text_sv'>Conoce los beneficios únicos de tarjetas de crédito Inbursa, desde costos de apertura, promociones y exclusivos.</p>
						
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

export default Creditos;