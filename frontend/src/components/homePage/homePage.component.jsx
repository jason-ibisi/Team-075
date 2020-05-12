import React from 'react';
import './homePage.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as Vehicle } from '../../assests/vehicle.svg';
// import { ReactComponent as Wave } from '../../assests/wave.svg';

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      lat: 0.00,
      lng: 0.00
    }
  }

  componentDidMount(){
    
    if ("geolocation" in navigator) {
      window.navigator.geolocation.getCurrentPosition(
        success => this.setState((prevState, preProps) => (
          { lat: success.coords.latitude, lng: success.coords.longitude }))
      );
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    
  }

  sendHelp = () => {
    console.log(this.state)
    fetch('http://localhost:3001/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: {
        location: {
          lat: this.state.lat,
          lng: this.state.lng
        },
        reporter: '',
        phoneNo: 0,
        userId: '',

      }
    })
    .then(data => {
      console.log(data)
      
    })
    .catch(error => console.log)
  }
  render(){
      return (
        <div className='homepage'>
          <div className='homepage-container'>
            <div>
              <h1 className='homepage-title'>Have you been involved in an accident?</h1>
              <p className='homepage-desc'>
                Press the help button and help will reach you soon.<br></br> 
                If you are reporting as an eye witness please make <br></br>
                use of the I-Witness button 
              </p>
            </div>
          </div>
            <CustomButton className='custom-button center' onClick={ this.sendHelp }> Help! </CustomButton>
            <CustomButton className='i-witness'>Report as an I-Witness</CustomButton>
            <div className='homepage-svg-container'>
              <Vehicle className='homepage-svg'/>
            </div>
        </div>
    )
  }
}

export default HomePage;