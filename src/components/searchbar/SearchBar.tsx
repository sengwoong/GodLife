import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextStyle } from 'react-native';
import { handleSearch, handleSelectSuggestion } from '../../../utils/searchUtils';
import SearchResults from './SearchResults';
import { colors, getFontStyle, spacing } from '../../constants';
interface SearchBarProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
  initialSuggestions:string[];
}

const SearchBar: React.FC<SearchBarProps> = ({initialSuggestions,setSearchText,searchText}) => {

  const [recentSearches, setRecentSearches] = useState<string[]>([]); 
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(initialSuggestions);
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
    width:"90%",
    padding: spacing.M12,
  },
  searchBar: {
    backgroundColor: colors.WHITE,
    borderRadius: 25,
    paddingHorizontal: spacing.M16,
    height: 40,
    marginBottom: 10,
    elevation: 3,
    shadowColor:  colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  SearchBarInput: {
    ... getFontStyle('titleBody', 'small', 'medium'),
  } as TextStyle,
});

export default SearchBar;
