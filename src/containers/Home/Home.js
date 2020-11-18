import React, { Component } from 'react';
import HomeContainer from '../../styles/HomeContainer';
import Button from '../../styles/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  componentDidMount() {
    this.parseURL()
  }

  parseURL() {
    let url = window.location.href;
    console.log(url)
  }

  render() {
    return(
      <HomeContainer>
        <h1>Client Middleware</h1>
        <Button>
          <p>Log In with PI</p>
        </Button>
      </HomeContainer>
    )
  }
}

export default Home;