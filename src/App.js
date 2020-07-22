import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        portfolioData: {} 
      };

      this.getData = this.getData.bind(this);
  }

  getData () {
    axios.get('./portfolioData.json')
      .then(response => {
        this.setState({portfolioData: response.data})
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getData();
  }
  
  render() {

    return (
      <div className="App">
        <Header data={this.state.portfolioData} />
      </div>
    )
  }
}

export default App;
