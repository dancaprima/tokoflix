import React from 'react';

class NotFound extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h4 className="not-found-text">{this.props.text}</h4>
      </React.Fragment>
    );
  }
}

export default NotFound;
