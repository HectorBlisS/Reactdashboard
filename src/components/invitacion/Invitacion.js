import React, { Component } from 'react';
import './Invitacion.css'
import Nav from '../nav/Nav';
import Android from '../../assets/Android.png';
import IOS from '../../assets/Store.png';

class Invitacion extends Component{
	render (){
		return(
			<div >
				<div className='descarga'>
					<div className='cover'>
					<Nav />
					
					<div className='text_app'>
						<h2>Descarga la app Móvil</h2>
						<span>DIPRA + Plan B</span>
						<p>Te ofrece la app móvil que te ayudará a mejorar tu vida financiera, además de ofrecerte información sobre los servicios adquiridos, fechas de renovación y números de emergencia</p>
						<div className='tiendas'>
							<img className='store' src={Android}/>
							<img className='store' src={IOS}/>
						</div>
					</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Invitacion;