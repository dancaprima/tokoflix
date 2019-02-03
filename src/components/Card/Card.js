import React from 'react';

class Card extends React.PureComponent {
  render() {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w342';

    return (
      <div class="card">
        <img src={`${IMAGE_URL}${this.props.poster_path}`} alt="" />
        <h1>{this.props.original_title}</h1>
        <h3>{this.props.vote_average}</h3>
        <p />
      </div>
    );
  }
}

export default Card;
