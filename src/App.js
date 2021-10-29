import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    
  }
  handleEmailChange(e) {
    const regex = /[\w\\.]+@([\w-]+\.)+[\w-]{2,4}$/
    this.setState({ 
      email: e.target.value , 
      emailIsValid: regex.test(e.target.value) })
    
  }



  handlePasswordChange(e) {
    console.log(this.state)
    this.setState({ password: e.target.value , passwordIsValid : e.target.value.length > 5 })
  }


  handleRememberMeChange(e) {
    this.setState({ rememberMe: !this.state.rememberMe });
    console.log(this.state)
  }



  handleSubmit(e){
    e.preventDefault()
    this.setState({ isSubmitted: e.target.value })
    console.log(this.state)
  }


  render() {
    console.log(this.state.emailIsValid)
    return (
      <form className="mx-auto p-5 m-5 d-flex w-25 flex-column justify-content-center" onSubmit={this.handleSubmit}>
        <div className="mb-3 col-8">
          <label  className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" onChange={this.handleEmailChange} placeholder="Enter email..."></input>
        </div>
        <br />
        <label>
          Password
          <br />
          <div className="col-8">
            <input type="password" className="form-control" id="inputPassword" onChange={this.handlePasswordChange} placeholder="Enter password..."></input>
          </div>
        </label>
        <br />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" onChange={this.handleRememberMeChange} id="flexCheckDefault"></input>
          <label className="form-check-label" >
          Rember me
          </label>
        </div>
        <br />
        <input className="btn btn-primary w-25" type="submit" value="Submit"></input>   
      </form>
    )
  }
}

export default App
