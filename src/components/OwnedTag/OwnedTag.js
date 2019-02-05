import React from 'react';
import './OwnedTag.css';

class OwnedTag extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <span className="owned-tag">OWNED</span>
      </React.Fragment>
    );
  }
}

export default OwnedTag;
