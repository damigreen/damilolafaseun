import React, { Component } from 'react'
import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  // height: '50vh',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center'
};


export class Experience extends Component {
  render() {
    const { data = {} } = this.props;

    const {
      skillmessage1 = "",
      skillmessage2 = "",
      education = [],
      work = [],
      skills = {},
    } = data;

    
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

    var mySkillNames = Object.keys(skills)

    const mySkills = mySkillNames.map(sk => {
      return (
        <Card style={{marginTop: '70px'}} title={sk} >
          {skills[sk].map(s => {
            var iconUrl = 'images/icons/'+s.split("|")[1]+".svg";
            console.log((iconUrl))
            return (
                <Card.Grid style={gridStyle}>
                  <div>{s.split("|")[0]}</div>
                  <img src={iconUrl} />
                </Card.Grid>
            )}
          )}
        </Card>
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

        <div className="row skills">
        <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

          <div className="nine columns">
            {skillmessage1}
          </div><br /><br /><br />
            
          <div className="nine columns offset-3">
            {skillmessage2}
          </div>
          
          <div>
            {mySkills}

          </div>

        </div>
      </section>
    )
  }
}

export default Experience;
