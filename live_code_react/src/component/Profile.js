import React from "react";
import { Redirect } from "react-router-dom";

const Profile = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");
  const avatar = localStorage.getItem("avatar");
  console.log("is_login", is_login);

  if (is_login === null) {
    return <Redirect to={{pathname: "/login"}}/>;
  }
  else {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img src={avatar} alt="avatar"></img>
            </div>
            <div className="col-lg-9">
              <h1>PROFILE</h1>
              <p><label>Name:</label> {username}</p>
              <p><label>Email:</label> {email}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default Profile;