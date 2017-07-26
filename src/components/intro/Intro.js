import React, { Component } from 'react';
import './Intro.css'

class Intro extends Component{
	render (){
		return(
			<div className='intro'>
				<h3 className='tittle_service'>{this.props.text}</h3>
				<hr />
			</div>
		);
	}
}

export default Intro;