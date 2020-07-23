import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import About from './Components/About';
import Experience from './Components/Experience';

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
        <Header data={this.state.portfolioData.main} />
        <About data={this.state.portfolioData.main} />
        <Experience data={this.state.portfolioData.resume} />
      </div>
    )
  }
}

export default App;
