import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../services/movies/action';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  renderCard(data) {
    return (
      <div>
        <img src={data.poster_path} alt="" />
        <h1>{data.original_title}</h1>
        <h3>{data.vote_average}</h3>
        <p />
      </div>
    );
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies && movies.data &&  movies.data.map(d => this.renderCard(d))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { movies } = state;
  return { movies };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
