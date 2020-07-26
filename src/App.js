import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Footer from './components/Footer';

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
      <div style={{backgroundColor: '1px solid red'}} className="App">
        <Header data={this.state.portfolioData.main} />
        <About data={this.state.portfolioData.main} />
        <Experience data={this.state.portfolioData.resume} />
        <Portfolio data={this.state.portfolioData.portfolio} />
        <Contact data={this.state.portfolioData.main} />
        <Footer data={this.state.portfolioData.main} />
      </div>
    )
  }
}

export default App;
