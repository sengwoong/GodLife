import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/calendar/CalendarHomeScreen';  // 홈 화면 컴포넌트
import ProfileScreen from '../../screens/auth/SignScreen';  // 프로필 화면 컴포넌트
import SettingsScreen from '../../screens/auth/LoginScreen';  // 설정 화면 컴포넌트
import { authNavigations } from '../../constants';  // 기존 상수 사용

// 바텀 탭 파라미터 타입 정의
export type BottomTabParamList = {
  [authNavigations.HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name={authNavigations.HOME} // 탭 이름을 상수에서 가져옴
        component={HomeScreen} // HomeScreen 컴포넌트
        options={{
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name={authNavigations.LOGIN} // 탭 이름을 상수에서 가져옴
        component={ProfileScreen} // ProfileScreen 컴포넌트
        options={{
          tabBarLabel: '프로필',
        }}
      />
      <Tab.Screen
        name={authNavigations.SIGNUP} // 탭 이름을 상수에서 가져옴
        component={SettingsScreen} // SettingsScreen 컴포넌트
        options={{
          tabBarLabel: '설정',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
