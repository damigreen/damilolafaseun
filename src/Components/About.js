import React, { Component } from 'react';

class About extends Component {

  render() {
    const {data={}} = this.props;

    const {
      name = "",
      bio = "",
      email = "",
      phone = "",
      image = "",
      resumedownload = "",
      address = {}
    } = data;

    const profilepic = `images/${image}`;

    const {
      street = "",
      city = "",
      // state = "",
      zip = ""
    } = address;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Damilola Faseun profile picture" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>

            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumedownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
