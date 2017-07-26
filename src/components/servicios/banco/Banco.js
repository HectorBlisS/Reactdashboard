import React, { Component } from 'react';
import './Banco.css'
import FontAwesome from 'react-fontawesome';
import Intro from '../../intro/Intro';
import {Link} from 'react-router-dom';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

class Banco extends Component{
	render (){
		return(
			<div className='productos'>
				<Nav />
				<Intro text="Banco"/>
		
				<div className='box_product'>
					<div className='lef text_serv'>
						<h3 className='tittle_sv'>Cuenta Bancaria</h3>
						
						
						<p className='text_sv'>Si buscas una respuesta clara a la pregunta: "¿Cuál es la mejor cuenta bancaria?"
						 Es recomendable que sepas que existen diferentes tipos de cuentas bancarias que 
						 comercializan los bancos entre las que podrás encontrar y solicitar cuentas 
						 de ahorro, Eje, Maestra entre otras.</p>
						<p className='subtittle_sv'>Beneficios</p>
						<p className='text_sv'>- Comodidad para gestionar cobros y pagos, domiciliaciones, etc.</p>
						<p className='text_sv'>- Disponibilidad total del saldo</p>
						<p className='text_sv'>- Accesibilidad por medio de cajeros automáticos</p>
						<p className='text_sv'>- Información detallada de gastos, ingresos y movimeintos</p>

						<p className='text_sv'>Puedes comparar requisitos, comisiones y beneficios de 
						las diferentes cuentas INBURSA de ahorro, Maestra, etc, que incluye tarjeta de débito y chequera. 
						Algunas incluyen seguro y otras ofrecen un rendimiento.</p>
						<div >
						<Link to='/form'>
							<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link>
						</div>
					</div>
					 <div className='img_serv'>
					  <img className='img_req' src='https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio'/>
					</div>
				</div>
				<div className='box_product'>
					<div className='img_servi'>
					  <img className='img_req' src='https://images.pexels.com/photos/516124/pexels-photo-516124.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'  alt='servicio'/>
					</div>
					<div className='lef text_servi'>
						<h3 className='tittle_sv'>Cuenta de Inversión</h3>
						
						
						<p className='text_sv'>Una cuenta de inversión te permite acceder a alternativas de inversión con características
						de rendimiento, riesgo y liquidez que difícilmente se alcanzan invirtiendo individualmente.</p>
						<p className='tema_sv'>- Beneficios</p>
						<p className='text_sv'>- Rendimientos</p>
						<p className='text_sv'>- Reducción de Riesgos</p>
						<p className='text_sv'>- Liquidez</p>
						<p className='text_sv'>- Administración Profesional</p>
							<p className='text_sv'>Ideal para clientes que buscan un ahorro a corto y mediano plazo.</p>

						
						<div >
						 <Link to='/form'>
							<p className='link_contacto'><FontAwesome name='plus-circle' className='plus' size='1.5x'/>CONTACTA TU ASESOR MÁS CERCANO</p>
						</Link >
						</div>
					</div>
					 
				</div>
				<Footer />
			</div>
		);
	}
}

export default Banco;