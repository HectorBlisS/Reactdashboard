import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/moment/moment.js'
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCandidatos} from './actions/candidatosActions';
 //experimento con paginacion
import {loadClientes} from './actions/clientesActions';

injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadCandidatos());
store.dispatch(loadClientes());









// const Main = () => (
//     <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
//         <App />
//     </MuiThemeProvider>
// );

const Main = () => (
    <MuiThemeProvider >
        <App />
    </MuiThemeProvider>
);

const WithRouter = () => (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);

const WithProvider = () => (
    <Provider store={store}>
        <WithRouter/>
    </Provider>
);


ReactDOM.render(<WithProvider />, document.getElementById('root'));

registerServiceWorker();
