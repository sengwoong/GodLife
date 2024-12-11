import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TextStyle, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/CustomButton';
import SearchBar from '../../components/searchbar/SearchBar';
import { colors, getFontStyle, PlayListNavigations, spacing } from '../../constants';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { PlayListStackParamList } from '../../navigations/stack/PlayListStackNavigator';
import { MainDrawerParamList } from '../../navigations/drawer/MainDrawerNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationProp } from '@react-navigation/stack';
import BulletinBoard from '../../components/BulletinBoard';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<PlayListStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

function PlayListContentScreen() {
  const [searchText, setSearchText] = useState<string>('');

  const songs = useMemo(
    () => [
      { id: 1, title: 'Song 1 제목', content: 'https://www.example.com/song1' },
      { id: 2, title: 'Song 2 제목', content: 'https://www.example.com/song2' },
      { id: 3, title: 'Song 3 제목', content: 'https://www.example.com/song3' },
      { id: 4, title: 'Song 4 제목', content: 'https://www.example.com/song4' },
      { id: 5, title: 'Song 5 제목', content: 'https://www.example.com/song5' },
    ],
    []
  );

  const navigation = useNavigation<Navigation>();

  const navigateToVocaContent = (musicIndex: number) => {
    navigation.navigate(PlayListNavigations.PLAYLISTEDIT, { musicIndex });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        setSearchText={setSearchText}
        searchText={searchText}
        initialSuggestions={[
          'React',
          'React Native',
          'JavaScript',
          'TypeScript',
          'Node.js',
          'Python',
          'Django',
          'Spring',
        ]}
      />
   <BulletinBoard data={songs} onItemPress={navigateToVocaContent} />
      <CustomButton color={"GREEN"} label="수정하기" style={styles.button} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.M20,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    marginBottom: spacing.M2,
    overflow: 'hidden',
    backgroundColor: colors.WHITE,
    elevation: 2,
  },
  titleContainer: {
    width: '30%',
    backgroundColor: colors.LIGHT_GRAY,
    padding: spacing.M12,
    justifyContent: 'center',
  },
  contentContainer: {
    width: '70%',
    backgroundColor: colors.WHITE,
    padding: spacing.M12,
  },
  titleText: {
    ...getFontStyle('titleBody', 'small', 'bold'),
    color: colors.BLACK,
  } as TextStyle,
  contentText: {
    ...getFontStyle('titleBody', 'small', 'medium'),
    color: colors.BLACK,
  } as TextStyle,
  button: {
    marginTop: 'auto',
  },
});

export default PlayListContentScreen;
