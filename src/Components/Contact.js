import React, { Component } from 'react'


// Remove border property of three
// border: 1px solid red;
export default class Contact extends Component {
  render() {
    const {data = {}} = this.props;
    
    const {
      contactmessage = "",
    } = data;

    console.log(data)
    console.log(contactmessage)

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col centered">
            <h1><span>CONTACT</span></h1>

          </div>
          <div id="columns eight">

          <p className="lead">{contactmessage}</p>
          </div>

        </div>
      </section>
    )
  }
}
