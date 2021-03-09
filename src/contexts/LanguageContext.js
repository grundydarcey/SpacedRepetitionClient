import React, { Component } from 'react';

const LanguageContext = React.createContext({
  language: {},
})

export default LanguageContext;

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: {}
    }
  }

  setLanguage = language => {
    this.setState({ language })
  }

  render() {
    const value = {
      language: this.state.language,
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}