import React, { useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';

function PlayListScreen() {
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
        id: 30,
        title: '친구 생일',
        content:
          '친구 생일qwfoiphqwhfiqwoipfqhwipfhnqpie;ofhw;ahf;oipuauehf;opiwaeoifhwahfoiphewoiheoiewajhnflokwalkfwaefhjlk',
        time: 'All Day',
        day: 20,
      },
      { id: 10, title: '미팅', content: '미팅', time: '10:00 AM', day: 30 },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={schedules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
          <View style={styles.row}>
            {/* 타이틀 */}
            <View style={styles.titleContainer}>
              <Text  numberOfLines={1} ellipsizeMode="tail" style={styles.titleText}>{item.title}</Text>
            </View>
            {/* 내용 */}
            <View style={styles.contentContainer}>
              <Text  numberOfLines={1}  ellipsizeMode="tail" style={styles.contentText}>{item.content}</Text>
            </View>
          </View>
                <View >
                <Text style={styles.contentText}>{item.content}</Text>
              </View>
              
              </View>
        )}
      />
        <CustomButton color='BLACK' label ='취소'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f5f5f5', // 배경색 설정
  },
  row: {
    flexDirection: 'row',
    marginBottom: 1,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 2, // 그림자 효과
  },
  titleContainer: {
    width: '30%', // 타이틀 영역 너비
    backgroundColor: '#d3d3d3', // 회색 배경
    padding: 10,
    justifyContent: 'center',
  },
  contentContainer: {
    width: '70%', // 내용 영역 너비
    backgroundColor: '#ffffff', // 흰색 배경
    padding: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000'
  },
  contentText: {
    fontSize: 14,
    color: '#333',
  },
});

export default PlayListScreen;
