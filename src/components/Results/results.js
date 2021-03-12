import React, { Component } from 'react';
import LearnContext from '../../contexts/LearnContext';
import './results.css';

export default class Results extends Component {
  static contextType = LearnContext;

  handleClick = () => {
    this.context.setIsResultDisplayed(false);
  };

  renderMessage = () => {
    if (this.context.isCorrect) {
      return <h2 className='resultTitleCorrect'>You were correct! :D</h2>;
    } else {
      return (
        <h2 className='resultTitleWrong'>Good try, but not quite right </h2>
      );
    }
  }
    
  render() {
    return (
      <section className='feedback'>
        {this.renderMessage()}
        <section className='display'>
          <p>The correct translation for <span en='it'>{this.context.prevWord}</span> was {this.context.answer} and you chose {this.context.guess}!</p>
        </section>
        <button className='tryAgain' onClick={this.handleClick}>
          Try another word!
        </button>
      </section>
    );
  }
}