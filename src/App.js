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
    const {portfolioData = {}} = this.state;

    return (
      <div style={{backgroundColor: '1px solid red'}} className="App">
        <Header data={portfolioData.main} />
        <About data={portfolioData.main} />
        <Experience data={portfolioData.resume} />
        <Portfolio data={portfolioData.portfolio} />
        <Contact data={portfolioData.main} />
        <Footer data={portfolioData.main} />
      </div>
    )
  }
}

export default App;
