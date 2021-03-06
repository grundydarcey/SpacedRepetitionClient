import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout()
  };

  renderLogoutLink() {
    return (
      <section className='nameLogout'>
        <span className='name'>
          {this.context.user.name} (Your Account)
        </span><br /><br />
        <nav className='logout'>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </section>
    )
  }

  renderLoginLink() {
    return (
      <section className='accounts'>
        <nav className='loginSignup'>
          <Link to='/login'>Login</Link>
          {' '}
          <Link to='/register'>Sign up</Link>
        </nav>
      </section>
    )
  }

  render() {
    return (
      <header>
        <h1>
          <Link to='/'>
            Spaced repetition
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;