import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TextStyle } from 'react-native';
import CustomButton from '../../components/CustomButton';
import SearchBar from '../../components/searchbar/SearchBar';
import { getFontStyle } from '../../constants';

function VocaContentScreen() {

  const [searchText, setSearchText] = useState<string>(''); // 검색어 상태


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

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar setSearchText={setSearchText} searchText={searchText} />

      <FlatList
        data={schedules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.row}>
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
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between', 
  },
  row: {
    flexDirection: 'row',
    marginBottom: 1,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  titleContainer: {
    width: '30%',
    backgroundColor: '#d3d3d3',
    padding: 10,
    justifyContent: 'center',
  },
  contentContainer: {
    width: '70%',
    backgroundColor: '#ffffff',
    padding: 10,
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
