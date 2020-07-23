import React, { Component } from 'react'

export class Experience extends Component {
  render() {
    const { data = {} } = this.props;

    const {
      skillmessage = "",
      education = [],
      work = [],
      skills = [],
    } = data;

    console.log(data)
    console.log(education)
    console.log(education.map(e => e.school))

    const myEducation = education.map(e => {
      return (
        <div key={e.school}><h3>{e.school}</h3>
          <p className="info">{e.degree} <span>&bull;</span><em className="date">{e.graduated}</em></p>
          <p>{e.description}</p>
        </div>
      )
    })
    
    const myWorkExperience = work.map(w => {
      return (
        <div key={w.company}><h3>{w.company}</h3>
          <p className="info">{w.title}<span>&bull;</span><em className="date">{w.years}</em></p>
          <p>{w.description}</p>
        </div>
      )
    })

    const mySkills = skills.map(s => {
        // var className = 'bar-expand ' + s.name
      return (
        return (
          <li key={s.competences.}
        )
      )
    })

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {myEducation}
              </div>
            </div>
          </div>

        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {myWorkExperience}
          </div>
        </div>
      </section>
    )
  }
}

export default Experience;
