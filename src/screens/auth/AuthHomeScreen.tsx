import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigator';
import { authNavigations, colors } from '../../constants';
import CustomButton from '../../components/CustomButton';
import ImageSlider from '../../components/ImageSlider';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.HOME>;

function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  const images = [
    require('../../asset/images/MainImage.png'),
    require('../../asset/images/ScheduleImage.png'),
    require('../../asset/images/VocaImage.png'),
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageSlider images={images} />
        <View style={styles.textContainer}>
          <Text style={styles.largeText}>모두함께 갓생 살아요</Text>
          <View style={styles.smallContainer} >
          <Text style={styles.smallText}>작심 3일 스케줄 관리 실패</Text>
          <Text style={styles.smallText}>이제그만 갓생 라이프</Text>
          </View>
        </View>   
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인화면으로 이동"
          style={{ marginBottom: 32 }}
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입 이동"
          color="BLACK"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
    justifyContent: 'space-between',
  },
  textContainer:{
    marginTop: 60,
  },
  largeText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.BLACK,
    
  },
  smallContainer:{
    marginTop: 24,
  },
  smallText: {
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    marginVertical: 60,
  },
});

export default AuthHomeScreen;
