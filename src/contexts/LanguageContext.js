import React, { Component } from 'react';

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
  setLanguage: () => {},
  setError: () => {},
  clearError: () => {},
  clearLanguage: () => {},
  setWords: () => {},
  clearWords: () => {},
})

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: {},
    words: [],
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setLanguage = (language) => {
    this.setState({ language })
  }

  clearLanguage = () => {
    this.setState({ language: {} });
  };

  setWords = (words) => {
    this.setState({ words })
  };

  clearWords = () => {
    this.setState({ words: [] });
  };

  render() {
    const value = {
      language: this.state.language,
      error: this.state.error,
      words: this.state.words,
      setError: this.setError,
      setWords: this.setWords,
      setLanguage: this.setLanguage,
      clearError: this.clearError,
      clearLanguage: this.clearLanguage,
      clearWords: this.clearWords,
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}