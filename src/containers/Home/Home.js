import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../services/movies/action';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import './Home.css';
import NotFound from '../../components/NotFound/NotFound';
import Loader from '../../components/Loader/Loader';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const page = query.get('page') || 1;
    this.setState({
      currentPage: page
    });
    this.props.fetchMovies(page);
  }

  componentDidUpdate(prevProps) {
    const query = new URLSearchParams(this.props.location.search);
    const page = query.get('page') || 1;
    const prevQuery = new URLSearchParams(prevProps.location.search);
    const prevPage = prevQuery.get('page') || 1;

    if (page !== prevPage) {
      this.props.fetchMovies(page);
    }
  }

  renderCard(data) {
    if (data.length === 0) {
      return <NotFound text={'Data Kosong'} />;
    }

    return data.map(e => (
      <div key={e.original_title} className="w-25">
        <Card
          {...e}
          owned={this.props.account.ownedMovie.find(d => d === e.id)}
        />
      </div>
    ));
  }

  changePage(i) {
    if (i > this.props.movies.totalPages || i < 1) return;

    this.setState({
      currentPage: i
    });
    this.props.history.push({
      pathname: '/',
      search: `?page=${i}`
    });
  }

  render() {
    const { movies } = this.props;
    return (
      <React.Fragment>
        <div id="home">
          {movies && !movies.isLoading ? (
            this.renderCard(movies.data)
          ) : (
            <Loader />
          )}
        </div>
        <div className="pagination-wrapper">
          <Pagination
            onClick={this.changePage}
            totalPage={movies.totalPages}
            currentPage={this.state.currentPage}
          />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  const { movies, account } = state;
  return { movies, account };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: id => dispatch(fetchMovies(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
