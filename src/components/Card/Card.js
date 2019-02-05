import React from 'react';
import './Card.css';
import generatePrice from '../../helpers/generatePrice';
import { Link } from 'react-router-dom';
import { convertToPath } from '../../helpers/pathPrettier';
import convertToRupiah from '../../helpers/convertToRupiah';
import OwnedTag from '../OwnedTag/OwnedTag';

class Card extends React.PureComponent {
  render() {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w342';
    const { id, original_title, poster_path, vote_average } = this.props;
    return (
      <Link to={`/${convertToPath(id, original_title)}`} className="card">
        <div className="card-image">
          <img src={`${IMAGE_URL}${poster_path}`} alt="" />
        </div>
        <h5 className="card-title">{original_title}</h5>
        <div className="card-footer">
          <div>
            <h3 className="card-rate">Rating: {vote_average}/10</h3>
            <h3 className="card-price">
              {convertToRupiah(generatePrice(vote_average))}
            </h3>
          </div>
          <span>{this.props.owned && <OwnedTag />}</span>
        </div>
      </Link>
    );
  }
}

export default Card;
