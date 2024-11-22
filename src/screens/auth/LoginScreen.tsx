import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ImageSlider from '../../components/ImageSlider';

function LoginScreen() {
  const images = [
    'https://via.placeholder.com/300x200.png?text=Image+1',
    'https://via.placeholder.com/300x200.png?text=Image+2',
    'https://via.placeholder.com/300x200.png?text=Image+3',
  ];
  return (
    <View>
      <Text>로그인 스크린</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default LoginScreen;
