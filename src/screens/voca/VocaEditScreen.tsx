import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function VocaEditScreen() {
  const [language, setLanguage] = useState('');
  const [word, setWord] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log("Language:", language);
    console.log("Word:", word);
    console.log("Description:", description);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GodLife</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="단어"
          value={language}
          onChangeText={setLanguage}
        />
        <TextInput
          style={styles.input}
          placeholder="뜻"
          value={word}
          onChangeText={setWord}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="해석 입력, 더블클릭시 커진다."
          value={description}
          onChangeText={setDescription}
          multiline
        />

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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
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
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
