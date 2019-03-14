import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

const Navigation = props => {
    return (
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <ul className="nav">
                <li className="nav-item">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/profile">Profile</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/" onClick={() => props.postSignout()}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      );
    }

export default Navigation; 