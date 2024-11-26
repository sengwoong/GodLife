import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

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
          {/* 추천 단어 */}
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

          {/* 최근 검색 기록 */}
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
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  columnTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  suggestionItem: {
    fontSize: 14,
    paddingVertical: 5,
    color: '#007BFF',
  },
  highlightedItem: {
    fontSize: 14,
    paddingVertical: 5,
    color: '#FF4500',
    fontWeight: 'bold',
  },
  recentItem: {
    fontSize: 14,
    paddingVertical: 5,
    color: '#333',
  },
});

export default SearchResults;
