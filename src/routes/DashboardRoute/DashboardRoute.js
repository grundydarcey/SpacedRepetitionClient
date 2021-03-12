import React, { Component } from 'react'
import './DashboardRoute.css';
import { Link } from 'react-router-dom';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';
import IndividualWords from '../../components/IndividualWords/IndividualWords';

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getLanguage()
      .then((res) => {
        this.context.setLanguage(res.language);
        this.context.setWords(res.words);
      })
      .then(this.context.clearError)
      .catch(this.context.setError);
  }

  render() {
    return (
      <section className='beginPractice'>
        <h2>{this.context.language.name}</h2>
        <Link to='/learn'>Start Practicing</Link>
        <h3>Words to Practice</h3>
        <p>Total Correct Answers: {this.context.language.total_score}</p>
        <h3 className='practiceWordTitle'>Words to Practice</h3>
        <IndividualWords words={this.context.words} />
      </section>
    );
  }
}

export default DashboardRoute;