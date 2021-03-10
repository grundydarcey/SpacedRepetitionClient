import React, { Component } from 'react';

const LanguageContext = React.createContext({
  language: {},
  setLanguage: () => {},
})

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: {},
    setLanguage: () => {},
  }

  setLanguage = (language) => {
    this.setState({ language })
  }

  render() {
    const value = {
      language: this.state.language,
      setLanguage: this.state.setLanguage,
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}