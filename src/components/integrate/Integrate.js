import React, { Component } from 'react';
import './Integrate.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

class Integrate extends Component{
	render (){
		return(
			<div className=''>
				<div className='barra'>
					<Nav history={this.props.history} />
				</div>
				<h2>INTEGRATE COMO ASESOR FINANCIERO</h2>
				<div className='flex'>
					<div className='text_asesor'>
						<p>Los asesores financieros pueden ser personas 
						"Físicas con actividad empresarial" o "Personas
						 Morales" que firman contrato con alguna de las 
						 Unidades de Negocio de Grupo Financiero Inbursa 
						 (SEGUROS, BANCO,AFORE, CASA DE BOLSA) para
						 comercializar sus productos y servicios.</p>
						<p>Dentro de sus principales funciones son las siguientes:
							Prospección de Clientes.
							<br />
							Identificación de necesidades financieras.
							<br />
							Colocación de productos de Grupo Financiero Inbursa.
							<br/>
							Asesoría y Servicio Post-venta.
						</p>
						<h3>¿Por qué trabajar como Asesor Financiero?</h3>
						<p>Porque te ofrecemos:
							Contratación directa con Grupo Financiero Inbursa.
							Capacitación Técnica, Administrativa y Humana.
							Claves de Asesor Financiero con validez oficial ante la Comisión Nacional de Seguros y Fianzas (CNSF) y Comisión Nacional de Sistemas de Ahorro para el Retiro (CONSAR), sin costo.
							Horario flexible y de acuerdo a tus necesidades.
							EXCELENTE ESQUEMA DE COMISIONES Y BONOS POR PRODUCCION.
							Convenciones nacionales e internacionales.
							Desarrollo profesional y crecimiento dentro de nuestra fuerza de ventas.</p>
						
						<h3>¡CUMPLIR CON TUS EXPECTATIVAS ECONÓMICAS! Y TENER UNA CALIDAD DE VIDA.</h3>
					</div>
					<div className='img_asesor'>
						<img src='https://images.pexels.com/photos/429247/pexels-photo-429247.jpeg?h=350&auto=compress&cs=tinysrgb' alt='asesor'/>
					</div>
				</div>
				<div className='form_asesor'>
					<h3>Completa tus datos y nuestro equipo se pondrá en contacto contigo</h3>
					<form method="post" action="." className='recuadro' name="sentMessage" id="contactForm">
						<input name="nombre" type="name" className="inp form-control" placeholder=" Nombre" id="nombre" required data-validation-required-message="Please enter your email address." />    
				        <p className="help-block text-danger"></p>
				        <input name="telefono" type="name" className="inp form-control" placeholder="Teléfono" id="nombre" required data-validation-required-message="Please enter your email address." />    
				        <p className="help-block text-danger"></p>
				         <div className='option'>
				                    
				            <select name="path" type="text" className='edo form-control' id="name" required data-validation-required-message="Please enter your name.">
				                <option  default  value="Servicio">Estado</option>
								<option value="Aguascalientes">Aguascalientes</option>
								<option value="Baja California Sur">Baja California Sur</option>
								<option value="Baja California Norte">Baja California Norte</option>
								<option value="TARJETA">Tarjeta de Crédito</option>	
				            </select>                          
				       </div>
				       <button>Enviar</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Integrate;