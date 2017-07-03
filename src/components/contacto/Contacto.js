import React, { Component } from 'react';
import './Contacto.css';
import FontAwesome from 'react-fontawesome';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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

  render() {
    const actions = [
      <FlatButton
        label="Cerrar"
        onTouchTap={this.handleClose}
        style={{color:'#57658E'}}
      />,
    
     
    ];
        return(
     		<div className='contacto'>
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
				          title="Actitud financiera"
				          actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose}
          				autoScrollBodyContent={true}
				        >
				        
				        <div name="shipSpeed">
				         <iframe classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4730993053727!2d-98.74064648513199!3d20.114300986500908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fd60d3eda3%3A0x83e77ffb87d8efc7!2sAv+R%C3%ADo+Amajac+231%2C+Terrazas%2C+42098+Pachuca+de+Soto%2C+Hgo.!5e0!3m2!1ses-419!2smx!4v1499111629069" width="100%" height="430" frameborder="0" style={{border:0}} allowfullscreen></iframe>
				        </div>
				        </Dialog>


					</div>
					<div className='direccion'>
					<h3>SATELITE</h3>
					<p>Blvd. México Querétaro No.1</p>
					<p>Col. Viveros de la Loma</p>
					<p>C.P.54080. Tlalnepantla, Edo. de México</p>
					<p>Tel. (55) 110-63671</p>
					<span onTouchTap={this.handleOpen}><FontAwesome className='lupa' name='search' size='1x'/>Ver mapa</span>
						<Dialog
				          title="Actitud financiera"
				          actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose}
          				autoScrollBodyContent={true}
				        >
				        
				        <div name="shipSpeed">
				         <iframe classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4730993053727!2d-98.74064648513199!3d20.114300986500908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fd60d3eda3%3A0x83e77ffb87d8efc7!2sAv+R%C3%ADo+Amajac+231%2C+Terrazas%2C+42098+Pachuca+de+Soto%2C+Hgo.!5e0!3m2!1ses-419!2smx!4v1499111629069" width="100%" height="430" frameborder="0" style={{border:0}} allowfullscreen></iframe>
				        </div>
				        </Dialog>

					</div>
					<div className='direccion'>
            		<h3>Pachuca</h3>
            		<p>Río Amajac No. 231</p>
					<p>Lomas Residencial Pachuca</p>
					<p>C.P.42094. Pachuca, Hidalgo</p>
					<p>Tel.(771) 153-0048</p>
					<p>Tel. (771) 281-4466</p>
					<span onTouchTap={this.handleOpen}><FontAwesome className='lupa' name='search' size='1x'/>Ver mapa</span>
						<Dialog
				          title="Actitud financiera"
				          actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose}
          				autoScrollBodyContent={true}
				        >
				        
				        <div name="shipSpeed">
				         <iframe classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4730993053727!2d-98.74064648513199!3d20.114300986500908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fd60d3eda3%3A0x83e77ffb87d8efc7!2sAv+R%C3%ADo+Amajac+231%2C+Terrazas%2C+42098+Pachuca+de+Soto%2C+Hgo.!5e0!3m2!1ses-419!2smx!4v1499111629069" width="100%" height="430" frameborder="0" style={{border:0}} allowfullscreen></iframe>
				        </div>
				        </Dialog>

					</div>
					<div className='direccion'>
					<h3>SATELITE</h3>
					<p>Blvd. México Querétaro No.1</p>
					<p>Col. Viveros de la Loma</p>
					<p>C.P.54080. Tlalnepantla, Edo. de México</p>
					<p>Tel. (55) 110-63671</p>
					<span onTouchTap={this.handleOpen}><FontAwesome className='lupa' name='search' size='1x'/>Ver mapa</span>
						<Dialog
				          title="Actitud financiera"
				          actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose}
          				autoScrollBodyContent={true}
				        >
				        
				        <div name="shipSpeed">
				         <iframe classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4730993053727!2d-98.74064648513199!3d20.114300986500908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fd60d3eda3%3A0x83e77ffb87d8efc7!2sAv+R%C3%ADo+Amajac+231%2C+Terrazas%2C+42098+Pachuca+de+Soto%2C+Hgo.!5e0!3m2!1ses-419!2smx!4v1499111629069" width="100%" height="430" frameborder="0" style={{border:0}} allowfullscreen></iframe>
				        </div>
				        </Dialog>

					</div>
					<div className='direccion'>
					<h3>SATELITE</h3>
					<p>Blvd. México Querétaro No.1</p>
					<p>Col. Viveros de la Loma</p>
					<p>C.P.54080. Tlalnepantla, Edo. de México</p>
					<p>Tel. (55) 110-63671</p>
					<span onTouchTap={this.handleOpen}><FontAwesome className='lupa' name='search' size='1x'/>Ver mapa</span>
						<Dialog
				          title="Actitud financiera"
				          actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose}
          				autoScrollBodyContent={true}
				        >
				        
				        <div name="shipSpeed">
				         <iframe classNampe='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4730993053727!2d-98.74064648513199!3d20.114300986500908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109fd60d3eda3%3A0x83e77ffb87d8efc7!2sAv+R%C3%ADo+Amajac+231%2C+Terrazas%2C+42098+Pachuca+de+Soto%2C+Hgo.!5e0!3m2!1ses-419!2smx!4v1499111629069" width="100%" height="430" frameborder="0" style={{border:0}} allowfullscreen></iframe>
				        </div>
				        </Dialog>

					</div>
            	</div>
            	
  			</div>
        );
    }
}

export default Contacto;