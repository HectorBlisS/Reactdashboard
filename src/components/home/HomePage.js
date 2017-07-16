import React, { Component } from 'react';
import './HomePage.css';
import Cotizador from './cotizador/Cotizador';
import About from './about/About';
import Servicios from '../servicios/Servicios';
import Publi from '../publi/Publi';
import Noti from '../noti/Noti';
import Reclutar from '../reclutar/Reclutar';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import Anuncio from './anuncio/Anuncio';


class HomePage extends Component {
    render(){
        return(
            <div>
            	<div className='back'>
                	<div className='cover'>
                        <Nav history={this.props.history} />
                    	<div className='name'>
                            <h1 className='name_dipra'>Dirección en Prevención de Riesgos y Asesoría financiera</h1>
        				</div>
                        <Anuncio />
                    </div>
				</div>
				<About />
			     <Servicios />
                 <Publi />
                 <Noti />
                 <Reclutar />
                 <Footer />
            </div>
        );
    }
}

export default HomePage;