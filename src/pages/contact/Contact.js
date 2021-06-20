import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <h1>Contact</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form className="mx-auto">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
