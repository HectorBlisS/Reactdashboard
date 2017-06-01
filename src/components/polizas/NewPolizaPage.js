import React, { Component } from 'react';
import PolizaForm from './PolizaForm';
import { Toolbar, ToolbarTitle } from 'material-ui';
import {cyan500} from 'material-ui/styles/colors';



class NewPolizaPage extends Component {
    state = {
      course: {
          title:'test',
          errors: {
              title:''
          },
          saving: false
      }
    };

    render(){
        return(
            <div>
                <Toolbar
                    style={{backgroundColor:cyan500}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Polizas > Nueva poliza" />
                </Toolbar>
                <PolizaForm
                    course={this.state.course}
                    errors={this.state.errors}

                />
            </div>

        );
    }
}

export default NewPolizaPage;