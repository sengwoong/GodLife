import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TextStyle } from 'react-native';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'; // import useNavigation
import CustomButton from '../../components/CustomButton';
import SearchBar from '../../components/searchbar/SearchBar';
import { getFontStyle, spacing, vocaNavigations } from '../../constants';
import { VocaStackParamList } from '../../navigations/stack/VocaStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '../../navigations/drawer/MainDrawerNavigator';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<VocaStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

function VocaContentScreen() {
  const navigation = useNavigation<Navigation>(); // using useNavigation hook
  const [searchText, setSearchText] = useState<string>('');

  const schedules = useMemo(
    () => [
      {
        id: 20,
        title: '프로젝트 마감',
        content:
          '프로젝트 마감 wafqfqwfqwfqwfqwfqwfqwfqwfqwfweghaewrgfhdfoiqwdoiwgawegwaegkphnewaknglkawenglknlwakegnlkwanglkwnalkgenlkwaengklwaenglkwaneg',
        time: '5:00 PM',
        day: 10,
      },
      {
        id: 31,
        title: '친구 생일',
        content:
          '친구 생일qwfoiphqwhfiqwoipfqhwipfhnqpie;ofhw;ahf;oipuauehf;opiwaeoifhwahfoiphewoiheoiewajhnflokwalkfwaefhjlk',
        time: 'All Day',
        day: 20,
      },
      {
        id: 220,
        title: '친구 생일',
        content:
          '친구 생일',
        time: 'All Day',
        day: 20,
      },
      {
        id: 330,
        title: '친구 생일',
        content:
          '친구 생일',
        time: 'All Day',
        day: 20,
      },
      { id: 10, title: '미팅', content: '미팅', time: '10:00 AM', day: 30 },
    ],
    []
  );

  const navigateToVocaContent = (wordIndex: number) => {
    navigation.navigate(vocaNavigations.VOCACONTENTEDIT , { wordIndex });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar setSearchText={setSearchText} searchText={searchText} initialSuggestions={ [
        'React',
        'React Native',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Python',
        'Django',
        'Spring',
      ]}/>

      <FlatList
        data={schedules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.row} onTouchEnd={() => navigateToVocaContent(item.id)}>
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleText}>
                  {item.title}
                </Text>
              </View>
              <View style={styles.contentContainer}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.contentText}>
                  {item.content}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
      
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
  row: {
    flexDirection: 'row',
    marginBottom: spacing.M2,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  titleContainer: {
    width: '30%',
    backgroundColor: '#d3d3d3',
    padding: spacing.M12,
    justifyContent: 'center',
  },
  contentContainer: {
    width: '70%',
    backgroundColor: '#ffffff',
    padding: spacing.M12,
  },
  titleText: {
    ... getFontStyle('titleBody', 'small', 'bold'),
    color: '#000',
  } as TextStyle,
  contentText: {
    ... getFontStyle('titleBody', 'small', 'medium'),
    color: '#333',
  }  as TextStyle,
  button: {
    marginTop: 'auto', 
  },
});

export default VocaContentScreen;
