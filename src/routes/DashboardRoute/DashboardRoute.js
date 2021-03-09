import React, { Component } from 'react'
import './DashboardRoute.css';
import { Link } from 'react-router-dom';

class DashboardRoute extends Component {
  render() {
    return (
      <section className='beginPractice'>
        <h2>Italian</h2>
        <Link to='/learn'>Start Practicing</Link>
        <h3>Words to Practice</h3>
        <p>(List showing each word to practice with a count for the number of times the user guessed it in/correctly.)</p><br /><br /><br />
      
      </section>
    );
  }
}

export default DashboardRoute
