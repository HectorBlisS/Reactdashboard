import React, {Component} from 'react';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';
import {Link} from 'react-router-dom';
import toastr from 'toastr';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/search';
import Otro from 'material-ui/svg-icons/action/list';
import { DatePicker, IconButton, TextField} from 'material-ui';
import Info from 'material-ui/svg-icons/action/info';
import Delete from 'material-ui/svg-icons/action/delete';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import MainLoader from '../common/MainLoader';
// import {
//   Table,
//   TableBody,
//   TableHeader,
//   TableHeaderColumn,
//   TableRow,
//   TableRowColumn,
// } from 'material-ui/Table';


const DetalleAdmin = ({value}) => {
    return(
        <div>
            <Link style={{color:'#000', textDecoration:'none'}}
                  to={'/polizas/detalle/'+value}>
                <IconButton tooltip="Detalle">
                    <Info />
                </IconButton>
            </Link>
            <IconButton tooltip="Borrar">
                <Delete />
            </IconButton>
        </div>
    )
}
const Detalle = ({value}) => {
    return(
        <div>
            <Link style={{color:'#000', textDecoration:'none'}}
                  to={'/polizas/detalle/'+value}>
                <IconButton tooltip="Detalle">
                    <Info />
                </IconButton>
            </Link>

        </div>
    )
}
const CustomColumn = ({value}) => <p>{value}</p>
const CustomColumn2 = ({value}) => {
  moment.locale('es')
  let fecha = parseInt(value,10)
  let fecha2=moment(fecha).startOf().fromNow();
  fecha=moment(fecha).format('LL')
  return(<p>{fecha}<br/><span style={{color:'#9e9e9e'}}>{fecha2}</span></p>)
}
const griddleStyles={
  styles:{
    Table:{width:'100%'},
    SettingsWrapper:{display:'none'},
    Filter:{
        display:'none',
      position:'absolute',
        top:-10,
        left:10,
      padding:'1% 3%',
      width:'30%',
      margin:'2% 0',
      borderRadius:'5px',
      borderColor:'rgb(224, 224, 224)',
      borderWidth:'1px',
      height:'1vh',
      fontSize:'1rem',
      color:'#9e9e9e'},

    Row:{
      boxShadow:'0 1px 0 0 rgb(224, 224, 224)',
    },
    PageDropdown:{
        display:'none',
      margin:'1%',
      width:'5%',
        color:'blue',
        backgroundColor:'white',

    },
     Pagination:{
        display:'none',
      margin:'2% 0'
     }



  }
}

class PolizaList extends Component{

  constructor(){
    super()
    this.state={
    user:{
        is_staff:'',
    },
      loading:true,
        es:'',
      polizas:[],
        search:'',
        search2:'',
        next:'',
        prev:'',
        buscador:'',
        buscador1:''
    }
  }


  componentWillMount(){

    api.getPolicys().then(r=>{
        console.log(r)
      this.setState({polizas:r.results.reverse(),loading:false,next:r.next,prev:r.previous})
      console.log(this.state.polizas)
    })//.then(r=>{this.dates()})


  }




    onChange=(event, value)=>{
        let a = Date.parse(value)
          a = a.toString()
        this.setState({search:a})
        console.log('date from',a)
    }
    onChange2=(event, value)=>{
        let a = Date.parse(value)
        a = a.toString()
        this.setState({search2:a})
        console.log('date to',a)
    }
    restart=()=>{
      this.setState({search:'', search2:''})
    }
    nextPage=()=>{
        api.getPolicys(this.state.next).then(r=>{
            console.log(r)
            this.setState({polizas:r.results.reverse(),loading:false,next:r.next,prev:r.previous})
            console.log(this.state.polizas)
        })
    }
    prevPage=()=>{
        api.getPolicys(this.state.prev).then(r=>{
            console.log(r)
            this.setState({polizas:r.results.reverse(),loading:false,next:r.next,prev:r.previous})
            console.log(this.state.polizas)
        })
    }
    mysearch=()=>{
      this.setState({loading:true})
        api.getPolicys(this.state.buscador).then(r=>{
            console.log(r)
            this.setState({polizas:r.results.reverse(),loading:false,next:r.next,prev:r.previous, buscador1:'', buscador:''})
            console.log(this.state.polizas)
        })
    }
    hsearch=(e)=>{
      let buscador = this.state.buscador
      buscador='http://localhost:8000/api/policys/?q=' + e.target.value
        this.setState({buscador, buscador1:e.target.value})

    }
    todos=()=>{
        api.getPolicys('http://localhost:8000/api/policys/').then(r=>{
            console.log(r)
            this.setState({polizas:r.results.reverse(),loading:false,next:r.next,prev:r.previous})
            console.log(this.state.polizas)
        })
    }


  dates=()=>{
    moment.locale('es')
    for (let p in this.state.polizas){
      let fecha = this.state.polizas[p].apertura
      let fecha2=moment(fecha).startOf().fromNow();
      fecha=moment(fecha).format('LL')

      let polizas = this.state.polizas;
      polizas[p]['fecha_poliza'] = fecha
      polizas[p]['fecha_poliza2'] = fecha2
      this.setState({polizas});
    }
  }

