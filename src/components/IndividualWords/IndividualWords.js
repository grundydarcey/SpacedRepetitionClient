import React, { Component } from 'react';
import './IndividualWords.css';

export default class IndividualWords extends Component {
  static defaultProps = {
    words: [],
  };

  renderWords = () => {
    if (this.props.words.length === 0) {
      return <p>Practice words not found</p>; 
    }
    return (
      <ul className='practiceWords'>
        {this.props.words.map((word) => {
          return (
            <li className='practiceWordCard' key={word.id}>
              <h4 className='practiceWord'>{word.original}</h4>
              <p className='pwcorrect'>
                Correct Answer Count: {word.correct_count}
              </p>
              <p className='pwInCorrect'>
                Incorrect Answer Count: {word.incorrect_count}
              </p>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <React.Fragment>{this.renderWords()}</React.Fragment>
    )
  }
}