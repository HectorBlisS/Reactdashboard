import React, { Component } from 'react';
import './Anuncio.css';

import FontAwesome from 'react-fontawesome';

class Anuncio extends Component{
	render (){
		return(
			<div className='cart'>
			   	<div className='nick_name'>
			     	<p>DIPRA Digital</p>
			    	<span> Nuestra sucursal virtual</span>
			   	
			   	</div>
			   	<hr />

			   	<div className='features'>
	                <p><FontAwesome name='angle-right' className='flecha'/> Consulta tu saldo</p>
	                <p><FontAwesome name='angle-right' className='flecha'/> Revisa tus productos</p>
	                <p><FontAwesome name='angle-right' className='flecha'/> Recordatorios en fechas de corte</p>
	                <p><FontAwesome name='angle-right' className='flecha'/> Suscribete a nuestra revista <br /> digital</p>
	                <button>Iniciar sesión</button>
                </div>
			</div>
		);
	}
}

export default Anuncio;