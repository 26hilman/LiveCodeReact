import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Footer from './component/Footer';
import Search from './component/Search';

const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";

class AppHome extends Component {
  constructor (props){
    super(props);
    this.state = {
    }
  }
  componentDidMount = () => {
    const self = this;
    axios.all([
      axios.get(baseUrl)
    ])
    .then(axios.spread(function(response){
      self.setState({listMovies : response.data.movies})
    }))
    .catch(function(error){
    });
  }

  handleClick1 = event => {
    console.log("event", event);
    let romance = "romance"
    this.setState(
      () => {
        this.searchCategory(romance);
      }
    )
  }

  handleClick2 = event => {
    console.log("event", event);
    let action = "action"
    this.setState(
      () => {
        this.searchCategory(action);
      }
    )
  }

  handleClick3 = event => {
    console.log("event", event);
    let fiction = "fiction"
    this.setState(
      () => {
        this.searchCategory(fiction);
      }
    )
  }
  
  handleClick4 = event => {
    console.log("event", event);
    let comedy = "comedy"
    this.setState(
      () => {
        this.searchCategory(comedy);
      }
    )
  }

  searchCategory = async value => {
    console.log("searchCategory", value);
    const self = this ;
    try {
      const response = await axios.get(
        baseUrl
      )
      console.log(response);
      self.setState({listMovies: response.data.movies.value})
    }catch (error){
      console.log(error);
    }
  }

  render() {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
  
    if (is_login === null){
      return <Redirect to={{pathname: "/login"}}/>;
    }
  else {
        return (
          <div>
            <Search doClick1={this.handleClick1} doClick2={this.handleClick2} doClick3={this.handleClick3} doClick4={this.handleClick4}/>
            {/* <div class="row">
                <div className="col-md-4 my-4">
                  <h5 className="card-header bg-primary" style={{ color: "white" }}>
                    List Movies
                  </h5>
                  {ListMovie.map((item, key) => {
                    return <ListMovie key={key} title={item.title} url={item.url}/>;
                  })}
                </div>
              </div> */}
        <Footer />
      </div>
        );
    }
}
}

export default AppHome;