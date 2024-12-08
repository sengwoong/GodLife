import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, TextStyle } from 'react-native';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { VocaStackParamList } from '../../navigations/stack/VocaStackNavigator';
import { MainDrawerParamList } from '../../navigations/drawer/MainDrawerNavigator';
import { colors, getFontStyle, spacing, vocaNavigations } from '../../constants';
import SearchBar from '../../components/searchbar/SearchBar';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<VocaStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

function VocaScreen() {
  const navigation = useNavigation<Navigation>();

  const navigateToVocaContent = (vocaIndex: number) => {
    navigation.navigate(vocaNavigations.VOCACONTENT, { vocaIndex });
  };

  const vocaList = [
    { id: 1, title: '초등단어' },
    { id: 2, title: '중등단어' },
    { id: 3, title: '고등단어' },
    { id: 4, title: '중등단어' },

  ];

  const [searchText, setSearchText] = useState<string>(''); // 검색어 상태

  const renderItem = ({ item }: { item: { id: number; title: string } }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigateToVocaContent(item.id)}>
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>사전 선택</Text>
      <Text style={styles.subtitle}>원하는 단어 사전을 선택하세요.</Text>
      <SearchBar setSearchText={setSearchText} searchText={searchText} initialSuggestions={['React', 'React Native', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Django', 'Spring']} />
      
      <FlatList
        data={vocaList}
        renderItem={renderItem} // Use the renderItem function to render your button
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.buttonContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: spacing.M32,
    flex: 1,
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginBottom: spacing.M8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.BLACK,
    marginBottom: spacing.M12,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: spacing.M2,
  },
  button: {
    backgroundColor: colors.GREEN,
    paddingVertical: spacing.M16,
    borderRadius: 8,
    marginBottom: spacing.M16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: 280,
  },
  buttonText: {
    color: colors.WHITE,
    ... getFontStyle('title', 'medium', 'bold'),
  } as TextStyle,
});

export default VocaScreen;
