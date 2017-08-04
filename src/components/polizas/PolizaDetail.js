import React, {Component} from 'react';
import api from '../../Api/Django';
import {Paper,Toolbar,ToolbarTitle,ToolbarGroup} from 'material-ui';
import {Tabs, Tab} from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NewPoliza from './NewPoliza';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Link} from 'react-router-dom';


class PolizaDetail extends Component{
  constructor(){
    super()
    this.state={
      open:false,
      value:'b',
      newPolicy:{tipo:'',valor:''},
      polizas:[
        {id:1,
        tipo:'auto',
        valor:50000},
        {id:2,
        tipo:'auto',
        valor:50000},
        {id:3,
        tipo:'auto',
        valor:50000}

      ],
      poliza:{
        asesor:{
          username:''
        }
      }
    }
  }
  componentWillMount(){

    api.getPolicy(this.props.match.params.polizaId).then(r=>{
      this.setState({poliza:r})
    })
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};
addPolicy=()=>{
  this.state.polizas.push(this.state.newPolicy)
  this.setState({open:false})
}
  render(){
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Guardar"
        primary={true}

        onTouchTap={this.addPolicy}
      />,
    ];
    const poliza = this.state.poliza
    return(
      <div>
        <Paper style={{maxWidth:'80%' ,
          margin:'0 auto',
          marginTop:30,
          textAlign:'left',
          marginBottom: 25,
        }}>
          <Toolbar>
            <ToolbarTitle text={'Cliente# '+poliza.id}/>
            <ToolbarTitle text={'Nombre del Cliente '}/>
          </Toolbar>

          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="Info del Cliente" value="a">
              <div>
                <h2 style={styles.headline}>CLient info</h2>
                <p>

                </p>
              </div>
            </Tab>
            <Tab label="Polizas" value="b">
              <div style={{position:'relative'}}>

                {this.state.polizas.map(poliza=>{
                  return(

                      <Card key={poliza.id} style={{marginBottom:'1%'}}>
                       <CardHeader
                         title={'Poliza de '+poliza.tipo}
                         subtitle={'Folio: '+poliza.id}
                         actAsExpander={true}
                         showExpandableButton={true}
                       />
                       <CardActions>
                         <Link to='/'>
                           <RaisedButton label="Detalle" fullWidth={true}/>
                         </Link>
                       </CardActions>
                       <CardText expandable={true}>
                         <h3>Valor de la poliza: {poliza.valor}</h3>
                         <p>Número de Recibos pagados: 2/4</p>

                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                         Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                         Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                       </CardText>
                     </Card>

                  )
                }).reverse()}


                  <Dialog
                    contentStyle={{width:'50%'}}
                    autoScrollBodyContent={true}
                    title="Nueva Poliza"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    <NewPoliza/>
                  </Dialog>

                <FloatingActionButton
                  secondary={true}
                  style={{position:'absolute', top:-30, right:-30}}
                  tooltip="Font Icon"
                  onTouchTap={this.handleOpen}>
                  <ContentAdd />
                </FloatingActionButton>
              </div>
            </Tab>
          </Tabs>
        </Paper>

      </div>
    );
  }
}
export default PolizaDetail;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
