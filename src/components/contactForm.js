import React from "react";
import { useState } from 'react';
import Axios from "axios";

function ContactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
      // disabled: false,
      // emailSent: null,
  })

  const handleChange = (e) => {
    const  {name, value} = e.target;
 
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {name, email, message} = state;
    console.log(name, email, message)

    const form = await Axios.post('http://localhost:8001/api/email', {
      name,
      email,
      message
    })
  }


  //   Axios.post("http://localhost:3001/api/form", this.state)
  //     .then(res => {
  //       if (res.data.success) {
  //         this.setState({
  //           disabled: false,
  //           emailSent: true,
  //         })
  //       } else {
  //         this.setState({
  //           disabled: false,
  //           emailSent: false,
  //         })
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)

  //       this.setState({
  //         disabled: false,
  //         emailSent: false,
  //       })
  //     })
  // }

    return (
      <>
        <form
          onSubmit={handleSubmit}
          // method="post"
          //  action={functionURL}
        >
          <div className="row"></div>
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              name="name"
              htmlFor="name"
              placeholder="Name"
              id="full-name"
              // value={this.state.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-6 col-12-mobile">
            <input
              type="email"
              name="email"
              htmlFor="email"
              placeholder="Email"
              id="email"
              // value={this.state.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-12">
            <textarea
              name="message"
              htmlFor="message"
              id="message"
              placeholder="Message"
              // value={this.state.message}
              onChange={handleChange}
            />
          </div>

          <div className="col-12"> 
            <input 
            type="submit" 
            value="Send"
            // disabled={this.state.disabled}
            ></input>

            {/* {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent!</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent</p>
            )} */}
          </div>
        </form>
      </>
    )
}

export default ContactForm;
