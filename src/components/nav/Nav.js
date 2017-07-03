import React, {Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {Avatar, MenuItem, Menu, Popover} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../assets/logodipra.png';
// import {signOut} from '../../../Api/firebase';


class MainBar extends Component{

    state = {
        barra:false,
        user: null,
        open: false
    };

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    onScroll = () => {
        let y = window.scrollY;
      // console.log(window.scrollY);
      if (y>100) this.setState({barra:true});
      if (y<100) this.setState({barra:false});
    };

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
        const user = JSON.parse(localStorage.getItem('userInfo'));
        if(user){
            console.log('yes');
            this.setState({user:user});
        } else{
            console.log('ño');
        }
    }

    render(){
        const {barra, user} = this.state;
        return(
            <div
                onScroll={this.onScroll}
                ref="mainbar"
                className={barra ? "bar-container":"beginning"}>
                <Link to='/'>
                    <img className='log' src={logo}/>
                </Link>
                <div className="links">
                    <Link className='pestana' to='/form'>
                        <button>
                            Quieres convertirte en asesor?
                        </button> 
                    </Link>
                    <Link className='pestana'
                        id="explorar"
                        style={styles.elLink}
                        to="/servicios" >
                        Servicios
                    </Link>
                    <Link className='pestana'
                        id="explorar"
                        style={styles.elLink}
                        to="/contacto" >
                        Contacto
                    </Link>
                    <span style={{color:'white'}}>{" | "}</span>
                    {!user && <Link
                        style={styles.elLink}
                        to="/login" >
                        Iniciar
                    </Link>}

                    {
                        user && <Avatar
                            style={{float:'right', cursor:'pointer'}}
                            src={user.photoURL}
                            onTouchTap={this.handleTouchTap}
                        />
                    }

                    <div>
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            onRequestClose={this.handleRequestClose}
                        >
                         
                        </Popover>
                    </div>

                </div>



            </div>
        );
    }
}

const styles = {
    elLink: {
        textDecoration:'none'
    }
};




export default MainBar;