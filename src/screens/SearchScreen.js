import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsbyPrice = price => {
    if (results.length) {
      return results.filter(result => result.price === price);
    }
    return [];
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsbyPrice('$')}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsbyPrice('$$')}
          title="Price Cheaper"
        />
        <ResultsList
          results={filterResultsbyPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
