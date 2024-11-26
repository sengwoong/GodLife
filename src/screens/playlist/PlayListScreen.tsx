import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import SearchBar from '../../components/searchbar/SearchBar';
import { colors } from '../../constants';

function PlayListScreen() {
  const [searchText, setSearchText] = useState<string>('');

  const songs = useMemo(
    () => [
      { id: 1, title: 'Song 1 제목', url: 'https://www.example.com/song1' },
      { id: 2, title: 'Song 2 제목', url: 'https://www.example.com/song2' },
      { id: 3, title: 'Song 3 제목', url: 'https://www.example.com/song3' },
      { id: 4, title: 'Song 4 제목', url: 'https://www.example.com/song4' },
      { id: 5, title: 'Song 5 제목', url: 'https://www.example.com/song5' },
    ],
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar setSearchText={setSearchText} searchText={searchText} />

      <FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleText}>
                {item.title}
              </Text>
            </View>
            <View style={styles.contentContainer}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.contentText}>
                <Text>URL: </Text>
                <Text>{item.url}</Text>
              </Text>
            </View>
          </View>
        )}
      />
      
      <CustomButton color={"GREEN"} label="수정하기" style={styles.button} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 1,
    overflow: 'hidden',
    backgroundColor: colors.WHITE,
    elevation: 2,
  },
  titleContainer: {
    width: '30%',
    backgroundColor: colors.LIGHT_GRAY,
    padding: 10,
    justifyContent: 'center',
  },
  contentContainer: {
    width: '70%',
    backgroundColor: colors.WHITE,
    padding: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.BLACK,
  },
  contentText: {
    fontSize: 14,
    color: colors.BLACK,
  },
  button: {
    marginTop: 'auto',
  },
});

export default PlayListScreen;
