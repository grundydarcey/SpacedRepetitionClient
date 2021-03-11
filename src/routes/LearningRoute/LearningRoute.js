import React, { Component } from 'react';
import './LearningRoute.css';
import LearnContext from '../../contexts/LearnContext';
import LanguageApiService from '../../services/language-api-service';

class LearningRoute extends Component {
  static contextType = LearnContext;

  state = {
    guess: '',
  };

  componentDidMount() {
    LanguageApiService.getHead()
      .then((data) => {
        if (!data) {
          console.error(data);
          throw new Error('Next word not found');
        }
        this.context.setNextWord(data.nextWord);
        this.context.setTotalScore(data.totalScore);
        this.context.setWordCorrectCount(data.wordCorrectCount);
        this.context.setWordIncorrectCount(data.wordIncorrectCount);
      })
      .catch(this.context.setError);
  }

  handleOnChange = (e) => {
    const guess = e.target.value;
    this.setState({ guess: guess });
  };

  handleSubmit(e) {
    e.preventDefault();
    const guess = this.state.guess;
    LanguageApiService.submitGuess(guess).then((res) => {
      this.context.setPrevWord(this.context.nextWord);
      this.context.clearError();
      this.context.setTotalScore(res.totalScore);


      
    })
  }

  render() {
    const arr = [1, 2]
    const correctOrIncorrect = (arr.length === 2) ? (
      <p>Make a guess.</p>
    ) : (
      <section className='incorrectguessresponse'>
        <h3>Good try, but not quite right :(</h3>
        <p>The correct translation for --- was --- and you chose ---.</p>
        <button type='button' className='nextWord'>Try another word!</button>
      </section>
    )

    return (
      <section className='learn'>
        <h2>Translate the word: </h2>
        <form>
          <legend>Guess below</legend>
          <fieldset>
          <label htmlFor='yourGuess' id='yourGuess'>What's the translation for this word?</label>
          <input type='text' id='yourGuess'></input><br />
          <button type='submit' className='submit'>Submit your Answer</button><br /><br />
          {correctOrIncorrect}
          <p>You have answered this word correctly -- times.<br />
          You have answered this word incorrectly -- times.<br /><br />
          Your total score is: --</p>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default LearningRoute;