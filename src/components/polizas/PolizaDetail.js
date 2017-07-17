import React, {Component} from 'react';
import api from '../../Api/Django';
import {Paper,Toolbar,ToolbarTitle,ToolbarGroup} from 'material-ui';


class PolizaDetail extends Component{
  constructor(){
    super()
    this.state={
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
  render(){
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
            <ToolbarTitle text={'Poliza# '+poliza.id}/>
            <ToolbarTitle text={'Asesor: '+poliza.asesor.username}/>            
          </Toolbar>
        </Paper>

      </div>
    );
  }
}
export default PolizaDetail;
