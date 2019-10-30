import { useState, useEffect } from 'react';

import yelp from '../api/yelp';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async searchTerm => {
    try {
      const resp = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      setResults(resp.data.businesses);
    } catch (error) {
      setErrorMessage('Sorry, something went wrong!');
    }
  };

  return [searchApi, results, errorMessage];
};

export default useResults;
