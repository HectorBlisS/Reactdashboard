import React, { Component } from 'react';
import PolizaForm from './PolizaForm';




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

                <PolizaForm
                    course={this.state.course}
                    errors={this.state.errors}

                />
            </div>

        );
    }
}

export default NewPolizaPage;
