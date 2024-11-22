import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.container}>
    로그인 페이지
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
