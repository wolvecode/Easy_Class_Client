import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import '../style/app'
import CreateExercises from '../component/CreateExercise'
import Createuser from '../component/CreateUser'
import EditExercises from '../component/EditExercise'
import ExercisesList from '../component/ExercisesList'
import NotFound from '../component/NotFound'
import SubmitPage from '../component/Submit'

class HelloMessage extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <CreateExercises path="/create" />
          <Createuser path="/user" />
          <EditExercises path="/edit/:id" />
          <ExercisesList path="/" />
          <SubmitPage path="/submit" />
          <NotFound path="*" />
        </Router>
      </div>
    )
  }
}

let App = document.getElementById('app')

ReactDOM.render(<HelloMessage name="Yomi" />, App)
