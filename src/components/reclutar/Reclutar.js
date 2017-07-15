import React, { Component } from 'react';
import './Reclutar.css'
import FontAwesome from 'react-fontawesome';

class Reclutar extends Component{
	render (){
		return(
			<div className='back_reclutar'>
				<div className='publi_back'>
				<p className='text_promo'>Quieres ser parte de nuestr equipo?</p>
				<FontAwesome name='play-circle' className='icon_play' size='3x'/>
				</div>
			</div>
		);
	}
}

export default Reclutar;