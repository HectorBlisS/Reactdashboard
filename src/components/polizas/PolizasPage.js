import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import NewPolizaPage from './NewPolizaPage';



class PolizasPage extends Component {
    render(){
        return(
            <div>

                <Route path={`${this.props.match.url}/new`} component={NewPolizaPage} />

            </div>
        );
    }
}

PolizasPage.propTypes = {
  data: PropTypes.func  
};

export default PolizasPage;