import React, { Component } from 'react';
import './Salud.css'
import FontAwesome from 'react-fontawesome';
import Intro from '../../intro/Intro';
import {Link} from 'react-router-dom';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

class Salud extends Component{
	render (){
		return(
			<div className='productos'>
				<Nav />
				<Intro text="Gastos Médicos"/>
		
				<div className='box_product'>
					<div className='lef text_serv'>
						<h3 className='tittle_sv'>Gastos médicos</h3>
						
						<p className='text_sv'>Un seguro de gastos médicos te ayuda a tender los 
						requerimientos de gastos médicos, evitando en lo posible las repercusiones
						 por el echo de que tu o tu familia sufran algún tipo de accidente o 
						 padezcan alguna enfermedad.</p>
						<p className='tema_sv'>Requisitos</p>
						<p className='text_sv'>- Solicitus de Seguro</p>
						<p className='text_sv'>- Cubrir los requisitos</p>
						<p className='text_sv'>- Identificación</p>
						<p className='text_sv'>Contamos con el Seguro de Gastos Médicos Mayores, 
						en donde quedarán cubiertos todos los gastos médicos (quirúrgicos, de análisis,
						 de medicamentos, etc.) requeridos por el asegurado ante un accidente o una enfermedad,
						  incluidos los de la atención por maternidad en función de la suma asegurada contratada.</p>
						 <div >
						<Link to='/form'>
							<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>
						</div>
					</div>
					 <div className='img_serv'>
					  <img className='img_req' src='https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio'/>
					</div>
				</div>
			<Footer />
			</div>
		);
	}
}

export default Salud;