import React from 'react';
import './homePage.styles.css';
import CustomButton from '../custom-button/custom-button.component';

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
        lat: this.state.lat,
        lng: this.state.lng
      }
    })
    .then(data => console.log)
    .catch(error => console.log)
  }
  render(){
      return (
        <div className='homepage'>
          <h1>Have you been involved in an accident?</h1>
          <p>
            Press the help button and help will reach you soon. 
            If you are reporting as an eye witness please make use of the Eye witness button 
          </p>
          <CustomButton className='custom-button' onClick={ this.sendHelp }> Help! </CustomButton>
          <div></div>
        </div>
    )
  }
}

export default HomePage;