  render(){

      let filtered = this.state.polizas.filter((poliza)=>{
          if(this.state.buscador1!==""){
              return poliza.emisor.toLowerCase().indexOf(
                  this.state.buscador1.toLowerCase())!== -1 ||
                  poliza.carpeta.toLowerCase().indexOf(
                      this.state.buscador1.toLowerCase())!== -1 ||
                  poliza.idpoliza.toLowerCase().indexOf(
                      this.state.buscador1.toLowerCase())!== -1 ||
                  poliza.asesor.username.toLowerCase().indexOf(
                  this.state.buscador1.toLowerCase())!== -1 ||
                  poliza.asesor.asesor_user.id_asesor.toLowerCase().indexOf(
                      this.state.buscador1.toLowerCase())!== -1 ||
                  poliza.cliente.idcliente.toLowerCase().indexOf(
                      this.state.buscador1.toLowerCase())!== -1

          }

          if(this.state.search===''&&this.state.search2===""){
              return poliza.apertura.indexOf(
               this.state.search)!== -1
          }else{
              return (poliza.apertura >= this.state.search &&
                  poliza.apertura <= this.state.search2)

          }


      })


    return(
      <div style={{position:'relative', paddingTop:'10%'}}>
        {this.state.loading && <MainLoader/>}
        {/*<Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Asesor</TableHeaderColumn>
              <TableHeaderColumn>Cliente</TableHeaderColumn>
              <TableHeaderColumn>Pago</TableHeaderColumn>
              <TableHeaderColumn>Fecha de Apertura</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.polizas.map(poliza=>{
              return(
                <TableRow key={poliza.id}>
                  <TableRowColumn>
                    <Link
                      style={{textDecoration:'none', color:'black'}}
                      to={"/polizas/detalle/"+poliza.id}>{poliza.idpoliza}</Link>
                  </TableRowColumn>
                  <TableRowColumn>{poliza.asesor.first_name?poliza.asesor.first_name:poliza.asesor.username}</TableRowColumn>
                  <TableRowColumn>
                    {poliza.cliente.rsocial?poliza.cliente.rsocial:poliza.cliente.snombre?poliza.cliente.pnombre + ' ' + poliza.cliente.snombre+' ' + poliza.cliente.apaterno:poliza.cliente.pnombre + ' ' + poliza.cliente.apaterno}
                  </TableRowColumn>
                  <TableRowColumn>
                    {poliza.pago}
                  </TableRowColumn>
                  <TableRowColumn onMouseOver={this.handlePop}>
                    {poliza.fecha_poliza}<br/>
                  <span  style={{color:'#9e9e9e'}}>{poliza.fecha_poliza2}</span>

                  </TableRowColumn>
                </TableRow>
              );
            }).reverse()}

          </TableBody>
        </Table>*/}
        <div style={{position:'absolute', left:10, top:15, textAlign:'left', display:'flex', }}>
            <TextField
                floatingLabelFocusStyle={{color:'rgb(87, 101, 142)'}}
                underlineFocusStyle={{borderColor:'rgb(87, 101, 142)'}}
                onChange={this.hsearch}
                hintText="Busca por carpeta, emisor, poliza, asesor ID, o cliente ID"
                value={this.state.buscador1}/>
            <IconButton onTouchTap={this.mysearch} tooltip="Buscar">
                <Search/>
            </IconButton>
            <IconButton onTouchTap={this.todos} tooltip="Todos">
                <Otro/>
            </IconButton>

        </div>
        <div style={{position:'absolute', right:10, top:0, textAlign:'left', display:'flex', }}>
          <DatePicker onChange={this.onChange} autoOk={true} hintText="Fecha de Inicio"/>
          <DatePicker onChange={this.onChange2} autoOk={true} hintText="Fecha Final"/>

        </div>

        <Griddle
          data={filtered}
          plugins={[plugins.LocalPlugin]}
          styleConfig={griddleStyles}
            components={{}}>
            <RowDefinition>
                <ColumnDefinition id="id" title=" " customComponent={Detalle} />
                <ColumnDefinition id="emisor" title="Emisor" customComponent={CustomColumn} />
                <ColumnDefinition id="carpeta" title="Carpeta" customComponent={CustomColumn} />
            <ColumnDefinition id="idpoliza" title="Poliza" customComponent={CustomColumn} />
            <ColumnDefinition id={"asesor.profile.asesorId"} title="Asesor" customComponent={CustomColumn}/>
            <ColumnDefinition id={"cliente.idcliente"} title="Cliente" customComponent={CustomColumn}/>
            <ColumnDefinition id={"apertura"}  title="Fecha de registro" customComponent={CustomColumn2}/>

          </RowDefinition>
        </Griddle>
          <div style={{display:'flex', justifyContent:'center', marginTop:'1%', marginBottom:'1%'}}>
              <RaisedButton backgroundColor={'#57658e'} labelColor={'#fff'} label={'prev'} onTouchTap={this.prevPage} style={this.state.prev!== null ? {display:'block'}:{display:'none'}}/>
              <RaisedButton backgroundColor={'#57658e'} labelColor={'#fff'} label={'next'} onTouchTap={this.nextPage} style={this.state.next!== null ? {display:'block'}:{display:'none'}}/>
          </div>
      </div>
    );
  }
}

export default PolizaList;
