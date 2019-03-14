import React, { Component } from 'react';

import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

import PropTypes from "prop-types";

class Search extends Component {
  render() {
    return (
      <section>
          <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src={require('../assets/img/romance.jpg')} />
                        <div className="card-body">
                            <h5 className="card-title">Romance</h5>
                            <a href="#" onClick={this.props.doClick} className="btn btn-primary">See Movies</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src={require('../assets/img/action.jpg')} />
                        <div className="card-body">
                            <h5 className="card-title">Action</h5>
                            <a href="#" onClick={this.props.doClick2} className="btn btn-primary">See Movies</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src={require('../assets/img/fiction.jpg')} />
                        <div className="card-body">
                            <h5 className="card-title">Fiction</h5>
                            <a href="#" onClick={this.props.doClick3} className="btn btn-primary">See Movies</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src={require('../assets/img/comedy.jpg')} />
                        <div className="card-body">
                            <h5 className="card-title">Comedy</h5>
                            <a href="#" onClick={this.props.doClick4} className="btn btn-primary">See Movies</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    );
  }
}

Search.propTypes = {
  placeholder : PropTypes.string.isRequired
};

export default Search;