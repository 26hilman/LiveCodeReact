import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = { username: "", 
        password: "" };
    }

    changeInput = event => {
      this.setState({[event.target.name]: event.target.value});
    };
    postLogin = () => {
      const {username, password} = this.state;
      const data = {
        username : username,
        password : password
      };
      const self = this;
      axios
      .post("https://api-todofancy.herokuapp.com/api/auth", data)
      .then(function(response){
        console.log(response.data);
        localStorage.setItem("api_key", response.data.api_key);
        localStorage.setItem("is_login", true);
        localStorage.setItem("username", response.data.user_data.username);
        localStorage.setItem("email", response.data.user_data.email);
        localStorage.setItem("avatar", response.data.user_data.avatar);
        self.props.history.push("/profile")
      })
      .catch(function(error){
        console.log(error);
      });
    };
    render(){
      console.log("state", this.state);
      return(
        <section className="content signin">
          <form onSubmit={event => event.preventDefault()}>
            <h4>Login</h4>
            <div>
              <input type="text" name="username" placeholder="Username" onChange={event => this.changeInput(event)}/>
              <br/>
              <input type="password" name="password" placeholder="Password" onChange={event => this.changeInput(event)}/>
            </div>
            <button onClick={() => this.postLogin()}>Login</button>
            <button type="reset">Reset</button>
          </form>
        </section>
      );
    }
  }
  
  export default withRouter(Login);