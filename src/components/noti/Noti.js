import React, { Component } from 'react';
import './Noti.css'
import FontAwesome from 'react-fontawesome';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';



class Noti extends Component{
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
			<div className='noticias'>
				<h2>DIPRA News</h2>
				<p>Entérate de noticias, promociones y tips.</p>
				<div className='noti'>
					<div className='noti_uno'>
						<div className='cubierta'><div className='magnify' ><FontAwesome onTouchTap={this.handleOpen} name='arrows-alt' className='' size='2x'/></div></div>	 	
					 
					 <Dialog
				          title="Actitud financiera"
				          actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose}
          				autoScrollBodyContent={true}
				        >
				        
				        <div name="shipSpeed">
				         <h3> 3 Consehos de las Finanzas</h3>
				         <p>Si eres como la mayoría de los emprendedores, es probable
				          que debas dividir tu tiempo entre manejar a tu equipo, conseguir
				           ventas, mejorar el servicio al cliente, promover tu negocio y 
				           crear nuevos productos o servicios. Lo último que quieres añadirle
				            a este mix es el cuidado de tus finanzas personales (¡qué horror!).
				             No obstante, si no tienes las finanzas de tu hogar en orden, 
				             sólo estás agregando más caos y estrés a tu vida... 
				             te des cuenta o no. </p>
				           <img className='img_noti' src='https://images.pexels.com/photos/308663/pexels-photo-308663.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>
				      
				         <p>1. Edúcate
							Tómate el tiempo para leer acerca de finanzas personales. Cada semana, agenda citas "de dinero" contigo mismo y dedica algunas horas a administrar tus finanzas personales y leer libros, revistas, sitios o blogs de finanzas. Cuanto más sepas acerca de tus propias finanzas, mayor confianza tendrás al administrar tu dinero en el largo plazo.
							Si necesitas más ayuda, considera contratar a un coach financiero que te ayude a crear un plan financiero para alcanzar tus metas.
							<br />
							2. Revisa tu crédito con regularidad
							Tu reporte de crédito es como un archivo de ti y tu historial crediticio. Básicamente le dice a los prestamistas qué tan riesgoso eres, y si deben o no prestarte dinero. Cuando se trata de comprar un coche o una casa, lo deseable es que tu reporte de crédito esté en excelente forma, de manera que puedas calificar para buenas tarifas.
							Crea el hábito de revisar tu historial al menos una vez al año para confirmar que todo esté en orden. Hazlo en una fecha especial (como tu cumpleaños) para que se te haga fácil recordarlo y mantener el monitoreo. Puedes acceder a tu historial en sitios como el Buró de Crédito.
							<br />
							3. Haz un presupuesto
							Aunque esto suena muy básico, muchos emprendedores no tienen un presupuesto en forma para monitorear sus ingresos y gastos mensuales. Puedes usar herramientas digitales como apps para monitorear tus finanzas personales o simplemente un documento en Excel. Sin importar cuál opción elijas, asegúrate de que se adapte a tu estilo de vida.
							Si realmente quieres arreglar tus finanzas y llevar la delantera financieramente, debes destinar tiempo y energía para actualizar tu presupuesto cada semana. Esto te ayudará a asegurar que no gastas más de lo que ganas y de que eres capaz de ahorrar para tus metas financieras.
							Relacionado: 10 herramientas digitales para emprendedores
							<br />
							4. Automotiza tus finanzas
							La tecnología facilita enormemente la tarea de administrar las finanzas cada día. Busca que la mayor parte del proceso sea automático. Puedes usar trasferencias en línea automáticas o pagar tus cuentas por internet cada mes. Esto te ayudará a que no te estreses por pagar tus cuentas a tiempo y por generar intereses o cargos extra.
							Si te preocupa automatizar el pago de tus cuentas, puedes fijar alarmas en tu calendario (en tu computadora o smartphone) que te recuerden los pagos. Cuanto más puedas automatizar tus finanzas, menos preocupaciones tendrás a diario.
							<br />
							5. Paga deudas
							Haz un plan para pagar todas tus deudas lo antes posible. Empieza por hacer una lista de todas tus deudas (tarjetas de crédito, crédito de auto, créditos educativos, etc.). Incluye el balance actual, el pago mínimo al mes y la tasa de interés. Después revisa tu presupuesto para determinar cuánto dinero puedes añadir a los pagos de deudas.

							A partir de ahí puedes hacer investigaciones sobre estrategias para reducir deudas de manera que confirmes que las estás pagando de la manera más eficiente posible. Cuando estés trabajando en la reducción de una deuda, es importante que tengas un "colchón" para pagar cualquier emergencia que surgiera en el camino.

							6. Construye tu propio colchón
							Tener un colchón de dinero es una parte esencial de tus finanzas. Te permite usar el dinero para pagar gastos no planeados o emergencias que puedan aparecer en tu día a día, en lugar de incrementar tu deuda o invertir a largo plazo.

							Como emprendedor, es conveniente que tengas un colchón de seis a 12 meses de tus gastos fijos. Éste te permitirá pagar cuentas personales y no preocuparte si necesitas reducir tus ingresos debido al flujo del negocio.

							7. Invierte fuera de tu negocio
							Aunque es muy importante que siempre inviertas en ti y en tu negocio, no debes tener “todos los huevos en la misma canasta”. La diversificación es extremadamente importante ya que disminuirá tu riesgo de inversión en el largo plazo. Trabaja con un planeador financiero para crear un portafolio de inversiones a largo plazo que incluya acciones, bonos y Cetes que se alineen con tus propias metas financieras y a tu tolerancia al riesgo. </p>
				           <img className='img_noti' src='https://images.pexels.com/photos/308663/pexels-photo-308663.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>

				        </div>
				        </Dialog>
        			</div>
					<div className='noti_padre'>
						<div className='noti_dos'>
							<div className='cubierta_dos'><div className='magnify_dos' ><FontAwesome onTouchTap={this.handleOpen} name='arrows-alt' className='' size='2x'/></div></div>
							<Dialog
				          title="Actitud financiera"
				          actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose}
          				autoScrollBodyContent={true}
				        >
				        
				        <div name="shipSpeed">
				         <h3> 3 Consehos de las Finanzas</h3>
				         <p>Si eres como la mayoría de los emprendedores, es probable
				          que debas dividir tu tiempo entre manejar a tu equipo, conseguir
				           ventas, mejorar el servicio al cliente, promover tu negocio y 
				           crear nuevos productos o servicios. Lo último que quieres añadirle
				            a este mix es el cuidado de tus finanzas personales (¡qué horror!).
				             No obstante, si no tienes las finanzas de tu hogar en orden, 
				             sólo estás agregando más caos y estrés a tu vida... 
				             te des cuenta o no. </p>
				           <img className='img_noti' src='https://images.pexels.com/photos/308663/pexels-photo-308663.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>
				      
				         <p>1. Edúcate
							Tómate el tiempo para leer acerca de finanzas personales. Cada semana, agenda citas "de dinero" contigo mismo y dedica algunas horas a administrar tus finanzas personales y leer libros, revistas, sitios o blogs de finanzas. Cuanto más sepas acerca de tus propias finanzas, mayor confianza tendrás al administrar tu dinero en el largo plazo.
							Si necesitas más ayuda, considera contratar a un coach financiero que te ayude a crear un plan financiero para alcanzar tus metas.
							<br />
							2. Revisa tu crédito con regularidad
							Tu reporte de crédito es como un archivo de ti y tu historial crediticio. Básicamente le dice a los prestamistas qué tan riesgoso eres, y si deben o no prestarte dinero. Cuando se trata de comprar un coche o una casa, lo deseable es que tu reporte de crédito esté en excelente forma, de manera que puedas calificar para buenas tarifas.
							Crea el hábito de revisar tu historial al menos una vez al año para confirmar que todo esté en orden. Hazlo en una fecha especial (como tu cumpleaños) para que se te haga fácil recordarlo y mantener el monitoreo. Puedes acceder a tu historial en sitios como el Buró de Crédito.
							<br />
							3. Haz un presupuesto
							Aunque esto suena muy básico, muchos emprendedores no tienen un presupuesto en forma para monitorear sus ingresos y gastos mensuales. Puedes usar herramientas digitales como apps para monitorear tus finanzas personales o simplemente un documento en Excel. Sin importar cuál opción elijas, asegúrate de que se adapte a tu estilo de vida.
							Si realmente quieres arreglar tus finanzas y llevar la delantera financieramente, debes destinar tiempo y energía para actualizar tu presupuesto cada semana. Esto te ayudará a asegurar que no gastas más de lo que ganas y de que eres capaz de ahorrar para tus metas financieras.
							Relacionado: 10 herramientas digitales para emprendedores
							<br />
							4. Automotiza tus finanzas
							La tecnología facilita enormemente la tarea de administrar las finanzas cada día. Busca que la mayor parte del proceso sea automático. Puedes usar trasferencias en línea automáticas o pagar tus cuentas por internet cada mes. Esto te ayudará a que no te estreses por pagar tus cuentas a tiempo y por generar intereses o cargos extra.
							Si te preocupa automatizar el pago de tus cuentas, puedes fijar alarmas en tu calendario (en tu computadora o smartphone) que te recuerden los pagos. Cuanto más puedas automatizar tus finanzas, menos preocupaciones tendrás a diario.
							<br />
							5. Paga deudas
							Haz un plan para pagar todas tus deudas lo antes posible. Empieza por hacer una lista de todas tus deudas (tarjetas de crédito, crédito de auto, créditos educativos, etc.). Incluye el balance actual, el pago mínimo al mes y la tasa de interés. Después revisa tu presupuesto para determinar cuánto dinero puedes añadir a los pagos de deudas.

							A partir de ahí puedes hacer investigaciones sobre estrategias para reducir deudas de manera que confirmes que las estás pagando de la manera más eficiente posible. Cuando estés trabajando en la reducción de una deuda, es importante que tengas un "colchón" para pagar cualquier emergencia que surgiera en el camino.

							6. Construye tu propio colchón
							Tener un colchón de dinero es una parte esencial de tus finanzas. Te permite usar el dinero para pagar gastos no planeados o emergencias que puedan aparecer en tu día a día, en lugar de incrementar tu deuda o invertir a largo plazo.

							Como emprendedor, es conveniente que tengas un colchón de seis a 12 meses de tus gastos fijos. Éste te permitirá pagar cuentas personales y no preocuparte si necesitas reducir tus ingresos debido al flujo del negocio.

							7. Invierte fuera de tu negocio
							Aunque es muy importante que siempre inviertas en ti y en tu negocio, no debes tener “todos los huevos en la misma canasta”. La diversificación es extremadamente importante ya que disminuirá tu riesgo de inversión en el largo plazo. Trabaja con un planeador financiero para crear un portafolio de inversiones a largo plazo que incluya acciones, bonos y Cetes que se alineen con tus propias metas financieras y a tu tolerancia al riesgo. </p>
				           <img className='img_noti' src='https://images.pexels.com/photos/308663/pexels-photo-308663.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>

				        </div>
				        </Dialog>
						</div>
						<div className='noti_tres'>
							<div className='cubierta_dos'><div className='magnify_dos' ><FontAwesome onTouchTap={this.handleOpen} name='arrows-alt' className='' size='2x'/></div></div>
							<Dialog
				          title="Actitud financiera"
				          actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose}
          				autoScrollBodyContent={true}
				        >
				        
				        <div name="shipSpeed">
				         <h3> 3 Consehos de las Finanzas</h3>
				         <p>Si eres como la mayoría de los emprendedores, es probable
				          que debas dividir tu tiempo entre manejar a tu equipo, conseguir
				           ventas, mejorar el servicio al cliente, promover tu negocio y 
				           crear nuevos productos o servicios. Lo último que quieres añadirle
				            a este mix es el cuidado de tus finanzas personales (¡qué horror!).
				             No obstante, si no tienes las finanzas de tu hogar en orden, 
				             sólo estás agregando más caos y estrés a tu vida... 
				             te des cuenta o no. </p>
				           <img className='img_noti' src='https://images.pexels.com/photos/308663/pexels-photo-308663.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>
				      
				         <p>1. Edúcate
							Tómate el tiempo para leer acerca de finanzas personales. Cada semana, agenda citas "de dinero" contigo mismo y dedica algunas horas a administrar tus finanzas personales y leer libros, revistas, sitios o blogs de finanzas. Cuanto más sepas acerca de tus propias finanzas, mayor confianza tendrás al administrar tu dinero en el largo plazo.
							Si necesitas más ayuda, considera contratar a un coach financiero que te ayude a crear un plan financiero para alcanzar tus metas.
							<br />
							2. Revisa tu crédito con regularidad
							Tu reporte de crédito es como un archivo de ti y tu historial crediticio. Básicamente le dice a los prestamistas qué tan riesgoso eres, y si deben o no prestarte dinero. Cuando se trata de comprar un coche o una casa, lo deseable es que tu reporte de crédito esté en excelente forma, de manera que puedas calificar para buenas tarifas.
							Crea el hábito de revisar tu historial al menos una vez al año para confirmar que todo esté en orden. Hazlo en una fecha especial (como tu cumpleaños) para que se te haga fácil recordarlo y mantener el monitoreo. Puedes acceder a tu historial en sitios como el Buró de Crédito.
							<br />
							3. Haz un presupuesto
							Aunque esto suena muy básico, muchos emprendedores no tienen un presupuesto en forma para monitorear sus ingresos y gastos mensuales. Puedes usar herramientas digitales como apps para monitorear tus finanzas personales o simplemente un documento en Excel. Sin importar cuál opción elijas, asegúrate de que se adapte a tu estilo de vida.
							Si realmente quieres arreglar tus finanzas y llevar la delantera financieramente, debes destinar tiempo y energía para actualizar tu presupuesto cada semana. Esto te ayudará a asegurar que no gastas más de lo que ganas y de que eres capaz de ahorrar para tus metas financieras.
							Relacionado: 10 herramientas digitales para emprendedores
							<br />
							4. Automotiza tus finanzas
							La tecnología facilita enormemente la tarea de administrar las finanzas cada día. Busca que la mayor parte del proceso sea automático. Puedes usar trasferencias en línea automáticas o pagar tus cuentas por internet cada mes. Esto te ayudará a que no te estreses por pagar tus cuentas a tiempo y por generar intereses o cargos extra.
							Si te preocupa automatizar el pago de tus cuentas, puedes fijar alarmas en tu calendario (en tu computadora o smartphone) que te recuerden los pagos. Cuanto más puedas automatizar tus finanzas, menos preocupaciones tendrás a diario.
							<br />
							5. Paga deudas
							Haz un plan para pagar todas tus deudas lo antes posible. Empieza por hacer una lista de todas tus deudas (tarjetas de crédito, crédito de auto, créditos educativos, etc.). Incluye el balance actual, el pago mínimo al mes y la tasa de interés. Después revisa tu presupuesto para determinar cuánto dinero puedes añadir a los pagos de deudas.

							A partir de ahí puedes hacer investigaciones sobre estrategias para reducir deudas de manera que confirmes que las estás pagando de la manera más eficiente posible. Cuando estés trabajando en la reducción de una deuda, es importante que tengas un "colchón" para pagar cualquier emergencia que surgiera en el camino.

							6. Construye tu propio colchón
							Tener un colchón de dinero es una parte esencial de tus finanzas. Te permite usar el dinero para pagar gastos no planeados o emergencias que puedan aparecer en tu día a día, en lugar de incrementar tu deuda o invertir a largo plazo.

							Como emprendedor, es conveniente que tengas un colchón de seis a 12 meses de tus gastos fijos. Éste te permitirá pagar cuentas personales y no preocuparte si necesitas reducir tus ingresos debido al flujo del negocio.

							7. Invierte fuera de tu negocio
							Aunque es muy importante que siempre inviertas en ti y en tu negocio, no debes tener “todos los huevos en la misma canasta”. La diversificación es extremadamente importante ya que disminuirá tu riesgo de inversión en el largo plazo. Trabaja con un planeador financiero para crear un portafolio de inversiones a largo plazo que incluya acciones, bonos y Cetes que se alineen con tus propias metas financieras y a tu tolerancia al riesgo. </p>
				           <img className='img_noti' src='https://images.pexels.com/photos/308663/pexels-photo-308663.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>

				        </div>
				        </Dialog>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Noti;