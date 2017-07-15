import React, { Component } from 'react';
import './Publi.css';
import {Link} from 'react-router-dom';

class Publi extends Component{
	render (){
		return(
			<div className='publicidad'>
				<div className='publi_back'>
					<p className='text_promo'>Aprovecha nuestras promociones contratanto ahora</p>
					<Link to='/form'>
					<button >Cotizar</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Publi;