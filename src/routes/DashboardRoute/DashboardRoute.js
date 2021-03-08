import React, { Component } from 'react'

class DashboardRoute extends Component {
  render() {
    return (
      <section>
        <h2>Italian</h2>
        <button type='button' className='startPractice'>Start Practicing</button>
        <h3>Words to Practice</h3>
        <p>(List showing each word to practice with a count for the number of times the user guessed it in/correctly.)</p>
      </section>
    );
  }
}

export default DashboardRoute
