import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextStyle,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { PlayListStackParamList } from '../../navigations/stack/PlayListStackNavigator';
import { getFontStyle } from '../../constants';
import Margin from '../../components/Margin';

export default function PlayListEditScreen() {
  const [title, setTitle] = useState('');
  const [URL, setURL] = useState('');

  const route = useRoute<RouteProp<PlayListStackParamList, 'PlayListEdit'>>();
  const { type, Index } = route.params || {};

  const typeNamePlayList='플레이 리스트'

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('URL:', URL);
    console.log('Type:', type);
    console.log('Index:', Index);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {/* 헤더 */}
        <Margin size={'M12'} />
        {/* 중앙에 type 값 출력 */}
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>{type || 'Type 없음'}</Text>
        </View>
        <Margin size={'M12'} />
        {/* 입력 필드 */}
        <TextInput
          style={styles.input}
          placeholder={type+'추가하기'}
          value={title}
          onChangeText={setTitle}
        />
        {type === typeNamePlayList ?(
             <TextInput
             style={[styles.input, styles.textArea]}
             placeholder="URL 링크"
             value={URL}
             onChangeText={setURL}
             multiline
           />
        ):(<></>)}
     
        <Margin size={'M20'} />
        {/* 등록 버튼 */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>등록하기</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  typeContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  typeText: {
    ...getFontStyle('title', 'large', 'bold'),
    color: '#333',
  }as TextStyle ,
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
