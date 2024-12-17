import { RouteProp, useRoute } from '@react-navigation/native';
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
  TextStyle 
} from 'react-native';
import { VocaStackParamList } from '../../navigations/stack/VocaStackNavigator';
import { colors, getFontStyle, spacing } from '../../constants';
import Margin from '../../components/Margin';
import SelectButton from '../../components/SelectButton';

export default function VocaEditScreen() {
  const route = useRoute<RouteProp<VocaStackParamList, 'VocaContentEdit'>>();
  const { type , Index } = route.params || {};

  const [language, setLanguage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>();

  const languages = ['English', '日本語', 'Tiếng Việt', '中文', 'Русский'];

  const typeNameWord='단어'


  const handleSubmit = () => {
    // 폼 제출 처리 로직
    console.log('Language:', language);
    console.log('Word:', title);
    console.log('Description:', description);
    console.log('Type:', type, 'Index:', Index);
  };

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {/* 헤더 */}
        <Margin size={'M12'} />
        {/* 중앙에 type 값 출력 */}
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>{type +'추가하기'}</Text>
        </View>
        <Margin size={'M12'} />
        {/* 입력 필드 */}
        <TextInput
          style={styles.input}
          placeholder={type+'추가하기'}
          value={title}
          onChangeText={setTitle}
        />
        {type === typeNameWord ?(
          <TextInput
             style={[styles.input, styles.textArea]}
             placeholder="단어 해석"
             value={description}
             onChangeText={setDescription}
             multiline
           />
        ):(<></>)}

        <SelectButton
          options={languages}
          selectedOption={selectedLanguage}
          onSelect={setSelectedLanguage}
          disabled={false} 
        />
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
    padding: spacing.M20,
    backgroundColor: colors.WHITE,
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
    height: spacing.M80,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: spacing.M12,
    backgroundColor: colors.GREEN,
    padding: spacing.M16,
    borderRadius: spacing.M4,
    alignItems: 'center',
  },
  buttonText: {
    ...getFontStyle('titleBody', 'small', 'bold'),
    color: colors.WHITE,
  } as TextStyle,
});
