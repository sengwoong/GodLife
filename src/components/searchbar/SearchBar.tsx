import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextStyle } from 'react-native';
import { handleSearch, handleSelectSuggestion } from '../../../utils/searchUtils';
import SearchResults from './SearchResults';
import { colors, getFontStyle } from '../../constants';
interface SearchBarProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
}

const SearchBar: React.FC<SearchBarProps> = ({setSearchText,searchText}) => {
  const initialSuggestions = [
    'React',
    'React Native',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Django',
    'Spring',
  ];

 
  const [recentSearches, setRecentSearches] = useState<string[]>([]); // 최근 검색 상태
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(initialSuggestions); // 필터링된 추천 상태

  const onSearchChange = (text: string): void => {
    setSearchText(text);
    handleSearch(text, initialSuggestions, setFilteredSuggestions);
  };

  const onSuggestionSelect = (suggestion: string): void => {
    setSearchText('');
    handleSelectSuggestion(suggestion, recentSearches, setRecentSearches, setFilteredSuggestions);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.searchBar, styles.SearchBarInput]}
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChangeText={onSearchChange}
      />
      <SearchResults
        searchText={searchText}
        filteredSuggestions={filteredSuggestions}
        recentSearches={recentSearches}
        onSuggestionSelect={onSuggestionSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    padding: 10,
  },
  searchBar: {
    backgroundColor: colors.WHITE,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 10,
    elevation: 3,
    shadowColor:  colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  SearchBarInput: {
    font : getFontStyle('titleBody', 'small', 'medium'),
  } as TextStyle,
});

export default SearchBar;
