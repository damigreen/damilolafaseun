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
          
          <div className="row">
            <div className="eight columns centered">
              <form>
                <fieldset>

                  <div>
                    <input type="text" placeholder="Name" size id="contactName" name="contactName" onChange />
                  </div>

                  <div>
                    <input type="email" placeholder="Enter email" size id="contactEmail" name="contactEmail" onChange />
                  </div>

                  <div>
                    <input type="text" placeholder="Subject" size id="contactSubject" name="contactSubject" onChange />
                  </div>

                  <div>
                     <textarea cols="30" rows="15" placeholder="Your Message" id="contactMessage" name="contactMessage"></textarea>
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
