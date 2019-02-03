import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../services/movies/action';
import Card from '../../components/Card/Card';

export class Home extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderCard(data) {
    if (data.length === 0) {
      return <h1>Data Kosong</h1>;
    }

    return data.map(e => <Card key={e.original_title} {...e} />);
  }

  render() {
    const { movies } = this.props;
    return (
      <div id="home">
        {movies && !movies.isLoading ? (
          this.renderCard(movies.data)
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { movies } = state;
  return { movies };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
