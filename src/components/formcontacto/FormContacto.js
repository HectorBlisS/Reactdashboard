import React, { Component } from 'react';
import './FormContacto.css'


class FormContacto extends Component{
	render (){
		return(
			<div>
				<div className='back_form'>
					<div className='cover'>
					<div className='contenido'>
						<h3 className='saludo'>Hola!</h3>
						<p className='mensaje'>Cotiza tu seguro y localiza a tu agente mas cercado!</p>
						<div>
			            	<form method="post" action="." className='recuadro' name="sentMessage" id="contactForm">
			    	
				                <div >
				                   
				                         <div className='data'>
				                                    <input name="nombre" type="name" className="formas form-control" placeholder=" Nombre *" id="nombre" required data-validation-required-message="Please enter your email address." />    
				                                	 <p className="help-block text-danger"></p>

				                           
				                                    <input name="estado" type="estado" className="formas left form-control" placeholder="Estado *" id="estado" required data-validation-required-message="Please enter your phone number." />   
				                                	<p className="help-block text-danger"></p>
				                        </div>
				                        				                        	<p className="help-block text-danger"></p>

				                        <div className='data'>
				                                    <input name="email" type="email" className="formas form-control" placeholder=" Email *" id="email" required data-validation-required-message="Please enter your email address." />    
				                                	 <p className="help-block text-danger"></p>

				                           
				                                    <input name="tel" type="tel" className="formas left form-control" placeholder="Teléfono *" id="phone" required data-validation-required-message="Please enter your phone number." />   
				                                	<p className="help-block text-danger"></p>
				                        </div>
				                        	<p className="help-block text-danger"></p>
				                    </div>
				                    <div className='option'>
				                    
				                           <select name="path" type="text" className='forms form-control' id="name" required data-validation-required-message="Please enter your name.">
				                                <option disabled default value="Servicio">Servicio</option>
				                                <optgroup  label='AFORE'>  
				                                	<option value="AFORE">AFORE</option>
				                                </optgroup>
				                                <optgroup label='Banco'>
													 <option value="CUENTA_BANCARIA">Cuenta Bancaria</option>
													 <option value="CUENTA_INVERSION">Cuenta de Inversión</option>	
												</optgroup>
				                               <optgroup label='Crédito'>
													 <option value="CREDITO_PERSONAL">Crédito Personal</option>
													 <option value="TARJETA">Tarjeta de Crédito</option>	
												</optgroup>
												<optgroup label='Seguro'>
													 <option value="SEGURO_AUTO">Seguro de Auto</option>
													 <option value="SEGURO_VIDA">Seguro de Vida</option>
													 <option value="SEGURO_EDUCATIVO">Seguro Educativo</option>	
												</optgroup>
												<optgroup label='Salud'>
													 <option value="CUENTA_BANCARIA">Gastos Médicos</option>
													 <option value="CUENTA_INVERSION">Gastos Médicos Internacional</option>	
												</optgroup>
												<optgroup label='Especiales'>
													 <option value="TPV">TPV</option>
													 <option value="DANOS">Danos</option>
													 <option value="ESPECIAL">Cotización Especial</option>	
												</optgroup>
				                            </select>                  
				                       
				                    </div>
				                	<button className='btn_form'>
				                		Enviar
				                	</button>
				           
			           	 	</form>
			           	 	</div>
						</div>
					</div>
				</div>
	
			</div>
		);
	}
}

export default FormContacto;