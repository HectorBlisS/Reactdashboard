import React, { Component } from 'react';
import './Salud.css'
import FontAwesome from 'react-fontawesome';
import Intro from '../intro/Intro';
import {Link} from 'react-router-dom';
import Nav from '../nav/Nav';

class Salud extends Component{
	render (){
		return(
			<div className='productos'>
				<Nav />
				<Intro />
		
				<div className='box_product'>
					<div className='lef text_serv'>
						<h3 className='tittle_sv'>Seguro de auto</h3>
						<p className='subtittle_sv'>Coberturas</p>
						<p className='tema_sv'>Daños Materiales</p>
						<p className='text_sv'>Cuidamos tu patrimonio y cubrimos los daños
						 ocasionados a tu auto por accidente o fenómenos
						  naturales.</p>
						<p className='tema_sv'>Daños Materiales</p>
						<p className='text_sv'>Cuidamos tu patrimonio y cubrimos los daños
						 ocasionados a tu auto por accidente o fenómenos
						  naturales.</p>
						<p className='tema_sv'>Daños Materiales</p>
						<p className='text_sv'>Cuidamos tu patrimonio y cubrimos los daños
						 ocasionados a tu auto por accidente o fenómenos
						  naturales.</p>
						 <div >
						<Link to='/form'>
							<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>
						</div>
					</div>
					 <div className='img_serv'>
					  <img className='img_req' src='https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' />
					</div>
				</div>
				<div className='box_product'>
					<div className='img_servi'>
					  <img className='img_req' src='https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' />
					</div>
					<div className='lef text_servi'>
						<h3 className='tittle_sv'>Seguro de auto</h3>
						<p className='subtittle_sv'>Coberturas</p>
						<p className='tema_sv'>Daños Materiales</p>
						<p className='text_sv'>Cuidamos tu patrimonio y cubrimos los daños
						 ocasionados a tu auto por accidente o fenómenos
						  naturales.</p>
						<p className='tema_sv'>Daños Materiales</p>
						<p className='text_sv'>Cuidamos tu patrimonio y cubrimos los daños
						 ocasionados a tu auto por accidente o fenómenos
						  naturales.</p>
						<p className='tema_sv'>Daños Materiales</p>
						<p className='text_sv'>Cuidamos tu patrimonio y cubrimos los daños
						 ocasionados a tu auto por accidente o fenómenos
						  naturales.</p>
						 <div >
						 <Link to='/form'>
						<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>
						</div>
					</div>
					 
				</div>
			</div>
		);
	}
}

export default Salud;