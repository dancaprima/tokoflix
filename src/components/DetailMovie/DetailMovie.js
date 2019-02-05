import React from 'react';
import PropTypes from 'prop-types';
import './DetailMovie.css';
import convertToRupiah from '../../helpers/convertToRupiah';
import OwnedTag from '../OwnedTag/OwnedTag';

class DetailMovie extends React.Component {
  render() {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w342';
    return (
      <div className="detail">
        {this.props.image && (
          <div className="image-wrapper">
            <img src={`${IMAGE_URL}${this.props.image}`} alt="" />
          </div>
        )}
        <div className="body">
          <div className="detail-title">
            <h3>{this.props.title}</h3>
            <div>{this.props.owned && <OwnedTag />}</div>
          </div>
          <div className="subtitle">
            <span>{this.props.duration} min | </span>
            {this.props.genres.length > 0 && (
              <span>
                {this.props.genres.map(e => (
                  <span key={e.name}>{e.name}, </span>
                ))}
                |
              </span>
            )}
            <span> {this.props.rating}</span>
          </div>

          {this.props.casts.length > 0 && (
            <div className="cast">
              <span className="cast-title">Cast:</span>
              <span>
                {this.props.casts.map(e => (
                  <span key={e.name}>{e.name}, </span>
                ))}
              </span>
            </div>
          )}
          <p className="card-price">{convertToRupiah(this.props.price)}</p>
          <div className="button-wrapper">
            <button
              disabled={this.props.disabled}
              onClick={() =>
                this.props.buyMovies(this.props.id, this.props.price)
              }
              className="cta-buy"
              type="button"
            >
              BELI
            </button>
          </div>
        </div>
      </div>
    );
  }
}

DetailMovie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default DetailMovie;
