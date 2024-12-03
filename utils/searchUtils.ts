
export const filterAndSortSuggestions = (text: string, suggestions: string[]): string[] => {
    return suggestions
      .filter((item) => item.toLowerCase().includes(text.toLowerCase()))
      .sort((a, b) => (a.toLowerCase().startsWith(text.toLowerCase()) ? -1 : 1)); // 입력값으로 시작하는 항목 우선 정렬
  };
  
export const handleSearch = (
  text: string,
  initialSuggestions: string[],
  setFilteredSuggestions: React.Dispatch<React.SetStateAction<string[]>>
): void => {
  if (text.trim()) {
    const filtered = filterAndSortSuggestions(text, initialSuggestions);
    setFilteredSuggestions(filtered);
  } else {
    setFilteredSuggestions(initialSuggestions);
  }
};

export const handleSelectSuggestion = (
  suggestion: string,
  recentSearches: string[],
  setRecentSearches: React.Dispatch<React.SetStateAction<string[]>>,
  setFilteredSuggestions: React.Dispatch<React.SetStateAction<string[]>>
): void => {
  setRecentSearches((prev) => [...new Set([suggestion, ...prev])]);
  setFilteredSuggestions([]); 
};
