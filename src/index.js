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


injectTapEventPlugin();







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


ReactDOM.render(<WithRouter />, document.getElementById('root'));

registerServiceWorker();


