import React from "react";
import PropTypes from "prop-types";

const ListMovie = props => {
    return (
        <div>
          <div className="card my-4">
            <img className="card-img-top" src={props.poster} alt="..."/>
            <div className="card-body">
              <h2 className="card-title">{props.title}</h2>
              <h2 className="card-title">{props.year}</h2>
              <h2 className="card-title">{props.category}</h2>
              <p className="card-text">{props.sinopsis}</p>
            </div>
          </div>
        </div>
      )
    }
    
    ListMovie.propTypes = {
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      sinopsis: PropTypes.string.isRequired
    }

export default ListMovie;