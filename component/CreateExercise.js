import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Nav from '../component/Nav'

export default class CreateExercises extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    }
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDuration = this.onChangeDuration.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:5555/users').then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.email),
          username: res.data[0].email,
        })
      }
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    })
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    })
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    }

    console.log(exercise)

    axios
      .post('http://localhost:5555/exercise', exercise)
      .then((res) => console.log(res.data))
  }
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <div className="col-md-8 offset-md-2 border mt-5">
          <h3>Create New Exercise</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <select
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              >
                {this.state.users.map((user) => {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <DatePicker
                className="form-control"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
            <div>
              <input
                type="submit"
                name=""
                value="Create Exercise"
                className="btn btn-primary"
                id=""
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
