import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { data = {} } = this.props;
    const {
      socials = [],
    } = data;

    const mySocialNetworks = socials.map(social => {
      return (
        <li key={social.name}><a href={social.url}><i className={social.className}></i></a></li>
      );
    })

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {mySocialNetworks}
            </ul>

            <ul className="copyright">
              <li>Damilola Faseun  <span>&copy;2020</span></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    )
  }
}

export default Footer
