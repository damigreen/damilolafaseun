import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {data = {}} = this.props;
    

    const {
      name = "",
      occupation = "",
      description = "",
      city = "",
      socials = [],
    } = data;


    const networks = socials.map(s => <li key={s.name}><a href={s.url}><i className={s.className}></i></a></li>)
      


    return (
      <header id="home">

        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            {/* <li><a className="smoothscroll" href="#home">Resume</a></li> */}
            <li><a className="smoothscroll" href="#resume">Experience</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>

        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hello, I'm</h1>
            <h1 className="responsive-headline">{name}</h1>
            <h3><span>{occupation}</span></h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

        
      </header>
    )
  }
}

export default Header;
