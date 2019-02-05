import React from 'react';
import './Pagination.css';

class Pagination extends React.PureComponent {

  renderPage() {
    const range = [...Array(this.props.totalPage).keys()];

    const element = range.map(i => (
      <li
        className={Number(this.props.currentPage) === i + 1 ? 'active' : ''}
        onClick={() => this.props.onClick(i + 1)}
        key={i}
      >
        {i + 1}
      </li>
    ));

    return element;
  }

  render() {
    return (
      <ul className="pagination">
        <li onClick={() => this.props.onClick(this.props.currentPage - 1)}>
          Prev
        </li>
        {this.renderPage()}
        <li
          onClick={() => this.props.onClick(Number(this.props.currentPage) + 1)}
        >
          Next
        </li>
      </ul>
    );
  }
}

export default Pagination;
