import React from "react"
import Axios from "axios"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = e => {
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      disabled: true,
    })

    Axios.post("http://localhost:3030/api/email", this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          })
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          })
        }
      })
      .catch(err => {
        console.log(err)

        this.setState({
          disabled: false,
          emailSent: false,
        })
      })
  }

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          // method="post"
          //  action={functionURL}
        >
          <div className="row"></div>
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="full-name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6 col-12-mobile">
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-12">
            <input 
            type="submit" 
            value="Send"
            disabled={this.state.disabled}
            ></input>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent!</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent</p>
            )}
          </div>
        </form>
      </>
    )
  }
}

export default ContactForm;
