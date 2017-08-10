import React, { Component } from 'react';
import './Contacto.css';
import FontAwesome from 'react-fontawesome';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

class Contacto extends Component {

	state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
   handleAbrir = () => {
    this.setState({open: true});
  };

  handleCerrar = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cerrar"
        onTouchTap={this.handleClose}
        style={{color:'#57658E'}}
      />,
    
     
    ];
        return(
     		<div>
	     		<div className='contacto'>
	     			<Nav />
	     			<div className='cubierta'></div>
	            	<div className='ubicacion'>
	            		<div className='direccion'>
		            		<h3>Pachuca</h3>
		            		<p>Río Amajac No. 231</p>
							<p>Lomas Residencial Pachuca</p>
							<p>C.P.42094. Pachuca, Hidalgo</p>
							<p>Tel.(771) 153-0048</p>
							<p>Tel. (771) 281-4466</p>
							<span onTouchTap={this.handleOpen}><FontAwesome className='lupa' name='search' size='1x'/>Ver mapa</span>
							<Dialog
					          title="Promotría Pachuca de Soto"
					          actions={actions}
					          modal={false}
					          open={this.state.open}
					          onRequestClose={this.handleClose}
	          				autoScrollBodyContent={true}
					        >
					        
					        <div name="shipSpeed">
					         <iframe title='map' classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4730993053727!2d-98.74064648513199!3d20.114300986500908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fd60d3eda3%3A0x83e77ffb87d8efc7!2sAv+R%C3%ADo+Amajac+231%2C+Terrazas%2C+42098+Pachuca+de+Soto%2C+Hgo.!5e0!3m2!1ses-419!2smx!4v1499111629069" width="100%" height="430" frameborder="0" style={{border:0}} allowfullscreen></iframe>
					        </div>
					        </Dialog>


						</div>
						<div className='direccion'>
						<h3>Satélite</h3>
						<p>Blvd. México Querétaro No.1</p>
						<p>Col. Viveros de la Loma</p>
						<p>C.P.54080. Tlalnepantla, Edo. de México</p>
						<p>Tel. (55) 110-63671</p>
						<span onTouchTap={this.handleAbrir}><FontAwesome className='lupa' name='search' size='1x'/>Ver mapa</span>
							<Dialog
					          title="Promotiía Satélite"
					          actions={actions}
					          modal={false}
					          open={this.state.open}
					          onRequestClose={this.handleCerrar}
	          				autoScrollBodyContent={true}
					        >
					        
					        <div name="shipSpeed">
					         <iframe title='map' classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.1120553130373!2d-99.22801851192077!3d19.522361263179427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMxJzIwLjUiTiA5OcKwMTMnMzguOSJX!5e0!3m2!1ses-419!2smx!4v1501033034442" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
					        </div>
					        </Dialog>

						</div>
						<div className='direccion'>
	            		<h3>Puebla</h3>
	            		<p>Calzada Zavaleta No.4906</p>
						<p>Col. Arcos del Sur</p>
						<p>C.P.72170. Puebla, Puebla</p>
						<p>Tel. (222) 230-5125</p>
						
						<span onTouchTap={this.handleOpen}><FontAwesome className='lupa' name='search' size='1x'/>Ver mapa</span>
							<Dialog
					          title="Promotoría Puebla"
					          actions={actions}
					          modal={false}
					          open={this.state.open}
					          onRequestClose={this.handleClose}
	          				autoScrollBodyContent={true}
					        >
					        
					        <div name="shipSpeed">
					         <iframe title='map' classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4730993053727!2d-98.74064648513199!3d20.114300986500908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fd60d3eda3%3A0x83e77ffb87d8efc7!2sAv+R%C3%ADo+Amajac+231%2C+Terrazas%2C+42098+Pachuca+de+Soto%2C+Hgo.!5e0!3m2!1ses-419!2smx!4v1499111629069" width="100%" height="430" frameborder="0" style={{border:0}} allowfullscreen></iframe>
					        </div>
					        </Dialog>

						</div>
						<div className='direccion'>
						<h3>Cancún</h3>
						<p>Av. Bonampak 331, No.331</p>
						<p>Smz. 10 Mza. 2Lt. 6-A</p>
						<p>C.P.77500. Cancún, Quintana Roo</p>
						<p>Tel. (998)-889-9020</p>
						<span onTouchTap={this.handleOpen}><FontAwesome className='lupa' name='search' size='1x'/>Ver mapa</span>
							<Dialog
					          title="Promotoría Cancún"
					          actions={actions}
					          modal={false}
					          open={this.state.open}
					          onRequestClose={this.handleClose}
	          				autoScrollBodyContent={true}
					        >
					        
					        <div name="shipSpeed">
					         <iframe  title='map' classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4730993053727!2d-98.74064648513199!3d20.114300986500908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fd60d3eda3%3A0x83e77ffb87d8efc7!2sAv+R%C3%ADo+Amajac+231%2C+Terrazas%2C+42098+Pachuca+de+Soto%2C+Hgo.!5e0!3m2!1ses-419!2smx!4v1499111629069" width="100%" height="430" frameborder="0" style={{border:0}} allowfullscreen></iframe>
					        </div>
					        </Dialog>

						</div>
						<div className='direccion'>
						<h3>San Luis Potosí</h3>
						<p>Walmart Muñoz Local 24</p>
						<p>Calle Muñoz No.400</p>
						<p>Barrio Lomas de Santiago</p>
						<p>C.P.78230. S.L.P., S.L.P</p>
						<p>Tel.(444) 810-0503</p>
						<span onTouchTap={this.handleOpen}><FontAwesome className='lupa' name='search' size='1x'/>Ver mapa</span>
							<Dialog
					          title="Promotoría S.L.P."
					          actions={actions}
					          modal={false}
					          open={this.state.open}
					          onRequestClose={this.handleClose}
	          				autoScrollBodyContent={true}
					        >
					        
					        <div name="shipSpeed">
					         <iframe title='map' classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4730993053727!2d-98.74064648513199!3d20.114300986500908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fd60d3eda3%3A0x83e77ffb87d8efc7!2sAv+R%C3%ADo+Amajac+231%2C+Terrazas%2C+42098+Pachuca+de+Soto%2C+Hgo.!5e0!3m2!1ses-419!2smx!4v1499111629069" width="100%" height="430" frameborder="0" style={{border:0}} allowfullscreen></iframe>
					        </div>
					        </Dialog>

						</div>
	            	</div>
	            	
	  			</div>
	  			<Footer />
	  			</div>
        );
    }
}

export default Contacto;