import React, { Component } from 'react'
import FavoriteMovie from './FavoriteMovie'

class FavoriteMovies extends Component {
	render() {
    	return (
          <ul>
	          {this.props.profiles.map((profile) => (
               	<FavoriteMovie 
               		key={profile.id}
          			name={this.props.users[profile.userID].name}
          			movie={this.props.movies[profile.favoriteMovieID].name}
          		/>
               ))}
          </ul>
        )  
    }
}

export default FavoriteMovies;