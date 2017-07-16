import React, { Component } from 'react';
import './UserProfile.css';
import Nav from '../nav/Nav';
import FontAwesome from 'react-fontawesome';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Footer from '../footer/Footer';

const style = {
  marginRight: 20,
};
 
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },


  slide: {
    padding: 10,
  },
};

class UserProfile extends Component {
     constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }
    
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('userToken'));
        if (!user){
            this.props.history.push('/login');
        }
    }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

    render(){

        return(
            <div>
          		<div className='barra'>
					<Nav history={this.props.history} />
				</div>
          		<div className='datos_user'>
          			<div className='photo_user'>
          				<img  src='https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'/>
          			</div>
          			<div className='data_user'>
          				<h4>Brenda Ortega Ortega</h4>
          				<p>Hidalgo, Mexico</p>
          				<div>
          				     <FontAwesome name='car' className='' size='2x'/>
          				     <FontAwesome name='car' className='' size='2x'/>
          				     <FontAwesome name='car' className='' size='2x'/>
          				</div>
          			</div>
          		</div>
          		<div className='tabs'>
          		 <Tabs
		          onChange={this.handleChange}
		          value={this.state.slideIndex}

		        >
		          <Tab label="Tips" value={0} style={{backgroundColor:'white', color:'#57658E', borderBottom:'solid 1px #57658E'}} />
		          <Tab label="Mis Productos" value={1}  style={{backgroundColor:'white', color:'#57658E', borderBottom:'solid 1px #57658E' }}/>
		          <Tab label="Mi saldo" value={2}  style={{backgroundColor:'white', color:'#57658E', borderBottom:'solid 1px #57658E' }}/>
		        </Tabs>
		        <SwipeableViews
		          index={this.state.slideIndex}
		          onChangeIndex={this.handleChange}
		        >
		          <div>
		            <h2 style={styles.headline}>Tabs with slide effect</h2>
		            Swipe to see the next slide.<br />
		            <h2 style={styles.headline}>Tabs with slide effect</h2>
		            Swipe to see the next slide.<br />
		            <h2 style={styles.headline}>Tabs with slide effect</h2>
		            Swipe to see the next slide.<br />
		            <h2 style={styles.headline}>Tabs with slide effect</h2>
		            Swipe to see the next slide.<br />
		          </div>
		          <div style={styles.slide}>
		            slide n°2
		          </div>
		          <div style={styles.slide}>
		            slide n°3
		          </div>
		        </SwipeableViews>
		        </div>

		        <div className='btn_float'>
		         	<FloatingActionButton style={{backgroundColor:'#'}} backgroundColor={'#57658E'} >
				      <ContentAdd />
				    </FloatingActionButton>
				</div>
				<Footer />
            </div>
        );
    }
}

export default UserProfile;