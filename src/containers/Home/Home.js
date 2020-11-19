import React, { Component } from 'react';
import HomeContainer from '../../styles/HomeContainer';
import Button from '../../styles/Button';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      gotUUID: true,
    }
  }

  componentDidMount() {
    if(localStorage.getItem('UUID' !== null || undefined)) {
      this.setState({ gotUUID: true })
    }
  }

  parseURL() {
    let url = window.location.href;
    console.log(url)
  }

  onButtonPress() { 
    // if(localStorage.getItem('UUID') === null || undefined) {
    //   return alert('There was a problem.')
    // }

  }

  render() {
    return(
      <HomeContainer>
        <h1>Client Middleware</h1>
        <form action="demo://authenticate" target="_blank">
          <Button type="submit" onClick={() => this.onButtonPress()}>
            <p>Log In with PI</p>
          </Button>          
        </form>
      </HomeContainer>
    )
  }
}

export default Home;