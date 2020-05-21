import React from 'react'
import e2 from './IMG/e2.png'
export default class NotFound extends React.Component {
  render() {
    return (
      <div className="">
        <h1 className="text-center pt-5 text-danger">Page Not found</h1>
        <img
          className="col-lg-6 col-md-6 col-sm-8 pt-5 rounded mx-auto d-block"
          src={e2}
          alt="Not Found"
        />
      </div>
    )
  }
}
