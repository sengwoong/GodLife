import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TextStyle, View } from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { TextInput } from 'react-native-gesture-handler';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../../utils/validate';
import { colors, getFontStyle } from '../../constants';

function LoginScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  
  const login = useForm({
    initialValue: { email: '', password: '' },
    validate: validateLogin,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.largeText}>갓생</Text>
        <View style={styles.smallContainer}>
          <Text style={styles.smallText}>프리미엄 스케줄 관리</Text>
          <Text style={styles.smallText}>이번생 포기 안하기</Text>
        </View>
      </View>

      <View style={styles.loginContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          error={login.errors.email}
          touched={login.touched.email}
          inputMode="email"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={login.errors.password}
          touched={login.touched.password}
          secureTextEntry
          returnKeyType="join"
          {...login.getTextInputProps('password')}
        />
        
        <CustomButton
          label="로그인"
          variant="filled"
          size="large"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  largeText: {
    fonts : getFontStyle('display', 'large', 'medium'),
    color: colors.BLACK,
    textAlign: 'center',
  }as TextStyle,
  smallContainer: {
    marginTop: 16,
  },
  smallText: {
    fonts : getFontStyle('title', 'medium', 'medium'),
    textAlign: 'center',
  }as TextStyle,
  loginContainer: {
    gap: 8, 
  },
});

export default LoginScreen;
