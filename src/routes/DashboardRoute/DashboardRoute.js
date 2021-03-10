import React, { Component } from 'react'
import './DashboardRoute.css';
import { Link } from 'react-router-dom';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getLanguage()
      .then((res) => {
        this.context.setLanguage(res.language);
      })
  }

  render() {
    console.log(this.context)
    return (
      <section className='beginPractice'>
        <h2>Italian</h2>
        <Link to='/learn'>Start Practicing</Link>
        <h3>Words to Practice</h3>
        <p>(List showing each word to practice with a count for the number of times the user guessed it in/correctly.)</p><br /><br /><br />
        <p>{this.context.language.name}</p>
      </section>
    );
  }
}

export default DashboardRoute
