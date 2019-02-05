import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';
import convertToRupiah from '../../helpers/convertToRupiah';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to={'/'}>TokoFlix</Link>
        <span>Balance: {convertToRupiah(this.props.account.balance)}</span>
      </header>
    );
  }
}

const mapStateToProps = state => {
  const { account } = state;
  return { account };
};

export default connect(mapStateToProps)(Header);
