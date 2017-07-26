import React, { Component } from 'react';
import ClienteForm from './ClienteForm';




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

                <ClienteForm
                    course={this.state.course}
                    errors={this.state.errors}

                />
            </div>

        );
    }
}

export default NewPolizaPage;
