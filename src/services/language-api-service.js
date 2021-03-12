import config from '../config';
import TokenService from './token-service';
import LearnContext from '../contexts/LearnContext';

const LanguageApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok) 
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  getHead() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  submitGuess(guess) {
    const body = JSON.stringify({
      guess: guess,
    });

    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json',
      },
      body: body,
    })
    .then((res) => {
      if (!res.ok) {
        LearnContext.setError(
          'Something went wrong, please refresh and try again.'
        );
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    })
    .catch((e) => console.error(e));
  },
};

export default LanguageApiService;