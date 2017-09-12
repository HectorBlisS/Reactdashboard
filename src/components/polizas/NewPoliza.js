import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {GridList, GridTile} from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Popover from 'material-ui/Popover';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import api from '../../Api/Django';
import toastr from 'toastr';
import VehiculosForm from './VehiculosForm';


class NewPoliza extends Component{
  constructor(){
    super()
    this.state={
      user:{},
      editar:true,
      domicilio:false,
      modalidad:'',
      subrama:'',
      segurodaños:'',
      nextOption:'',
      selected:'',
      sector:'',
      value:'',
      empresa:'',
      search:'',
      search2:'',
      asesoresobj:[{
        username:'',
        profile:{
          asesorId:''
        }
      }],
      clientesobj:[
        {id:1,
        pnombre:'oswaldo'},

      ],
      vehiculos:[],
      poliza:{},
      openModal:false,
    }
  }





  componentWillMount(){
    api.getProfile().then(r=>{
      this.setState({user:r})
      console.log()
    })
    api.getClients().then(r=>{
      this.setState({clientesobj:r.results});
      console.log(this.state.clientesobj)

    })
    api.getAsesores().then(r=>{
      this.setState({asesoresobj:r.results});
      console.log(this.state.asesoresobj)

    })
  }
  search=(event)=>{
    this.setState({search:event.target.value})
      console.log(this.state.search)
      api.getClients('http://localhost:8000/api/clientes/?q='+ this.state.search).then(r=>{
          this.setState({clientesobj:r.results});
          console.log(this.state.clientesobj)

      })

  };
  search2=(event)=>{
    this.setState({search2:event.target.value})
      api.getAsesores('http://localhost:8000/api/asesores/?q='+ this.state.search2).then(r=>{
          this.setState({asesoresobj:r.results});
          console.log(this.state.asesoresobj)

      })
  };
  guardar=()=>{
    console.log(this.state.poliza)
  };
  addDomicilio=(e,c)=>{
    let field = 'addaddress';
    let poliza = this.state.poliza;
    poliza[field] = c;
    this.setState({domicilio:c,poliza})
  };
  handleTouchTap = (event) => {
     // This prevents ghost click.
     event.preventDefault();

     this.setState({
       open: true,
       anchorEl: event.currentTarget,
     });
   };
   handleTouchTap2 = (event) => {
      // This prevents ghost click.
      event.preventDefault();

      this.setState({
        open2: true,
        anchorEl: event.currentTarget,
      });
    };
   handleRequestClose = () => {
      this.setState({
        open: false,
          open2: false,
      });
    };
    selectItem=(f,e)=>{
      let nombre = f.rsocial?f.rsocial:f.pnombre+' '+f.amaterno+' '+f.apaterno;
      this.setState({selected:f, search:nombre});
      let poliza = this.state.poliza;
      poliza['cliente'] = f.id;
      this.handleRequestClose()
    };
    selectItem2=(f,e)=>{
        console.log(f)
      let nombre = f.username;
      this.setState({selected2:f, search2:nombre});
      let poliza = this.state.poliza;
      poliza['asesor'] = f.id;
      this.setState({poliza})
      this.handleRequestClose()
    };
    //selectFieldsData :(
    handleChange = (event, index, value) => {
      let field = 'pago';
      let poliza = this.state.poliza;
      poliza[field] = value;
      this.setState({value,poliza});
    }
    handleEmpresa = (event, index, value) => {
      let field = 'empresa';
      let poliza = this.state.poliza;
      poliza[field] = value;
      this.setState({empresa:value,poliza});
    }
    handleSector = (event, index, value) => {
      let field = 'sector';
      let poliza = this.state.poliza;
      poliza[field] = value;
      this.setState({sector:value,poliza});
    }
    handleNextOption = (event, index, value) => {
      let field = 'next';
      let poliza = this.state.poliza;
      poliza[field] = value;
      this.setState({nextOption:value,poliza});
    }
    handleLastOption = (event, index, value) => {
      let field = 'last';
      let poliza = this.state.poliza;
      poliza[field] = value;
      this.setState({lastOption:value,poliza});
    }
    handleSeguroDaños = (event, index, value) => {
      let field = 'danhos';
      let poliza = this.state.poliza;
      poliza[field] = value;
      this.setState({segurodaños:value,poliza});
    }
    handleSubrama = (event, index, value) => {
      let field = 'subrama';
      let poliza = this.state.poliza;
      poliza[field] = value;
      this.setState({subrama:value,poliza});
    };
    handleModalidad = (event, index, value) => {
      let field = 'modalidad';
      let poliza = this.state.poliza;
      poliza[field] = value;
      this.setState({modalidad:value,poliza});
    };
    //textfields data
    handleText = (event, index) => {
       let field = event.target.name;
       let poliza = this.state.poliza;
       poliza[field] = event.target.value;
       this.setState({poliza});
       console.log(this.state.poliza)
     };
     //datePicker data
     handleDates =(e,val)=>{
       let field = this.state.lafecha;
       let poliza = this.state.poliza;
       let editada = Date.parse(val)
         editada = editada.toString()
       poliza[field] = editada;
       this.setState({poliza});
     };
     testing=(e)=>{
       this.setState({lafecha:e.target.name});
       //console.log(e.target.name,e.target.value)
     };

