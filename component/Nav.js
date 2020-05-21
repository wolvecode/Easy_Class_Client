import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  bg-light navbar navbar-light">
          <a className="navbar-brand" href="/">
            ExcerTracker
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <a className="nav-link" href="/">
                  Exercises
                </a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="/user">
                  Create User
                </a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="/create">
                  CreateExercise{' '}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
