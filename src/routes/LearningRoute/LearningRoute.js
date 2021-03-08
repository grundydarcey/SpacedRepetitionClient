import React, { Component } from 'react'

class LearningRoute extends Component {
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
      <section>
        <h2>Translate the word: (word to translate)</h2>
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

export default LearningRoute
