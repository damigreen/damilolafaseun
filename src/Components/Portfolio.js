import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    const {data = {}} = this.props;

    const {
      projects = [],
    } = data;

    const myProjets = projects.map(project => {
      const projectImage = 'images/portfolio/'+project.image;
      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={project.url} title={project.title}>
              <div className="link-icon"><i className="fa fa-link"></i></div>
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      )
    })

    return (
      <section id="portfolio">
        <div className="row">

          <div className="twelve columns collapsed">
            <h1>My Works</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {myProjets}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
