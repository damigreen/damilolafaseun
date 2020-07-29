import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:3004/api/contacts'



export default class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
      date: new Date(),
    };

    axios.post(url, contact)
      .then(response => response.data)
      .catch(error => console.log(error))

    
  }
  
  handleChange (e) {
    const value = e.target.type === 'checkbox'
      ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  render() {
    const {data = {}} = this.props;
    
    const {
      contactmessage = "",
    } = data;

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col centered">
            <h1><span>CONTACT</span></h1>

          </div>

          <div id="columns eight">
            <p className="lead">{contactmessage}</p>
          </div>
          
          <div className="row">
            <div className="eight columns centered">
              <form onSubmit={this.handleSubmit}>
                <fieldset>

                  <div>
                    <input
                      type="text"
                      value={this.state.value}
                      placeholder="Name"
                      id="contactName"
                      name="name"
                      onChange={this.handleChange} />
                  </div>

                  <div>
                    <input
                      type="email"
                      value = {this.state.value}
                      placeholder="Enter email"
                      id="contactEmail"
                      name="email"
                      onChange={this.handleChange} />
                  </div>

                  <div>
                    <input
                      type="text"
                      value={this.state.value}
                      placeholder="Subject"
                      id="contactSubject"
                      name="subject"
                      onChange={this.handleChange} />
                  </div>

                  <div>
                     <textarea 
                      cols="30"
                      rows="15"
                      value={this.state.value}
                      placeholder="Your Message"
                      id="contactMessage"
                      name="message"
                      onChange={this.handleChange}
                      >
                    </textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>

                </fieldset>
              </form>
            </div>
          </div>

        </div>
      </section>
    )
  }
}
