import React, { Component } from 'react';
import './Cotizador.css';


class Cotizador extends Component {
    render(){
        return(
     		<div className='box_cot'>
            	<p>Quieres recibir más información de nuestros servicios?</p>
            	
            	<form method="post" action="." className='recuadro' name="sentMessage" id="contactForm">
    	
	                <div className="">
	                    <div className="">
	                        <div className="form-group">
	                            <input name="nombre" type="text" className="formas form-control" placeholder="Nombre " id="name" required data-validation-required-message="Please enter your name." />
	                            <p className="help-block text-danger"></p>
	                        </div>
	                        <div className=''>
	                            <div className=''>
	                                <div className="form-group">
	                                    <input name="email" type="email" className="formas form-control" placeholder=" Email *" id="email" required data-validation-required-message="Please enter your email address." />    
	                                	 <p className="help-block text-danger"></p>

	                                </div>
	                            </div>
	                            <div className=''>
	                                <div className="form-group">
	                                    <input name="tel" type="tel" className="formas  form-control" placeholder="Teléfono *" id="phone" required data-validation-required-message="Please enter your phone number." />   
	                                	<p className="help-block text-danger"></p>

	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="">
	                        <div className="form-group">
	                           <select name="path" type="text" className='formas form-control' id="name" required data-validation-required-message="Please enter your name.">
	                                <option disabled value="Servicio">Servicio</option>
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
	                    </div>
	                    <button className='btn_form'>Enviar</button>
	                </div>
           	 	</form>
  			</div>
        );
    }
}

export default Cotizador;