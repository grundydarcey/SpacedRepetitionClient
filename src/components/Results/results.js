import React, { Component } from 'react';
import LearnContext from '../../contexts/LearnContext';
import './ResultCard.css';

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
      <div className='feedback'>
        {this.renderMessage()}
        <div className='display'>
          <p>The correct translation for <span en='it'>{this.context.prevWord}</span> was {this.context.answer} and you chose {this.context.guess}!</p>
        </div>
        <button className='tryAgain' onClick={this.handleClick}>
          Try another word!
        </button>
      </div>
    );
  }
}