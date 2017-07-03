import React, { Component } from 'react';
import './All.css'

import Afore from '../afore/Afore';
import Seguros from '../seguros/Seguros';
import Banco from '../banco/Banco';
import Creditos from '../creditos/Creditos';
import Salud from '../salud/Salud';
import Extras from '../extras/Extras';


class All extends Component{
	render (){
		return(
			<div className=''>
				<Afore />
				<Seguros />
				<Banco />
				<Creditos />
				<Salud />
				<Extras />
			</div>
		);
	}
}

export default All;
