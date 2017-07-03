import React, { Component } from 'react';
import './FormContacto.css'
import FontAwesome from 'react-fontawesome';


class FormContacto extends Component{
	render (){
		return(
			<div>
				<div className='back_form'>
					<div className='cover'>
						<h3>Hola</h3>
						<p>Cotiza tu seguro y localiza a tu agente mas cercado!</p>
						<input name="email" type="email" className="formas form-control" placeholder=" Email *" id="email" required data-validation-required-message="Please enter your email address." />  
					</div>
				</div>
	
			</div>
		);
	}
}

export default FormContacto;