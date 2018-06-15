import React, { Component } from 'react'

class FavoriteMovie extends Component {
  render() {
    return (
    	<li>{this.props.name}'s favorite movies is {this.props.movie}</li>
    )
  }
};

export default FavoriteMovie;