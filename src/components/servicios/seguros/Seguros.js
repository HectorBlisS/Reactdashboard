import React, { Component } from 'react';
import './Seguros.css'
import FontAwesome from 'react-fontawesome';
import Intro from '../../intro/Intro';
import {Link} from 'react-router-dom';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

class Seguros extends Component{
	render (){
		return(
			<div className='productos'>
				<Nav />
				<Intro text="Seguros"/>
		
				<div className='box_product'>
					<div className='lef text_serv'>
						<h3 className='tittle_sv'>Seguro de Vida, Ahorro y Retiro</h3>
						
						<p className='tema_sv'>Vida</p>
						<p className='text_sv'>Planes de protección que protegen a tu familia en caso de ausencia. Un seguro de vida
						a tu medida puede brindarte seguridad financiera y una vida más tranquila. </p>
						<p className='tema_sv'>Planes de Ahorro</p>
						<p className='text_sv'>Logra tus objetivos a largo plazo con un plan de ahorro adeduado y asegura 
						el estilo de vida que deseas. Te proporcionamos soluciones de inversión en corto, mediano y largo plazo, 
						siempre de forma transparente en el manejo de tus fondos y buscando rendimientos competitivos con el menor
						riesgo. </p>
						<p className='tema_sv'>Retiro</p>
						<p className='text_sv'>Un seguro de retiro  te ofrece protección y ahorro al momento de retirarte. 
						Te permite disfrutar de un capital con protección que puede servirte para la administración de tu retiro
						 y cubrir tus necesidades, manteniendo el nivel de vida adecuado.</p>
						 <div>
							<Link to='/form'>
								<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
							</Link>
						</div>
					</div>
					 <div className='img_serv'>
					  <img className='img_req' src='https://images.pexels.com/photos/236164/pexels-photo-236164.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='servicio'/>
					</div>
				</div>
				<div className='box_product'>
					<div className='img_servi'>
					  <img className='img_req' src='https://images.pexels.com/photos/2224/road-people-street-smartphone.jpg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio' />
					</div>
					<div className='lef text_servi'>
						<h3 className='tittle_sv'>Seguro de auto</h3>
						<p className='text_sv'>Te ofrecemos la protección, el respaldo y la seriedad que tú, tu familia y tu patrimonio necesitan</p>
					
						<p className='tema_sv'>Daños Materiales</p>
						<p className='text_sv'>Cuidamos tu patrimonio y cubrimos los daños
						 ocasionados a tu auto por accidente o fenómenos
						  naturales.</p>
						<p className='tema_sv'>Responsabilidad Civil</p>
						<p className='text_sv'>Estarás siempre protegido, ya que pagamos los daños que causes con tu vehículo a terceras personas y sus bienes.</p>
						 <p className='tema_sv'>Gastos Médicos</p>
						<p className='text_sv'>Tu salud es lo más importante, y por eso cubrimos los gastos de tu hospitalización si sufres un accidente automovilístico.</p>
						 <div >
						<Link to='/form'>
							<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>
						</div>
					</div>
					 
				</div>
				<div className='box_product'>
					<div className='lef text_serv'>
					<br />

						<h3 className='tittle_sv'>Seguro Educativo</h3>
						<p className='text_sv'>Como garantizar la educación de tus hijos es importante para ti, contamos con seguros educativos que brindan protecicón y ahorro para la universidad de tus hijos. Permitiéndote:</p>
						<p className='text_sv'>- Acumular el dinero necesario para pagar la educación superior de tus hijos cuando llegue el momento.</p>
						
						<p className='text_sv'>- Aseguran la educación de tus hijos aun si llegas a fallecer prematuramente.</p>
						
						<p className='text_sv'>- Educación garantizada para tus hijos aun si ya no puedes seguir aportando</p>
						<p className='text_sv'>Con esta herramienta financiera se puede asegurar la educación futura de tus hijos, por lo que es importante incluirla en tu plan financiero familiar desde ahora, para que exista tiempo suficiente para acumular el ahorro necesario y los precios sean más bajos. </p>
						<p className='text_sv'>Es recomendable contratar este producto en dólares o en Unidades de Inversión (UDIS), a fin de que los recursos monetarios no pierdan valor en el tiempo, además de adquirirlo con antelación, pues entre más crezcan los hijos, se tendrán menos años para ahorrar y, por lo tanto, las mensualidades se incrementarán.</p>

						 <div >
						 <Link to='/form'>
							<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>
						</div>
					</div>
					 <div className='img_serv'>
					  <img className='img_req' src='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio'/>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Seguros;