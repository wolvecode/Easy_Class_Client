import React from 'react'
import axios from 'axios'
import Nav from '../component/Nav'

export default class Createuser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
    }
    console.log(user)

    axios
      .post('http://localhost:5555/users/add', user)
      .then((res) => console.log(res.data))

    this.setState({
      email: '',
    })
  }
  render() {
    return (
      <div>
        <Nav />
        <h3>You are on Createuser</h3>
        <form onSubmit={this.onSubmit} className="col-md-6 offset-md-3  ">
          <div className="form-group">
            <label> Username</label>
            <input
              className="form-control"
              type="text"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
