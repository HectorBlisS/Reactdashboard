import React, { PropTypes } from 'react';
import {GridList, GridTile, Tabs, Tab, Paper, List, ListItem, RaisedButton, Dialog} from 'material-ui';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';
import toastr from 'toastr';
import Yes from 'material-ui/svg-icons/action/check-circle';
import No from 'material-ui/svg-icons/navigation/cancel';
import Mail from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';
import Port from 'material-ui/svg-icons/action/work';
import Ev from 'material-ui/svg-icons/action/event';
import Fing from 'material-ui/svg-icons/action/fingerprint';
import Loc from 'material-ui/svg-icons/communication/location-on';


class CandidatoDetail extends React.Component {

  constructor(){
    super()
    this.state={
      value:'a',
      candidato:{}
    }
  }
  componentWillMount(){
    console.log(this.props.match.params.candidatoId)
    api.getCandidato(this.props.match.params.candidatoId).then(r=>{
      this.setState({candidato:r})
      console.log(r)
    })
  }

  handleChange = (value) => {
    this.setState({value: value});
  };
  render () {
    const candidato = this.state.candidato
    return(
      <div style={{padding:'1% 3%'}}>
            <div>
                <GridList cellHeight="auto" cols={5}>
                  <GridTile cols={2} style={{padding:'0 1%'}}>
                      <h2>{candidato.nombre}</h2>
                        <RaisedButton label="Completar Info" fullWidth={true}
                          disabled={candidato.candidato?true:false  }/>
                        <Dialog>

                        </Dialog>

                    <List style={{textAlign:'left'}}>

                      <ListItem disabled primaryText={candidato.correo} leftIcon={<Mail/>} />
                      <ListItem disabled primaryText={candidato.telefono} leftIcon={<Phone/>} />
                      <ListItem disabled primaryText={moment(candidato.fecha_reclutamiento).format('LL')} leftIcon={<Ev/>} />
                      <ListItem disabled primaryText={candidato.candidato?'Candidato':'Asesor'} leftIcon={<Port/>} />
                        {candidato.candidato?'':
                          <div>
                            <ListItem disabled primaryText={candidato.oficina} leftIcon={<Loc/>} />
                            <ListItem disabled primaryText={candidato.tipo} leftIcon={<Fing/>} />
                          </div>}

                    </List>
                  </GridTile>
                  <GridTile cols={3} style={{padding:'0 1%'}}>
                    <Tabs
                      inkBarStyle={{backgroundColor:'#57658e'}}
                      tabItemContainerStyle={{backgroundColor:'white'}}

                      value={this.state.value}
                      onChange={this.handleChange}>
                      <Tab
                        style={{color:'#57658e'}}
                        label="Archivos" value="a">
                        <Paper zDepth={2} style={{width:100, height:100}}/>
                      </Tab>
                      <Tab
                        style={{color:'#57658e'}}
                        label="Metas" value="b">Metas</Tab>
                      <Tab
                        style={{color:'#57658e'}}
                        label="Cursos" value="c">Cursos</Tab>

                    </Tabs>
                  </GridTile>
                </GridList>
            </div>

      </div>
    )
  }
}

export default CandidatoDetail;
