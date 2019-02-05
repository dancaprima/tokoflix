import React from 'react';
import { connect } from 'react-redux';
import { getIdFromPath } from '../../helpers/pathPrettier';
import { fetchDetailMovie } from '../../services/detail-movie/action';
import DetailMovie from '../../components/DetailMovie/DetailMovie';
import generatePrice from '../../helpers/generatePrice';
import SimiliarMovies from '../../components/SimiliarMovies/SimiliarMovies';
import './Detail.css';
import RecommendedMovies from '../../components/RecommendedMovies/RecommendedMovies';
import { buyMovies } from '../../services/account/action';
import NotFound from '../../components/NotFound/NotFound';
import Loader from '../../components/Loader/Loader';

class Detail extends React.Component {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    const id = getIdFromPath(slug);
    this.props.fetchDetailMovie(id);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const slug = this.props.match.params.slug;

    if (prevProps.match.params.slug !== slug) {
      const id = getIdFromPath(slug);
      this.props.fetchDetailMovie(id);
      window.scrollTo(0, 0);
    }
  }

  buyMovies(movieId, balance) {
    const { account, detailMovie } = this.props;
    if (
      account.balance < generatePrice(detailMovie.data.vote_average) ||
      account.ownedMovie.find(e => e === detailMovie.data.id)
    )
      return;

    this.props.buyMovies(movieId, balance);
  }

  render() {
    const { detailMovie, account } = this.props;
    return (
      <div className="detail-page">
        {detailMovie.data.id && !detailMovie.isLoading ? (
          <div>
            <DetailMovie
              id={detailMovie.data.id}
              title={detailMovie.data.original_title}
              rating={detailMovie.data.vote_average}
              image={detailMovie.data.poster_path}
              price={generatePrice(detailMovie.data.vote_average)}
              casts={detailMovie.data.credits.cast}
              duration={detailMovie.data.runtime}
              genres={detailMovie.data.genres}
              description={detailMovie.data.overview}
              buyMovies={this.buyMovies.bind(this)}
              disabled={
                account.balance <
                  generatePrice(detailMovie.data.vote_average) ||
                account.ownedMovie.find(e => e === detailMovie.data.id)
              }
              owned={this.props.account.ownedMovie.find(
                d => d === detailMovie.data.id
              )}
            />

            <h1 className="detail-sub-title">Similiar Movies</h1>
            <SimiliarMovies data={detailMovie.data.similar} />
            <h1 className="detail-sub-title">Recommended Movies</h1>
            <RecommendedMovies data={detailMovie.data.recommendations} />
          </div>
        ) : detailMovie.isLoading ? (
          <Loader />
        ) : (
          <NotFound text={'Data Kosong'} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { detailMovie, account } = state;
  return { detailMovie, account };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDetailMovie: id => dispatch(fetchDetailMovie(id)),
    buyMovies: (id, price) => dispatch(buyMovies(id, price))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
