import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PolizasPage extends Component {
    render(){
        return(
            <h1>Polizas</h1>
        );
    }
}

PolizasPage.propTypes = {
  data: PropTypes.func  
};

export default PolizasPage;