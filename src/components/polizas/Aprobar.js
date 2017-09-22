import React from 'react'
import api from '../../Api/Django';
import Toggle from 'material-ui/Toggle';
import toastr from 'toastr';


class Aprobar extends React.Component {

  constructor(){
    super()
    this.state={
      user:{
        profile:{}
      }
    }
  }
  componentWillMount(){
    api.getU(this.props.id).then(r=>{
       this.setState({stat:r.profile.aprobado, user:r})
    })
  }

  aprobar=()=>{
    api.updateTipo(this.state.user.profile.id, {aprobado:!this.state.stat}).then(r=>{
      toastr.warning('Se ha cambiado el estado del usuario')
    }).catch(e=>{
      toastr.error('naaa')
      console.log(e)
    })

  }
  render () {
    console.log(this.state.user.profile)
    return(
      <div>
      {this.state.user.profile.asesorId||this.state.user.profile.tipo==='asesor'?
        <Toggle
          label={this.state.user.profile.aprobado?'Aprobado':'No Aprobado'}
          onToggle={this.aprobar}
          defaultToggled={this.state.stat}
          thumbStyle={{backgroundColor:'red'}}
          trackStyle={{backgroundColor:'#ff9d9d'}}
          thumbSwitchedStyle={{backgroundColor:'rgb(87, 101, 142)'}}
          trackSwitchedStyle={{backgroundColor:'rgba(87, 101, 142,.5)'}}

        />:''}
      </div>
    )
  }
}

export default Aprobar;