     pasala=(a)=>{
        this.state.vehiculos.push(a);
      };
      //modal
      handleOpen = () => {
       this.setState({openModal: true});
     };

     handleClose = () => {
       this.setState({openModal: false});
     };


    enviarPoliza=()=>{
      api.newPolicy(this.state.poliza).then(r=>{
        toastr.success('Tu Cliente se ha registrado con éxito');
        this.setState({elId:r.id,editar:false});
        console.log(r);
      }).catch(e=>{
        toastr.error('Hubo un problema, Intenta más tarde');
        console.log(e);
      })
    };
    newAdminPoliza=()=>{
      api.newAdminPolicy(this.state.poliza).then(r=>{
        toastr.success('Tu Cliente se ha registrado con éxito');
        this.setState({elId:r.id,editar:false});
        console.log(r);
      }).catch(e=>{
        toastr.error('Hubo un problema, Intenta más tarde');
        console.log(e);
      })
    };
    restart=()=>{
        this.props.history.push('/polizas/nueva');
        this.props.history.goBack();
    }
    buscarCliente=()=>{
        let url = 'http://localhost:8000/api/clientes/?q=' + this.state.search
        api.getClients().then(r=>{
            this.setState({clientesobj:r.results});
            console.log(this.state.clientesobj)

        })
    }




