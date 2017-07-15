import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';


class Footer extends Component{
	render (){
		return(
			<div className='footer'>
				<div className='partners'>
					<img className='marca' src='http://es.vector.me/files/images/4/5/45409/inbursa.png' />
					<img className='marca' src='http://tumejorpoliza.com/wp-content/uploads/2014/01/qualitas-290x300.png' />
					<img className='marca' src='https://ahorraseguros.mx/El-Aguila/images/aguila-logo.png' />
					<img className='marca' src='https://www.segurosfalabella.cl/image/image_gallery?uuid=6c809e4c-52a5-49bf-b0fb-e3d900e7c636&groupId=22401&t=1496759321601' />
				</div>
				<div>
					<img className='marca' src='http://www.axa-assistance.com.mx/documents/4938746/5426284/Logo+Axa+Assistance+-+English/5cd42a28-41e1-4152-9960-6cce2440bc1d?t=1479473248000' />
					<img className='marca' src='https://seeklogo.com/images/G/gnp-logo-51CC4B06FB-seeklogo.com.png' />
					<img className='marca' src='https://www.topdoctors.mx/files/Mutua/image/577d83d2-f238-460b-a335-2d839e4504ad.png' />
				</div>
				<hr/>
				<div className='footer_box'>
					<div className='box_section'>
						<h4>Sucursales</h4>
						<p>Pachuca, Hidalgo</p>
						<p>Tlalnepantla,CDMX</p>
						<p>Puebla, Puebla</p>
						<p>Cancún, Quintana Roo</p>
						<p>San Luis Potosí,San Luis Potosí</p>
					</div>
					<div  className='box_section'>
						<h4>Atención al Cliente</h4>
						<p>Tel.(771) 153-0048</p>
						
						<p>Tel. (771) 281-4466</p>
						
						<p>formadorpachuca@dipra.com.mx</p>
					</div>
					<div  className='box_section'>
						<h4>Redes Sociales</h4>
						<FontAwesome name='facebook-square' size='2x' className='footer_icon'/>
						<FontAwesome name='twitter-square' size='2x' className='footer_icon'/>
						<FontAwesome name='youtube-play' size='2x' className='footer_icon'/>
					</div>

				</div>
			</div>
		);
	}
}

export default Footer;