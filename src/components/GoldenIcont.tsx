import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const GoldenIcon = () => {
  return (
    <View style={styles.container}>
   <Image
  source={require('../asset/images/GoldBricks.png')}  // assets 폴더 내에 위치한 이미지
  style={styles.image}
/>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default GoldenIcon;
