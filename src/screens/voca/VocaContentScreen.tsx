import React, { useMemo, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextStyle } from 'react-native';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import SearchBar from '../../components/searchbar/SearchBar';
import { getFontStyle, spacing, vocaNavigations } from '../../constants';
import { VocaStackParamList } from '../../navigations/stack/VocaStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '../../navigations/drawer/MainDrawerNavigator';
import BulletinBoard from '../../components/BulletinBoard';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<VocaStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

function VocaContentScreen() {
  const navigation = useNavigation<Navigation>();
  const [searchText, setSearchText] = useState<string>('');

  const schedules = useMemo(
    () => [
      { id: 20, title: '프로젝트 마감', content: '프로젝트 마감 상세 내용', time: '5:00 PM', day: 10 },
      { id: 31, title: '친구 생일', content: '친구 생일 상세 내용', time: 'All Day', day: 20 },
      { id: 10, title: '미팅', content: '미팅 상세 내용', time: '10:00 AM', day: 30 },
    ],
    []
  );


  
  const navigateToVocaContent = (wordIndex: number) => {
    navigation.navigate(vocaNavigations.VOCACONTENTEDIT, { wordIndex });
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
      <BulletinBoard data={schedules} onItemPress={navigateToVocaContent} />
      <CustomButton color="BLACK" label="취소" style={styles.button} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.M20,
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 'auto',
  },
});

export default VocaContentScreen;
