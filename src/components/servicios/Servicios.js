import React, { Component } from 'react';
import './Servicios.css';
import {Link} from 'react-router-dom';

class Servicios extends Component{
	render (){
		return(
			<div className='back_servicios'>
				<h2>Nuestros Servicios </h2>
				<div className='servicios'>
					<div className='servicio flip'>
						<div className='front afore'>
							<span className='etiqueta'>AFORE</span>
							<img src='https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?h=350&auto=compress&cs=tinysrgb' alt='servicio'/>
						</div>
					
						<div className='reverse'>
							<p>La Afore te brinda el servicio de resguardar
							 de manera segura y transparente tus recursos y de hacerlos crecer
							  mediante inversiones.
							  </p>
							 <Link to='/afore'>
								<button> Ver más...</button>
							</Link>
						</div>
					</div>
					<div className='servicio flip'>
						<div className='bancos front'>
							<span className='etiqueta'>Banco</span>
							<img src='https://images.pexels.com/photos/34577/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb' alt='servicio'/>
						</div>
						<div className='reverse'>
							<p>Conozca en profundidad la oferta de las entidades
							 de crédito, requisitos y beneficios, y utilice cada producto según sus necesidades.
							 </p>
							 <Link to='/banco'>
							 	<button> Ver más...</button>
							 </Link>
						</div>
					</div>
					<div className='servicio flip'>
						<div className='front'>
						<span className='etiqueta'>Crédito</span>
							<img src='https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='servicio'/>
						</div>
						<div className='reverse'>
							<p>Obtén de forma rápida y sencilla un Crédito Personal
							 sin ir a la sucursal, disfruta de tasas preferenciales 
							 y ahorra intereses con prepagos a tu crédito. </p>
						 <Link to='/credito'>
						 <button> Ver más...</button>
						 </Link>
						 </div>


					</div>
					<div className='servicio flip'>
						<div className='  front'>
							<span className='etiqueta'>Seguros</span>
							<img src='https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='servicio'/>
						</div>
						<div className='reverse'>
							<p>Es un medio para la cobertura de los riesgos al
							 transferirlos a una aseguradora que se va a encargar de 
							 indemnizar el perjuicio producido. </p>
							<Link to='/seguros'>
								<button> Ver más...</button>
							</Link>
						</div>
					</div>
					<div className='servicio flip'>
						<div className='  front'>
						<span className='etiqueta'>Gastos Médicos</span>
							<img src='https://images.pexels.com/photos/167300/pexels-photo-167300.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='servicio'/>
						</div>
						<div className='reverse'>
							<p>Seguro que da respaldo económico para la
							 atención médica de un accidente o enfermedad,evitando
							  en lo posible repercusiones económicas. </p>
							 <Link to='/gastos'>
							 	<button> Ver más...</button>
							 </Link>
						</div>
					</div>
					<div className='servicio flip'>
						<div className='  front'>
						<span className='etiqueta'>Especiales</span>
							<img src='https://images.pexels.com/photos/70573/fireman-firefighter-rubble-9-11-70573.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='servicio'/>
						</div>
						<div className='reverse'>
							<p>Adquiere un seguro que cubrá tus espectativas y necesidades, sin pagar lo que no necesitas. O revisa el resto de nuestros servicios. </p>
								 
							<Link to='/extras'>
								<button className='ver'> Ver más...</button>
							</Link>
						</div>
					</div>
				</div>
		
			</div>
		);
	}
}

export default Servicios;

