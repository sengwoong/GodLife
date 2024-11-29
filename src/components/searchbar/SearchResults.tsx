import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextStyle } from 'react-native';
import { colors, getFontStyle } from '../../constants';

interface SearchResultsProps {
  searchText: string;
  filteredSuggestions: string[];
  recentSearches: string[];
  onSuggestionSelect: (suggestion: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchText,
  filteredSuggestions,
  recentSearches,
  onSuggestionSelect,
}) => {
  return (
    <View style={styles.resultContainer}>
      {searchText.trim() && (
        <>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>추천 단어</Text>
            <FlatList
              data={filteredSuggestions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onSuggestionSelect(item)}>
                  <Text
                    style={
                      item.toLowerCase().startsWith(searchText.toLowerCase())
                        ? styles.highlightedItem
                        : styles.suggestionItem
                    }
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={styles.column}>
            <Text style={styles.columnTitle}>최근 검색</Text>
            <FlatList
              data={recentSearches}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Text style={styles.recentItem}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
    backgroundColor: colors.WHITE,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor:  colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  columnTitle: {
    fonts : getFontStyle('titleBody', 'large', 'bold'),
    marginBottom: 10,
  } as TextStyle,
  suggestionItem: {
    fonts : getFontStyle('titleBody', 'mediumSmall', 'bold'),
    color: colors.GRAY,
  } as TextStyle,
  highlightedItem: {
    fonts : getFontStyle('titleBody', 'mediumSmall', 'bold'),
    paddingVertical: 5,
    color: colors.BLACK,
    fontWeight: 'bold',
  } as TextStyle,
  recentItem: {
    fonts : getFontStyle('titleBody', 'mediumSmall', 'bold'),
    paddingVertical: 5,
    color: colors.BLACK,
  } as TextStyle,
});

export default SearchResults;
