import React from 'react';
import Card from '../Card/Card';
import NotFound from '../NotFound/NotFound';

class RecommendedMovies extends React.PureComponent {
  render() {
    const { data } = this.props;

    return (
      <div className="flex-wrap">
        {data.results.length > 0 ? (
          data.results.map(e => (
            <div key={e.id} className="w-25">
              <Card {...e} />
            </div>
          ))
        ) : (
          <NotFound text={'Recommended Movie Not Found'} />
        )}
      </div>
    );
  }
}

export default RecommendedMovies;
