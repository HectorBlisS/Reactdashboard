import React, { Component } from 'react';
import './Afore.css'
import FontAwesome from 'react-fontawesome';
import Intro from '../../intro/Intro';
import {Link} from 'react-router-dom';
import Nav from '../../nav/Nav';

class Afore extends Component{
	render (){
		return(
			<div className='productos'>
				<Nav />
				<Intro />

				<div className='box_product'>
					<div className='lef text_serv'>
						<h3 className='tittle_sv'>AFORE</h3>
						<p className='text_sv'>Recuerda que la mejor AFORE sera aquella
						 que tenga los mejores rendimientos historicos, aquella que
						  tenga la comision mas coherente de acuerdo a sus rendimientos
						   y aquella con el mejor servicio al cliente. No hay mayor 
						   ciencia, es importante que revises estos puntos para que
						    puedas elegir la mejor.</p>
						<p className='tema_sv'>Que AFORE me conviene mas de acuerdo a mi edad?</p>
						<p className='text_sv'>Recuerda que existen 5 SIEFORES y tu seras
						 asignado a la que te corresponde de acuerdo a tu edad, para saber
						  cual AFORE te conviene lo que tienes que hacer es tomar 
						  la informacion de la SIEFORE que te corresponde y hacer el 
						  comparativo entre AFORES unicamente en la SIEFORE que te 
						  encuentras, una vez que domines esto podras comparar todas
						   las SIEFORES e ir creando tu estrategia conforme vayas
						    aumentando de edad y por lo tanto vayas cambiando de SIEFORE.</p>
						 <div >
						 <Link to='/form'>
						<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>
						</div>
					</div>
					 <div className='img_serv'>
					  <img className='img_req' src='https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio'/>
					</div>
				</div>
			</div>
		);
	}
}

export default Afore;