  render(){

      let filtered = this.state.clientesobj.filter((cliente)=>{

        if(cliente.rsocial){
          return cliente.rsocial.toLowerCase().indexOf(
            this.state.search.toLowerCase())!== -1 ||
            cliente.idcliente.toLowerCase().indexOf(
              this.state.search.toLowerCase())!== -1
        }else{
        return cliente.pnombre.toLowerCase().indexOf(
          this.state.search.toLowerCase())!== -1 ||
          cliente.idcliente.toLowerCase().indexOf(
            this.state.search.toLowerCase())!== -1
        }
      })
      let asesoresfilt = this.state.asesoresobj.filter((asesor)=>{


          return asesor.username.toLowerCase()
                  .indexOf(this.state.search2.toLowerCase())!== -1
              ||
            asesor.profile.asesorId.toLowerCase()
                .indexOf(this.state.search2.toLowerCase())!== -1


      })
    return(
      <div style={{position:'relative'}}>
          <FloatingActionButton
              backgroundColor={'rgb(87, 101, 142)'}
              onTouchTap={this.restart} style={{position:'absolute', top:-10, right:60}}>
              <ContentAdd />
          </FloatingActionButton>
        <Paper style={{maxWidth:'80%' ,
        margin:'0 auto',
        marginTop:30,
        textAlign:'left',
        marginBottom: 25,
        }}>
        <form>
        <Toolbar>
          <ToolbarTitle
              text="Datos Básicos(*Campos Requeridos)"
          />

        {this.state.user.is_staff?
          <ToolbarGroup>
            <div>
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                disabled={this.state.editar?false:true}
                hintText='Buscador de Asesores'
                name='asesor'
                value={this.state.search2}
                onChange={this.search2}
                fullWidth={true}
                floatingLabelText={this.state.selected2?'*ID: '+this.state.selected2.profile.asesorId:'*ID Asesor'}
                onTouchTap={this.handleTouchTap2}/>
                <Popover
                style={{width:'30%', height:'200px'}}
                 open={this.state.open2}
                 anchorEl={this.state.anchorEl}
                 anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                 targetOrigin={{horizontal: 'left', vertical: 'top'}}
                 onRequestClose={this.handleRequestClose}
               >
                {asesoresfilt.map((f,key)=>{
                  return(
                  <MenuItem key={key} onTouchTap={()=>this.selectItem2(f)}>
                    <div style={{margin:0, position:'relative'}}>
                      {f.username}
                      <p
                        style={{
                          margin:0,
                          fontSize:'.5rem',
                          position:'absolute',
                          color:'grey',
                          top:-10, right:0}}>
                        ID: {f.profile.asesorId}
                      </p>
                    </div>
                  </MenuItem>
                )
                })}
              </Popover>
            </div>
          </ToolbarGroup>:''}



        </Toolbar>

          <div style={{padding:'1%'}}>
            <GridList cols={8} cellHeight='auto'>
              <GridTile style={{padding:'1.5%'}} cols={4}>
                <TextField
                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                  disabled={this.state.editar?false:true}
                  hintText='Buscador de Clientes'
                  name='cliente'
                  value={this.state.search}
                  onChange={this.search}
                  fullWidth={true}
                  floatingLabelText={this.state.selected?'*ID: '+this.state.selected.idcliente:'*ID Cliente'}
                  onTouchTap={this.handleTouchTap}/>
                  <Popover
                  style={{width:'30%', height:'200px'}}
                   open={this.state.open}
                   anchorEl={this.state.anchorEl}
                   anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                   targetOrigin={{horizontal: 'left', vertical: 'top'}}
                   onRequestClose={this.handleRequestClose}
                 >
                  {filtered.map((f,key)=>{
                    return(
                    <MenuItem key={key} onTouchTap={()=>this.selectItem(f)}>
                      <div style={{margin:0, position:'relative'}}>
                        {f.rsocial?f.rsocial:f.pnombre+' '+f.apaterno+' '+f.amaterno}
                        <p
                          style={{
                            margin:0,
                            fontSize:'.5rem',
                            position:'absolute',
                            color:'grey',
                            top:-10, right:0}}>
                          ID: {f.idcliente}
                        </p>
                      </div>
                    </MenuItem>
                  )
                  })}
                </Popover>
              </GridTile>
              <GridTile style={{padding:'3%'}}>

                <TextField
                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                  disabled={this.state.editar?false:true}
                  name='emisor'
                  onChange={this.handleText}
                  hintText="4444"
                  floatingLabelText="*Emisor"
                /><br />
              </GridTile>
                <GridTile style={{padding:'3%'}}>

                    <TextField
                        floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                        underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                        disabled={this.state.editar?false:true}
                        name='carpeta'
                        onChange={this.handleText}
                        hintText="5555"
                        floatingLabelText="*Carpeta"
                    /><br />
                </GridTile>
                <GridTile style={{padding:'3%'}}>

                    <TextField
                        floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                        underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                        disabled={this.state.editar?false:true}
                        name='idpoliza'
                        onChange={this.handleText}
                        hintText="4455"
                        floatingLabelText="*Póliza"
                    /><br />
                </GridTile>
              <GridTile style={{padding:'3%'}}>

                <TextField
                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                  disabled={this.state.editar?false:true}
                  name='cis'
                  onChange={this.handleText}
                  hintText="55665544"
                  floatingLabelText="*CIS"
                /><br />
              </GridTile>
            </GridList>
            <GridList cols={3} cellHeight='auto'>
              <GridTile cols={1}>
                <Checkbox
                  name='actual'
                  label="Dirección Actual"
                  onCheck={this.addDomicilio}
                />
              <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                disabled={!this.state.domicilio&&this.state.editar?false:true}
                name='newaddress'
                onChange={this.handleText}

                  multiLine={true}
                  rows={2}
                  hintText={"Calle Número Colonia Codigo Postal Ciudad Estado"}
                /><br />
              </GridTile>
              <GridTile cols={1}>
                 <DatePicker hintText="Portrait Dialog"
                   disabled={this.state.editar?false:true}
                   name='apertura'
                   onChange={this.handleDates}
                   onTouchTap={this.testing}
                  autoOk={true}
                  floatingLabelText="Fecha de Apertura"/>
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                  disabled={this.state.editar?false:true}
                  name='agrupacion'
                  onChange={this.handleText}
                  hintText="55665544"
                  floatingLabelText="Agrupación"/>
              </GridTile>
            </GridList>
            <GridList cols={4} cellHeight='auto'>
              <GridTile cols={1}>

                <SelectField
                  disabled={this.state.editar?false:true}
                  name='pago'
                  id='pago'
                 floatingLabelText="*Forma de Pago"
                 value={this.state.value}
                 onTouchTap={this.trie}
                 onChange={this.handleChange}
               >
                 <MenuItem value="Anual" primaryText="Anual" />
                 <MenuItem value="Semestral" primaryText="Semestral" />
                 <MenuItem value="Cuatrimestral" primaryText="Cuatrimestral" />
                 <MenuItem value="Trimestral" primaryText="Trimestral" />
                 <MenuItem value="Mensual" primaryText="Mensual" />
               </SelectField>
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                  disabled={this.state.editar?false:true}
                  name='prima'
                  onChange={this.handleText}
                  hintText="55665544"
                  floatingLabelText="Prima Neta"/>
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                  disabled={this.state.editar?false:true}
                  name='financiamiento'
                  onChange={this.handleText}
                  hintText="55665544"
                  floatingLabelText="Financiamiento"/>
              </GridTile>
              <GridTile cols={1}>
                <TextField
                  floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                  underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                  disabled={this.state.editar?false:true}
                  name='importe'
                  onChange={this.handleText}
                  hintText="55665544"
                  floatingLabelText="Importe"/>
              </GridTile>
            </GridList>
          </div>

          {/*Secondary data*/}
          <Toolbar>
            <ToolbarTitle
                text="Datos Secundarios"
            />

          </Toolbar>
          <div style={{padding:'1%'}}>
            <GridList cols={2} cellHeight='auto'>
              <GridTile cols={1}>

                <SelectField
                  disabled={this.state.editar?false:true}
                  name='empresa'
                  fullWidth={true}
                 floatingLabelText="Empresa"
                 value={this.state.empresa}
                 onChange={this.handleEmpresa}
               >
                 <MenuItem value="Inbursa" primaryText="Inbursa" />
                 <MenuItem value="Qualitas" primaryText="Qualitas" />
                 <MenuItem value="Banorte" primaryText="Banorte" />
                 <MenuItem value="Aseguradora XX" primaryText="Aseguradora XX" />
                 <MenuItem value="HDI" primaryText="HDI" />
               </SelectField>
              </GridTile>
              <GridTile cols={1}>

                <SelectField
                  disabled={this.state.editar?false:true}
                  fullWidth={true}
                  name='sector'
                 floatingLabelText="Sector"
                 value={this.state.sector}
                 onChange={this.handleSector}

               >
                 <MenuItem value="Seguros" primaryText="Seguros" />
                 <MenuItem value="Afore" primaryText="Afore" />
                 <MenuItem value="Bancos" primaryText="Bancos" />

               </SelectField>
              </GridTile>

            </GridList>

            <GridList cols={2} cellHeight='auto'>

              <GridTile cols={1}>
                {this.state.sector==='Seguros'?<div>
                  <SelectField
                    disabled={this.state.editar?false:true}
                    fullWidth={true}
                    name='seguros'
                   floatingLabelText="Tipo de Seguro"
                   value={this.state.nextOption}
                   onChange={this.handleNextOption}

                 >
                   <MenuItem value="Operacion" primaryText="Operación" />
                   <MenuItem value="Vida" primaryText="Vida" />
                   <MenuItem value="Accidentes" primaryText="Accidentes y Enfermedades" />
                   <MenuItem value="Daños" primaryText="Daños" />

                 </SelectField>
                </div>:
                this.state.sector==='Afore'?'':
                this.state.sector==='Bancos'?<div>
                <SelectField
                  disabled={this.state.editar?false:true}
                  fullWidth={true}
                  name='banco'
                 floatingLabelText="Actividad"
                 value={this.state.nextOption}
                 onChange={this.handleNextOption}

               >
                 <MenuItem value="Capacitacion" primaryText="Capacitación" />
                 <MenuItem value="Credito" primaryText="Crédito" />


               </SelectField>
                </div>:''}

              </GridTile>

              <GridTile cols={1}>
                {this.state.nextOption==='Capacitacion'?<div>
                  <SelectField
                    disabled={this.state.editar?false:true}
                    fullWidth={true}
                    name='capacitacion'
                   floatingLabelText="Capacitación"
                   value={this.state.lastOption}
                   onChange={this.handleLastOption}

                 >
                   <MenuItem value="Cuento CT" primaryText="Cuento CT" />
                   <MenuItem value="Dinbur" primaryText="Dinbur" />
                   <MenuItem value="TPV" primaryText="TPV" />
                   <MenuItem value="Inburdolor" primaryText="Inburdolor" />
                   <MenuItem value="Pensiones" primaryText="Pensiones" />
                   <MenuItem value="Banco Empresarial" primaryText="Banco Empresarial" />
                   <MenuItem value="Vale Inbursa" primaryText="Vale Inbursa" />
                   <MenuItem value="Vale Despensa" primaryText="Vale Despensa" />
                   <MenuItem value="CT Retiro" primaryText="CT Retiro" />

                 </SelectField>
                </div>:
                this.state.nextOption==='Credito'?<div>
                  <SelectField
                    disabled={this.state.editar?false:true}
                    name='credito'
                    fullWidth={true}
                   floatingLabelText="Crédito"
                   value={this.state.lastOption}
                   onChange={this.handleLastOption}

                 >
                   <MenuItem value="Inburcasa" primaryText="Inburcasa" />
                   <MenuItem value="Tarjeta de Crédito" primaryText="Tarjeta de Crédito" />
                   <MenuItem value="Autoexpress" primaryText="Autoexpress" />
                   <MenuItem value="Crédito Nómina" primaryText="Crédito Nómina" />
                   <MenuItem value="Crédito Corporativo" primaryText="Crédito Corporativo" />
                   <MenuItem value="Crédito Express PYME" primaryText="Crédito Express PYME" />
                   <MenuItem value="Tarjeta Tradicional" primaryText="Tarjeta Tradicional" />
                   <MenuItem value="Crédito Telmex" primaryText="Crédito Telmex" />
                   <MenuItem value="Inburpyme" primaryText="Inburpyme" />
                   <MenuItem value="CT Express" primaryText="CT Express" />
                   <MenuItem value="TDC LCT" primaryText="TDC LCT" />
                   <MenuItem value="Crédito Personal" primaryText="Crédito Personal" />
                   <MenuItem value="Express TPV" primaryText="Express TPV" />
                   <MenuItem value="Construye" primaryText="Construye" />

                 </SelectField>
                </div>:
                this.state.nextOption==='Daños'?<div>
                <SelectField
                  disabled={this.state.editar?false:true}
                  name='danhos'
                  fullWidth={true}
                 floatingLabelText="Daños"
                 value={this.state.segurodaños}
                 onChange={this.handleSeguroDaños}

               >
                 <MenuItem value="Colectivo" primaryText="Colectivo" />
                 <MenuItem value="Autos y Camiones" primaryText="Autos y Camiones" />
                 <MenuItem value="Paquetes" primaryText="Paquetes" />
                 <MenuItem value="Responsabilidad Civil" primaryText="Responsabilidad Civil" />
                 <MenuItem value="Transportes" primaryText="Transportes" />
                 <MenuItem value="Equipo Corporativo" primaryText="Equipo Corporativo" />


               </SelectField>
                </div>:
                this.state.nextOption==='Accidentes'?<div>
                <SelectField
                  disabled={this.state.editar?false:true}
                  name='accidentes'
                  fullWidth={true}
                 floatingLabelText="Accidentes y Enfermedades"
                 value={this.state.segurodaños}
                 onChange={this.handleSeguroDaños}

               >
                 <MenuItem value="Gastos Médicos" primaryText="Gastos Médicos" />
                 <MenuItem value="Accidentes" primaryText="Accidentes" />


               </SelectField>
             </div>:''}

              </GridTile>
            </GridList>
            {this.state.segurodaños==='Autos y Camiones'&&this.state.nextOption==='Daños'?
              <div>
              <GridList cellHeight='auto'>
                <GridTile>
                  <SelectField
                    disabled={this.state.editar?false:true}
                    name='subrama'
                    fullWidth={true}
                   floatingLabelText="Subrama"
                   value={this.state.subrama}
                   onChange={this.handleSubrama}

                 >
                   <MenuItem value="Auto" primaryText="Auto" />
                   <MenuItem value="Taxi" primaryText="Taxi" />
                   <MenuItem value="Camión" primaryText="Camión" />




                 </SelectField>
                </GridTile>
                <GridTile>
                  <SelectField
                    disabled={this.state.editar?false:true}
                    name='modalidad'
                    fullWidth={true}
                   floatingLabelText="Modalidad"
                   value={this.state.modalidad}
                   onChange={this.handleModalidad}

                 >
                   <MenuItem value="Individual" primaryText="Individual" />
                   <MenuItem value="Grupal" primaryText="Grupal" />
                   <MenuItem value="Colectivo" primaryText="Colectivo" />
                   <MenuItem value="Flotilla" primaryText="Flotilla" />


                 </SelectField>
                </GridTile>

              </GridList>

            </div>
            :''}

          </div>
          <Toolbar>
            <RaisedButton
              style={{margin:'2% 0 '}}
              label='Guardar'
              fullWidth={true}
              onTouchTap={this.state.user.is_staff?this.newAdminPoliza:this.enviarPoliza}/>

          </Toolbar>
          {/*cars form*/}
          {this.state.poliza.danhos==='Autos y Camiones'?
            <div>
              <GridList cols={1} cellHeight='auto' style={{padding:'1%'}}>
                <GridTile>
                  <RaisedButton
                    primary={true}
                    label="Registro de Vehículos"
                    disabled={this.state.vehiculos.length>=1?true:false}
                    fullWidth={true}
                    onTouchTap={this.handleOpen}/>
                    <Dialog
                     title="Registro de Vehículos"
                     autoScrollBodyContent={true}
                     modal={false}
                     open={this.state.openModal}
                     onRequestClose={this.handleClose}
                   >
                     <VehiculosForm id={this.state.elId} pasala={this.pasala}/>
                   </Dialog>
                </GridTile>
              </GridList>
              <div style={{padding:'1%'}}>
                <h3>Vehículos Registrados</h3>
                {this.state.vehiculos.map((v,key)=>{
                  return(
                    <Card key={key}>
                      <CardHeader
                        title={v.marca}
                        subtitle={v.placa}
                        actAsExpander={true}
                        showExpandableButton={true}
                      />
                      <CardText expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                      </CardText>
                    </Card>
                  );
                }).reverse()}
              </div>
            </div>:''}

          </form>
        </Paper>

      </div>
    );
  }
}
export default NewPoliza;
